import { Suspense } from "react";
import Link from "next/link";
import { AuthForm } from "@/components/auth/AuthForm";

export default function SignInPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f5f0e8]">
      {/* Top nav */}
      <header className="border-b-[3px] border-[#0a0a0a] bg-[#f5f0e8] px-6 py-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 border-[3px] border-[#0a0a0a] bg-[#e8341c] px-3 py-2 shadow-[4px_4px_0_0_#0a0a0a] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#0a0a0a]"
        >
          <span className="font-heading text-base uppercase tracking-tight text-white">CrewSync</span>
          <span aria-hidden className="inline-block h-2 w-2 bg-white" />
        </Link>
      </header>

      <div className="flex flex-1 items-center justify-center px-4 py-12 sm:px-6">
        <div className="w-full max-w-5xl">
          <Suspense fallback={null}>
            <AuthForm mode="sign-in" />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
