"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const inputClass =
    "w-full rounded-md border border-brand-300 px-3 py-2 text-brand-900 placeholder:text-brand-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500";
  const labelClass = "block text-sm font-medium text-brand-700 mb-1";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          email: email.trim(),
          phone: phone.trim(),
          message: message.trim(),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus({ type: "error", text: data.error ?? "Failed to send. Please try again." });
        return;
      }
      setStatus({ type: "success", text: "Message sent. We'll get back to you soon." });
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch {
      setStatus({ type: "error", text: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-first-name" className={labelClass}>
            First name
          </label>
          <input
            id="contact-first-name"
            type="text"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={inputClass}
            placeholder="e.g. Chioma"
            autoComplete="given-name"
          />
        </div>
        <div>
          <label htmlFor="contact-last-name" className={labelClass}>
            Last name
          </label>
          <input
            id="contact-last-name"
            type="text"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={inputClass}
            placeholder="e.g. Okonkwo"
            autoComplete="family-name"
          />
        </div>
      </div>
      <div>
        <label htmlFor="contact-email" className={labelClass}>
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
          placeholder="you@example.com"
          autoComplete="email"
        />
      </div>
      <div>
        <label htmlFor="contact-phone" className={labelClass}>
          Phone number
        </label>
        <input
          id="contact-phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={inputClass}
          placeholder="e.g. +234 800 000 0000"
          autoComplete="tel"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className={labelClass}>
          Message
        </label>
        <textarea
          id="contact-message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={inputClass}
          placeholder="How can we help?"
          autoComplete="off"
        />
      </div>
      <Button type="submit" disabled={loading}>
        {loading ? "Sending…" : "Submit"}
      </Button>
      {status && (
        <p
          className={`text-sm ${status.type === "error" ? "text-red-600" : "text-green-600"}`}
          role="alert"
        >
          {status.text}
        </p>
      )}
    </form>
  );
}
