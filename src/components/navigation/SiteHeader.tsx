"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOutUser } from "@/lib/auth-session";
import { useSessionUser } from "@/lib/use-session-user";
import { AppNav } from "./AppNav";

export function SiteHeader() {
  const router = useRouter();
  const user = useSessionUser();

  function handleSignOut() {
    signOutUser();
    router.push("/");
    router.refresh();
  }

  return (
    <aside className="fixed left-0 top-0 z-40 flex h-full w-56 flex-col border-r-[3px] border-[#0a0a0a] bg-[#f5f0e8]">
      {/* Logo */}
      <div className="border-b-[3px] border-[#0a0a0a] p-4">
        <Link
          href="/dashboard"
          className="group flex items-center gap-2 border-[3px] border-[#0a0a0a] bg-[#e8341c] px-3 py-2.5 shadow-[4px_4px_0_0_#0a0a0a] transition-transform duration-100 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#0a0a0a] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
        >
          <span className="font-heading text-base uppercase tracking-tight text-white leading-none">CrewSync</span>
          <span aria-hidden className="ml-auto inline-block h-2 w-2 bg-white" />
        </Link>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto">
        <AppNav />
      </div>

      {/* User + sign out */}
      <div className="border-t-[3px] border-[#0a0a0a] p-3">
        {user ? (
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 border-[3px] border-[#0a0a0a] bg-white px-3 py-2 shadow-[3px_3px_0_0_#0a0a0a]">
              <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center border-[2px] border-[#0a0a0a] bg-[#f5c800] font-heading text-xs font-black uppercase">
                {user.name.charAt(0) || "?"}
              </span>
              <span className="truncate text-xs font-bold text-[#0a0a0a]">{user.name}</span>
            </div>
            <button
              type="button"
              onClick={handleSignOut}
              className="btn btn-dark btn-sm w-full"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <Link href="/sign-in" className="btn btn-dark btn-sm w-full">Sign In</Link>
        )}
        <p className="mt-3 text-center font-heading text-[9px] uppercase tracking-widest text-[#0a0a0a]/40">
          v0.1 Beta
        </p>
      </div>
    </aside>
  );
}
