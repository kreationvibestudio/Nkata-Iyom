"use server";

import { redirect } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/admin";

function getStr(formData: FormData, key: string): string | null {
  const v = formData.get(key);
  if (typeof v !== "string") return null;
  const t = v.trim();
  return t || null;
}

function getDate(formData: FormData, key: string): string | null {
  const v = getStr(formData, key);
  if (!v) return null;
  // Basic validity: YYYY-MM-DD
  if (/^\d{4}-\d{2}-\d{2}$/.test(v)) return v;
  return null;
}

function getInt(formData: FormData, key: string): number | null {
  const v = getStr(formData, key);
  if (!v) return null;
  const n = parseInt(v, 10);
  return Number.isFinite(n) && n >= 0 ? n : null;
}

export async function submitJoinForm(formData: FormData) {
  const full_name = getStr(formData, "full_name");
  const email = getStr(formData, "email");
  const signature_name = getStr(formData, "signature_name");

  if (!full_name || !email || !signature_name) {
    redirect("/join?error=" + encodeURIComponent("Full name, email, and electronic signature are required."));
  }

  const codeOfConduct = formData.get("code_of_conduct_agreed");
  if (codeOfConduct !== "yes") {
    redirect("/join?error=" + encodeURIComponent("You must agree to the Code of Conduct."));
  }

  const skills = formData.getAll("skills_volunteer_interests");
  const skillsArr = Array.isArray(skills) ? skills.filter((s): s is string => typeof s === "string") : [];

  let paymentProofUrl: string | null = null;
  const paymentProofFile = formData.get("payment_proof");
  if (paymentProofFile instanceof File && paymentProofFile.size > 0) {
    const admin = createAdminClient();
    const ext = paymentProofFile.name.split(".").pop()?.toLowerCase() || "bin";
    const safeName = `${crypto.randomUUID()}.${ext}`;
    const path = `uploads/${safeName}`;

    const { error: uploadError } = await admin.storage.from("payment-proof").upload(path, paymentProofFile, {
      contentType: paymentProofFile.type || "application/octet-stream",
      upsert: false,
    });

    if (uploadError) {
      console.error("payment-proof upload error:", uploadError);
      redirect("/join?error=" + encodeURIComponent("Failed to upload proof of payment. Please try again."));
    }
    paymentProofUrl = path;
  }

  const admin = createAdminClient();
  const { error } = await admin.from("join_applications").insert({
    full_name,
    title: getStr(formData, "title") || null,
    date_of_birth: getDate(formData, "date_of_birth") || null,
    sex: getStr(formData, "sex") || null,
    nationality: getStr(formData, "nationality") || null,
    institution_organization: getStr(formData, "institution_organization") || null,
    position_role: getStr(formData, "position_role") || null,
    mailing_address: getStr(formData, "mailing_address") || null,
    city_state_country: getStr(formData, "city_state_country") || null,
    phone_number: getStr(formData, "phone_number") || null,
    email,
    membership_category: getStr(formData, "membership_category") || null,
    area_of_interest: getStr(formData, "area_of_interest") || null,
    highest_qualification: getStr(formData, "highest_qualification") || null,
    specialization: getStr(formData, "specialization") || null,
    years_of_experience: getInt(formData, "years_of_experience"),
    relevant_publications_projects: getStr(formData, "relevant_publications_projects") || null,
    motivation_for_joining: getStr(formData, "motivation_for_joining") || null,
    skills_volunteer_interests: skillsArr.length > 0 ? skillsArr : null,
    payment_option: getStr(formData, "payment_option") || null,
    payment_proof_url: paymentProofUrl,
    code_of_conduct_agreed: true,
    signature_name,
  });

  if (error) {
    console.error("join_applications insert error:", error);
    redirect("/join?error=" + encodeURIComponent("Something went wrong. Please try again."));
  }
  redirect("/join?success=1");
}
