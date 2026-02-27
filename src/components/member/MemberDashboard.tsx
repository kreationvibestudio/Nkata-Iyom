"use client";

import Link from "next/link";
import type { User } from "@supabase/supabase-js";
import { Button } from "@/components/ui/Button";

interface MemberDashboardProps {
  user: User;
  showAdminLink?: boolean;
  onSignOut: () => void;
  signingOut?: boolean;
}

const cardBase =
  "group block p-6 rounded-xl border border-brand-200/60 bg-surface hover:shadow-lg hover:border-primary-200/60 transition-all duration-300";

export function MemberDashboard({
  user,
  showAdminLink,
  onSignOut,
  signingOut = false,
}: MemberDashboardProps) {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Welcome card */}
      <div className="mb-8 p-6 rounded-xl border border-primary-200/60 bg-primary-50/50">
        <h2 className="font-display text-display-sm text-brand-900">
          Welcome back
        </h2>
        <p className="mt-1 text-brand-700">
          Signed in as <strong className="text-brand-900">{user.email}</strong>
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={onSignOut}
            disabled={signingOut}
          >
            {signingOut ? "Signing out…" : "Sign out"}
          </Button>
        </div>
      </div>

      {/* Resource cards */}
      <h3 className="font-display text-lg text-brand-900 mb-4">Member resources</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link href="/library" className={cardBase}>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary-100 text-primary-600 mb-4">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </span>
          <h4 className="font-display text-display-sm text-brand-900 group-hover:text-primary-600 transition-colors">
            Bookshelf
          </h4>
          <p className="mt-2 text-sm text-brand-600">
            Browse our collection of books and resources.
          </p>
          <span className="mt-3 inline-flex items-center text-sm font-medium text-primary-500 group-hover:text-primary-600">
            Open bookshelf
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </Link>

        <Link href="/videos" className={cardBase}>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary-100 text-primary-600 mb-4">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </span>
          <h4 className="font-display text-display-sm text-brand-900 group-hover:text-primary-600 transition-colors">
            Video Library
          </h4>
          <p className="mt-2 text-sm text-brand-600">
            Watch cultural content, talks, and events.
          </p>
          <span className="mt-3 inline-flex items-center text-sm font-medium text-primary-500 group-hover:text-primary-600">
            Watch videos
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </Link>

        <Link href="/events" className={cardBase}>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary-100 text-primary-600 mb-4">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </span>
          <h4 className="font-display text-display-sm text-brand-900 group-hover:text-primary-600 transition-colors">
            Events
          </h4>
          <p className="mt-2 text-sm text-brand-600">
            Upcoming workshops, meetings, and community events.
          </p>
          <span className="mt-3 inline-flex items-center text-sm font-medium text-primary-500 group-hover:text-primary-600">
            View events
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </Link>

        <Link href="/blog" className={cardBase}>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary-100 text-primary-600 mb-4">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </span>
          <h4 className="font-display text-display-sm text-brand-900 group-hover:text-primary-600 transition-colors">
            Blog
          </h4>
          <p className="mt-2 text-sm text-brand-600">
            Stories, cultural insights, and updates from our community.
          </p>
          <span className="mt-3 inline-flex items-center text-sm font-medium text-primary-500 group-hover:text-primary-600">
            Read blog
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </Link>

        <Link href="/contact" className={cardBase}>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary-100 text-primary-600 mb-4">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </span>
          <h4 className="font-display text-display-sm text-brand-900 group-hover:text-primary-600 transition-colors">
            Contact
          </h4>
          <p className="mt-2 text-sm text-brand-600">
            Get in touch with the NNII team.
          </p>
          <span className="mt-3 inline-flex items-center text-sm font-medium text-primary-500 group-hover:text-primary-600">
            Contact us
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </Link>

        {showAdminLink && (
          <Link href="/admin" className={`${cardBase} border-primary-200/60 bg-primary-50/30`}>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary-200/60 text-primary-600 mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </span>
            <h4 className="font-display text-display-sm text-brand-900 group-hover:text-primary-600 transition-colors">
              Admin
            </h4>
            <p className="mt-2 text-sm text-brand-600">
              Manage events and blog posts.
            </p>
            <span className="mt-3 inline-flex items-center text-sm font-medium text-primary-500 group-hover:text-primary-600">
              Open admin
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        )}
      </div>
    </div>
  );
}
