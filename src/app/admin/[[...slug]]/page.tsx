import { redirect } from "next/navigation";

export default async function AdminRedirect({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;
  const path = slug?.length ? "/" + slug.join("/") : "";
  redirect("/member" + path);
}
