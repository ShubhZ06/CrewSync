const toneBg: Record<string, string> = {
  white:  "bg-white",
  yellow: "bg-[#f5c800]",
  violet: "bg-[#c4b5fd]",
  accent: "bg-[#e8341c]",
  green:  "bg-[#86efac]",
};

export function ListCard({
  title,
  items,
  tone = "white",
}: {
  title: string;
  items: string[];
  tone?: keyof typeof toneBg;
}) {
  return (
    <article className="border-[3px] border-[#0a0a0a] bg-white shadow-[5px_5px_0_0_#0a0a0a]">
      <header className={`flex items-center justify-between border-b-[3px] border-[#0a0a0a] ${toneBg[tone]} px-5 py-4`}>
        <h3 className="font-heading text-xl font-black uppercase tracking-tight">{title}</h3>
        <span className="pill tag-dark">{items.length.toString().padStart(2,"0")}</span>
      </header>
      <ol className="divide-y-[2.5px] divide-[#0a0a0a]">
        {items.map((item, idx) => (
          <li
            key={item}
            className="flex items-start gap-4 px-5 py-4 transition-colors duration-100 hover:bg-[#f5f0e8]"
          >
            <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center border-[2.5px] border-[#0a0a0a] bg-[#f5c800] font-heading text-xs font-black">
              {String(idx + 1).padStart(2, "0")}
            </span>
            <p className="text-sm font-semibold leading-snug text-[#0a0a0a]/80">{item}</p>
          </li>
        ))}
      </ol>
    </article>
  );
}
