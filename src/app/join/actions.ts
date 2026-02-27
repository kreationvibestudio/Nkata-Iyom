"use server";

import { redirect } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/admin";

export async function submitJoinForm(formData: FormData) {
  const family_name = (formData.get("family_name") as string)?.trim();
  const first_name = (formData.get("first_name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  if (!family_name || !first_name || !email) {
    redirect("/join?error=" + encodeURIComponent("Family name, first name, and email are required."));
  }

  const dateOfBirthRaw = (formData.get("date_of_birth") as string)?.trim();
  const admin = createAdminClient();
  const { error } = await admin.from("join_applications").insert({
    family_name,
    first_name: first_name,
    middle_name: (formData.get("middle_name") as string)?.trim() || null,
    title_s: (formData.get("title_s") as string)?.trim() || null,
    date_of_birth: dateOfBirthRaw || null,
    address: (formData.get("address") as string)?.trim() || null,
    state_of_origin: (formData.get("state_of_origin") as string)?.trim() || null,
    email,
    phone_number: (formData.get("phone_number") as string)?.trim() || null,
    occupation: (formData.get("occupation") as string)?.trim() || null,
    educational_qualifications: (formData.get("educational_qualifications") as string)?.trim() || null,
    other_professional_qualifications: (formData.get("other_professional_qualifications") as string)?.trim() || null,
    your_values: (formData.get("your_values") as string)?.trim() || null,
    hobbies: (formData.get("hobbies") as string)?.trim() || null,
  });

  if (error) {
    console.error("join_applications insert error:", error);
    redirect("/join?error=" + encodeURIComponent("Something went wrong. Please try again."));
  }
  redirect("/join?success=1");
}
