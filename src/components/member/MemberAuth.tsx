"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import type { User } from "@supabase/supabase-js";
import { Button } from "@/components/ui/Button";

interface MemberAuthProps {
  user: User | null;
  redirectTo?: string;
}

export function MemberAuth({ user: initialUser, redirectTo }: MemberAuthProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "error" | "success"; text: string } | null>(null);
  const router = useRouter();
  const supabase = createClient();

  const safeRedirect = redirectTo?.startsWith("/") ? redirectTo : "/member";

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      setMessage({ type: "error", text: error.message });
      return;
    }
    if (data.user) {
      router.refresh();
      router.replace(safeRedirect);
    }
  };

  return (
    <div className="p-8 rounded-xl border border-brand-200/60 bg-surface">
      <h3 className="font-display text-lg text-brand-900">Sign in</h3>
      <p className="mt-1 text-sm text-brand-600">
        Access is by invitation only. Use the credentials provided by your administrator.
      </p>

      <form onSubmit={handleSignIn} className="mt-6 space-y-4">
        <div>
          <label htmlFor="member-email" className="block text-sm font-medium text-brand-700 mb-1">
            Email
          </label>
          <input
            id="member-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
            className="w-full rounded-md border border-brand-300 px-3 py-2 text-brand-900 placeholder:text-brand-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="member-password" className="block text-sm font-medium text-brand-700 mb-1">
            Password
          </label>
          <input
            id="member-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
            className="w-full rounded-md border border-brand-300 px-3 py-2 text-brand-900 placeholder:text-brand-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
            placeholder="••••••••"
          />
        </div>
        <Button type="submit" disabled={loading}>
          {loading ? "Signing in…" : "Sign in"}
        </Button>
      </form>

      {message && (
        <p className={`mt-4 text-sm ${message.type === "error" ? "text-red-600" : "text-green-600"}`} role="alert">
          {message.text}
        </p>
      )}

      <p className="mt-6 text-sm text-brand-600">
        <Link href="/contact" className="text-primary-500 hover:text-primary-600 font-medium">
          Contact us
        </Link>{" "}
        if you need access.
      </p>
    </div>
  );
}
