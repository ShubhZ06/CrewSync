"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/dashboard",         label: "Dashboard",       icon: "◆", color: "bg-[#f5c800]" },
  { href: "/acquisition",       label: "Find Clients",    icon: "◉", color: "bg-[#e8341c]" },
  { href: "/communications",    label: "Client Comms",    icon: "✉", color: "bg-[#c4b5fd]" },
  { href: "/contracts",         label: "Contracts",       icon: "📄", color: "bg-[#f5c800]" },
  { href: "/payment/generate",  label: "Payments",        icon: "💳", color: "bg-[#86efac]" },
  { href: "/settings",          label: "Settings",        icon: "⚙",  color: "bg-[#f5f0e8]" },
];

export function AppNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation" className="flex flex-col gap-1 p-3">
      {navItems.map((item) => {
        const isActive = pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={`group relative flex items-center gap-3 border-[3px] border-[#0a0a0a] px-3 py-2.5 font-heading text-xs font-black uppercase tracking-widest transition-all duration-100 ${
              isActive
                ? `${item.color} shadow-[4px_4px_0_0_#0a0a0a] translate-x-0 translate-y-0`
                : "bg-white text-[#0a0a0a] shadow-[3px_3px_0_0_#0a0a0a] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_0_#0a0a0a] hover:bg-[#f5f0e8] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
            }`}
          >
            {isActive && (
              <span aria-hidden className="absolute left-0 top-0 bottom-0 w-1 bg-[#0a0a0a]" />
            )}
            <span className="text-base leading-none" aria-hidden>{item.icon}</span>
            <span className="truncate">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
