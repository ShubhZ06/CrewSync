const TONES: Record<string, string> = {
  accent: "bg-[#e8341c]",
  yellow: "bg-[#f5c800]",
  violet: "bg-[#c4b5fd]",
  white:  "bg-white",
  green:  "bg-[#86efac]",
};

export function InsightCard({
  label,
  value,
  detail,
  tone = "yellow",
  tilt = "right",
}: {
  label: string;
  value: string;
  detail: string;
  tone?: keyof typeof TONES;
  tilt?: "left" | "right" | "none";
}) {
  const tiltClass = tilt === "left" ? "-rotate-[0.8deg]" : tilt === "right" ? "rotate-[0.8deg]" : "";
  return (
    <article
      className={`group relative border-[3px] border-[#0a0a0a] ${TONES[tone]} p-6 shadow-[6px_6px_0_0_#0a0a0a] transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:rotate-0 hover:shadow-[10px_10px_0_0_#0a0a0a] ${tiltClass}`}
    >
      <span className="tag tag-dark mb-4">{label}</span>
      <p className="font-heading mt-3 text-5xl font-black uppercase leading-none tracking-tighter sm:text-6xl">
        {value}
      </p>
      <p className="mt-4 border-t-[3px] border-[#0a0a0a] pt-3 text-sm font-semibold leading-snug text-[#0a0a0a]/80">
        {detail}
      </p>
    </article>
  );
}
