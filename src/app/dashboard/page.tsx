import Link from "next/link";
import { WorkspaceShell } from "@/components/navigation";

const modules = [
  {
    href: "/acquisition",
    label: "Find Clients",
    detail: "Aggregate & qualify leads from 6+ job boards.",
    why: "Intent filters cut pitching time in half.",
    bg: "bg-[#e8341c]",
    textColor: "text-white",
    num: "01",
    icon: "◉",
    shadow: "shadow-[6px_6px_0_0_#0a0a0a]",
    hoverShadow: "hover:shadow-[10px_10px_0_0_#0a0a0a]",
  },
  {
    href: "/communications",
    label: "Client Comms",
    detail: "Send updates and warning messages via WhatsApp.",
    why: "Dispatch status reports without rewriting a thing.",
    bg: "bg-[#f5c800]",
    textColor: "text-[#0a0a0a]",
    num: "02",
    icon: "✉",
    shadow: "shadow-[6px_6px_0_0_#0a0a0a]",
    hoverShadow: "hover:shadow-[10px_10px_0_0_#0a0a0a]",
  },
  {
    href: "/contracts",
    label: "Contracts",
    detail: "Generate, preview, and send for signature.",
    why: "Legally clear drafts in under 2 minutes.",
    bg: "bg-[#c4b5fd]",
    textColor: "text-[#0a0a0a]",
    num: "03",
    icon: "📄",
    shadow: "shadow-[6px_6px_0_0_#0a0a0a]",
    hoverShadow: "hover:shadow-[10px_10px_0_0_#0a0a0a]",
  },
  {
    href: "/payment/generate",
    label: "Payments",
    detail: "Generate Stripe checkout links instantly.",
    why: "Hosted pay page — share via link or WhatsApp.",
    bg: "bg-[#86efac]",
    textColor: "text-[#0a0a0a]",
    num: "04",
    icon: "💳",
    shadow: "shadow-[6px_6px_0_0_#0a0a0a]",
    hoverShadow: "hover:shadow-[10px_10px_0_0_#0a0a0a]",
  },
  {
    href: "/settings",
    label: "Settings",
    detail: "Profile, business defaults, and integrations.",
    why: "Configure once. Every workflow starts your way.",
    bg: "bg-[#0a0a0a]",
    textColor: "text-[#f5c800]",
    num: "05",
    icon: "⚙",
    shadow: "shadow-[6px_6px_0_0_#e8341c]",
    hoverShadow: "hover:shadow-[10px_10px_0_0_#e8341c]",
  },
];

const quickStats = [
  { label: "Modules",   value: "05", bg: "bg-[#f5c800]" },
  { label: "Workflows", value: "03", bg: "bg-[#c4b5fd]" },
  { label: "Status",    value: "Live", bg: "bg-[#86efac]" },
];

export default function DashboardPage() {
  return (
    <WorkspaceShell
      eyebrow="Dashboard"
      title="Your Command Center"
      description="Launch every workflow from here. Each module knows its job — you pick the next move."
    >

      {/* Quick stats bar */}
      <div className="flex flex-wrap gap-3">
        {quickStats.map((s) => (
          <div
            key={s.label}
            className={`flex items-center gap-3 border-[3px] border-[#0a0a0a] ${s.bg} px-5 py-3 shadow-[4px_4px_0_0_#0a0a0a]`}
          >
            <span className="font-heading text-2xl font-black leading-none">{s.value}</span>
            <span className="font-heading text-xs font-black uppercase tracking-widest text-[#0a0a0a]/70">{s.label}</span>
          </div>
        ))}
        <div className="flex items-center gap-2 border-[3px] border-[#0a0a0a] bg-white px-5 py-3 shadow-[4px_4px_0_0_#0a0a0a]">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-[#1a9e52]" />
          <span className="font-heading text-xs font-black uppercase tracking-widest text-[#0a0a0a]/70">All Systems Go</span>
        </div>
      </div>

      {/* Module launcher */}
      <section className="border-[3px] border-[#0a0a0a] bg-white shadow-[6px_6px_0_0_#0a0a0a]">
        <header className="flex items-center justify-between border-b-[3px] border-[#0a0a0a] bg-[#0a0a0a] px-6 py-5">
          <div>
            <p className="font-heading text-[10px] uppercase tracking-[0.3em] text-[#f5c800]">Launcher</p>
            <h2 className="font-heading mt-1 text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
              Jump To A Module
            </h2>
          </div>
          <span className="tag tag-yellow">05 Modules</span>
        </header>

        <div className="grid gap-4 p-6 sm:grid-cols-2 xl:grid-cols-3">
          {modules.map((m, idx) => {
            const tilts = ["-rotate-[0.8deg]", "rotate-[0.8deg]", "-rotate-[0.8deg]", "rotate-[0.8deg]", "rotate-0"];
            return (
              <Link
                key={m.href}
                href={m.href}
                className={`group relative block border-[3px] border-[#0a0a0a] ${m.bg} p-5 ${m.shadow} transition-all duration-150 hover:-translate-y-1 hover:rotate-0 ${m.hoverShadow} ${tilts[idx]}`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl leading-none" aria-hidden>{m.icon}</span>
                    <span className={`text-outline font-heading text-[4rem] font-black leading-none ${m.textColor}`}
                          style={m.textColor === "text-white" ? {WebkitTextStrokeColor:"#fff"} : {}}>
                      {m.num}
                    </span>
                  </div>
                  <span className={`inline-flex h-9 w-9 items-center justify-center border-[3px] border-[#0a0a0a] bg-white font-heading text-lg font-black transition-transform group-hover:translate-x-1`}>
                    →
                  </span>
                </div>
                <p className={`font-heading mt-4 text-xl font-black uppercase tracking-tight ${m.textColor}`}>
                  {m.label}
                </p>
                <p className={`mt-1 text-sm font-semibold ${m.textColor} opacity-80`}>{m.detail}</p>
                <p className={`mt-4 border-t-[2.5px] border-[#0a0a0a] pt-3 text-xs font-semibold leading-snug ${m.textColor} opacity-70`}>
                  {m.why}
                </p>
              </Link>
            );
          })}

          {/* Getting started card */}
          <div className="border-[2.5px] border-dashed border-[#0a0a0a] bg-[#f5f0e8] p-5">
            <p className="font-heading text-xs uppercase tracking-widest text-[#0a0a0a]/50">Getting Started</p>
            <p className="font-heading mt-2 text-lg font-black uppercase tracking-tight">New Here?</p>
            <ol className="mt-4 space-y-2">
              {["Set up your profile in Settings","Find your first lead in Find Clients","Generate a contract and send it"].map((step,i) => (
                <li key={step} className="flex items-start gap-2 text-xs font-semibold text-[#0a0a0a]/70">
                  <span className="mt-0.5 shrink-0 font-heading font-black text-[#e8341c]">{i+1}.</span>
                  {step}
                </li>
              ))}
            </ol>
            <Link href="/settings" className="btn btn-dark btn-sm mt-5 w-full">
              Start Setup →
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom info strip */}
      <div className="border-[3px] border-[#0a0a0a] bg-[#0a0a0a] px-6 py-4 shadow-[4px_4px_0_0_#e8341c]">
        <p className="font-heading text-xs uppercase tracking-[0.25em] text-[#f5c800]/70">
          CrewSync v0.1 Beta · Built Loud. Built Raw. · All workflows run locally — your data stays yours.
        </p>
      </div>

    </WorkspaceShell>
  );
}
