import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { createClient } from "@/lib/supabase/server";
import { getProfile, hasMemberAccess } from "@/lib/profiles";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const sans = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Nkata Ndi Inyom Igbo | Empowering Igbo Women Through Shared Leadership and Culture",
    template: "%s | Nkata Ndi Inyom Igbo",
  },
  description:
    "Preserving Igbo culture while fostering women's leadership in Igbo communities through shared wisdom and strength.",
  keywords: ["Igbo", "women", "culture", "leadership", "Nkata Ndi Inyom", "community"],
  openGraph: {
    type: "website",
  },
  icons: {
    icon: "/logo.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const profile = user ? await getProfile(user.id) : null;
  const showMemberLink = !!user && hasMemberAccess(profile);

  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="min-h-screen min-h-[100dvh] flex flex-col overflow-x-hidden">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-500 focus:text-white focus:rounded-md"
        >
          Skip to main content
        </a>
        <Header signedIn={!!user} />
        <main id="main-content" className="flex-1 overflow-x-hidden min-w-0">
          {children}
        </main>
        <Footer showMemberLink={showMemberLink} />
      </body>
    </html>
  );
}
