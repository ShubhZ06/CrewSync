import type { ReactNode } from "react";

const toneBg: Record<string, string> = {
  cream:  "bg-[#f5f0e8]",
  yellow: "bg-[#f5c800]",
  violet: "bg-[#c4b5fd]",
  white:  "bg-white",
  red:    "bg-[#e8341c]",
};

export function PageSection({
  title,
  description,
  children,
  tone = "cream",
  eyebrow = "Section",
}: {
  title: string;
  description?: string;
  children: ReactNode;
  tone?: "cream" | "yellow" | "violet" | "white" | "red";
  eyebrow?: string;
}) {
  return (
    <section className={`relative border-[3px] border-[#0a0a0a] ${toneBg[tone]} shadow-[6px_6px_0_0_#0a0a0a]`}>
      <div className="border-b-[3px] border-[#0a0a0a] bg-[#0a0a0a] px-6 py-5">
        <div className="flex items-center gap-2 mb-2">
          <span aria-hidden className="inline-block h-2.5 w-2.5 bg-[#e8341c]" />
          <span className="font-heading text-[10px] uppercase tracking-[0.3em] text-[#f5c800]">{eyebrow}</span>
        </div>
        <h2 className="font-heading text-2xl font-black uppercase leading-tight tracking-tight text-white sm:text-3xl">
          {title}
        </h2>
        {description && (
          <p className="mt-1 max-w-3xl text-sm font-semibold leading-snug text-white/80 sm:text-base">
            {description}
          </p>
        )}
      </div>
      <div className="p-6 sm:p-8">{children}</div>
    </section>
  );
}
