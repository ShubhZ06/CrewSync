import Link from "next/link";

const modules = [
  { label: "Find Clients",          color: "bg-[#e8341c] text-white" },
  { label: "Contracts",             color: "bg-[#f5c800] text-[#0a0a0a]" },
  { label: "Client Comms",          color: "bg-[#c4b5fd] text-[#0a0a0a]" },
  { label: "Payments",              color: "bg-[#86efac] text-[#0a0a0a]" },
  { label: "Settings",              color: "bg-[#0a0a0a] text-[#f5c800]" },
];

const features = [
  {
    num: "01",
    title: "Leads That Qualify Themselves",
    body: "Intent filters cut pitching time in half — only see opportunities worth your time.",
    bg: "bg-white",
    tilt: "-rotate-1",
  },
  {
    num: "02",
    title: "Contracts in Under 2 Min",
    body: "Legally clear drafts, three styles, no lawyer required. Send for signature instantly.",
    bg: "bg-[#f5c800]",
    tilt: "rotate-1",
  },
  {
    num: "03",
    title: "Client Updates, On Rails",
    body: "Status reports and warning nudges without rewriting anything from scratch.",
    bg: "bg-[#c4b5fd]",
    tilt: "-rotate-1",
  },
  {
    num: "04",
    title: "One Dashboard, All Flows",
    body: "Leads, contracts, comms, payments — one focused screen, zero tab switching.",
    bg: "bg-[#e8341c]",
    tilt: "rotate-0",
  },
];

const stories = [
  {
    persona: "Solo Designer",
    before: "Losing 3–4 hours/week switching tabs and rewriting the same updates.",
    after:  "Runs leads, contracts, and client updates in one flow. Ships faster.",
    bg: "bg-[#e8341c]",
    tilt: "-rotate-1",
  },
  {
    persona: "Fractional Marketer",
    before: "Client confidence drops when updates are delayed or inconsistent.",
    after:  "Sends polished progress reports and warning nudges on schedule, every week.",
    bg: "bg-[#f5c800]",
    tilt: "rotate-1",
  },
  {
    persona: "Dev Consultant",
    before: "Paperwork and e-signature delays stall billable project starts.",
    after:  "Generates contracts, tracks signing, and starts billable work sooner.",
    bg: "bg-[#c4b5fd]",
    tilt: "-rotate-1",
  },
];

const ticker = [
  "Run Client Work Without Chaos",
  "Anti-Corporate",
  "Built For Freelancers",
  "No More Tab Hell",
  "Stop Switching Tools",
  "Ship The Work",
];

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">

      {/* ── NAV ── */}
      <header className="sticky top-0 z-40 border-b-[3px] border-[#0a0a0a] bg-[#f5f0e8]">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="border-[3px] border-[#0a0a0a] bg-[#e8341c] px-3 py-2 shadow-[4px_4px_0_0_#0a0a0a]">
              <span className="font-heading text-lg uppercase tracking-tight text-white">
                CrewSync
              </span>
            </div>
            <span className="tag tag-yellow animate-wiggle hidden sm:inline-flex">Beta · v0.1</span>
          </div>
          <nav className="flex items-center gap-2">
            <Link href="/sign-in" className="btn btn-ghost text-xs">Sign In</Link>
            <Link href="/sign-up" className="btn btn-primary text-xs">Start Free →</Link>
          </nav>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden border-b-[3px] border-[#0a0a0a] bg-[#f5f0e8]">
        <div aria-hidden className="pointer-events-none absolute inset-0 pattern-grid opacity-60" />

        {/* decorative shapes */}
        <div aria-hidden className="pointer-events-none absolute right-12 top-16 hidden h-20 w-20 rotate-[15deg] border-[3px] border-[#0a0a0a] bg-[#f5c800] shadow-[5px_5px_0_0_#0a0a0a] md:block animate-float" style={{animationDelay:'0s'}} />
        <div aria-hidden className="pointer-events-none absolute left-[8%] bottom-20 hidden h-14 w-14 border-[3px] border-[#0a0a0a] bg-[#c4b5fd] rounded-full shadow-[4px_4px_0_0_#0a0a0a] md:block animate-float" style={{animationDelay:'1.2s'}} />
        <div aria-hidden className="pointer-events-none absolute right-[18%] bottom-12 hidden h-10 w-10 rotate-45 border-[3px] border-[#0a0a0a] bg-[#e8341c] shadow-[4px_4px_0_0_#0a0a0a] lg:block animate-float" style={{animationDelay:'0.6s'}} />

        <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.1fr_1fr] lg:gap-20 lg:px-8 lg:py-32">

          {/* left — copy */}
          <div className="flex flex-col justify-center gap-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="tag tag-red animate-wiggle">★ v0.1 · Now Live</span>
              <span className="tag">For Freelancers</span>
            </div>

            <h1 className="font-heading text-[clamp(3.5rem,9vw,7rem)] font-black uppercase leading-[0.88] tracking-tighter text-[#0a0a0a]">
              <span className="inline-block -rotate-1">Run</span>{" "}
              <span className="inline-block bg-[#e8341c] px-3 py-1 text-white text-hard-shadow">
                client
              </span>
              <br />
              <span className="inline-block">work</span>{" "}
              <span className="text-outline">without</span>
              <br />
              <span className="inline-block rotate-[0.8deg] bg-[#f5c800] px-3 py-1 text-[#0a0a0a]">
                the chaos.
              </span>
            </h1>

            <p className="max-w-lg text-xl font-semibold leading-relaxed text-[#0a0a0a] sm:text-2xl">
              Leads → Contracts → Updates → Done.
              <br />
              One focused operating system. Zero corporate nonsense.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link href="/sign-up" className="btn btn-primary btn-xl">Start Free →</Link>
              <Link href="/sign-in" className="btn btn-xl">Sign In</Link>
            </div>

            <div className="flex flex-wrap items-center gap-4 border-t-[3px] border-[#0a0a0a] pt-6">
              <div className="flex -space-x-2">
                {(["#e8341c","#f5c800","#c4b5fd","#0a0a0a"] as const).map((c, i) => (
                  <span
                    key={c}
                    className="inline-flex h-10 w-10 items-center justify-center border-[3px] border-[#0a0a0a] font-heading text-xs font-black"
                    style={{ background: c, color: c === "#0a0a0a" ? "#f5c800" : "#0a0a0a", zIndex: 4 - i }}
                  >
                    {["A","M","K","S"][i]}
                  </span>
                ))}
              </div>
              <div>
                <p className="font-heading text-xl font-black uppercase tracking-tight">1,200+ freelancers</p>
                <p className="text-sm font-semibold text-[#0a0a0a]/70">shipping client work without the tab hell.</p>
              </div>
            </div>
          </div>

          {/* right — floating mockup cards */}
          <div className="relative hidden min-h-[540px] select-none lg:block">
            <span aria-hidden className="text-outline font-heading pointer-events-none absolute -right-4 top-0 text-[17rem] font-black leading-none opacity-30">01</span>

            {/* Dashboard card */}
            <div className="absolute left-4 top-10 w-[340px] -rotate-[3deg] border-[3px] border-[#0a0a0a] bg-white shadow-[10px_10px_0_0_#0a0a0a]">
              <div className="flex items-center gap-2 border-b-[3px] border-[#0a0a0a] bg-[#0a0a0a] px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#e8341c]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#f5c800]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#c4b5fd]" />
                <span className="ml-auto font-heading text-[10px] uppercase tracking-[0.25em] text-[#f5c800]">Dashboard</span>
              </div>
              <div className="space-y-4 p-5">
                <div className="flex items-center justify-between">
                  <span className="font-heading text-xs font-black uppercase tracking-widest">This Week</span>
                  <span className="tag tag-red text-[10px]">▲ 24%</span>
                </div>
                <p className="font-heading text-[2.8rem] font-black leading-none tracking-tighter">$12,480</p>
                <div className="h-[3px] bg-[#0a0a0a]" />
                <div className="grid grid-cols-3 gap-2">
                  {[{l:"Leads",v:"12"},{l:"Sent",v:"04"},{l:"Signed",v:"03"}].map(s => (
                    <div key={s.l} className="border-[2px] border-[#0a0a0a] bg-[#f5f0e8] py-2 text-center">
                      <p className="font-heading text-2xl font-black">{s.v}</p>
                      <p className="font-heading text-[9px] uppercase tracking-widest">{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Signed contract sticker */}
            <div className="absolute right-6 top-36 w-[220px] rotate-[5deg] border-[3px] border-[#0a0a0a] bg-[#f5c800] p-4 shadow-[7px_7px_0_0_#0a0a0a]">
              <p className="font-heading text-[10px] uppercase tracking-[0.25em]">Contract #A-221</p>
              <p className="font-heading mt-2 text-xl font-black leading-tight">Signed by Acme Co.</p>
              <p className="mt-2 text-xs font-semibold text-[#0a0a0a]/70">2 min ago</p>
            </div>

            {/* Spinning badge */}
            <div className="absolute bottom-20 right-16 h-24 w-24 animate-spin-slow">
              <div className="flex h-full w-full items-center justify-center border-[3px] border-[#0a0a0a] bg-[#e8341c] shadow-[4px_4px_0_0_#0a0a0a]">
                <span className="font-heading text-[10px] font-black uppercase leading-tight text-white text-center">★ new ★</span>
              </div>
            </div>

            {/* Low note */}
            <div className="absolute bottom-4 left-4 w-[240px] -rotate-[1.5deg] border-[3px] border-[#0a0a0a] bg-[#c4b5fd] p-4 shadow-[6px_6px_0_0_#0a0a0a]">
              <p className="font-heading text-[10px] uppercase tracking-[0.25em]">⚠ Renewal Due</p>
              <p className="mt-1 text-sm font-semibold">Figma · $45/mo · 6 days left</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TICKER ── */}
      <section className="overflow-hidden border-b-[3px] border-[#0a0a0a] bg-[#0a0a0a] py-4">
        <div className="flex whitespace-nowrap">
          <div className="animate-marquee flex shrink-0 items-center gap-8 pr-8">
            {[...ticker,...ticker].map((p,i) => (
              <span key={`${p}-${i}`} className="flex items-center gap-8">
                <span className="font-heading text-2xl uppercase tracking-tight text-[#f5c800]">{p}</span>
                <span className="text-2xl text-[#e8341c]">★</span>
              </span>
            ))}
          </div>
          <div className="animate-marquee flex shrink-0 items-center gap-8 pr-8" aria-hidden>
            {[...ticker,...ticker].map((p,i) => (
              <span key={`dup-${p}-${i}`} className="flex items-center gap-8">
                <span className="font-heading text-2xl uppercase tracking-tight text-[#f5c800]">{p}</span>
                <span className="text-2xl text-[#e8341c]">★</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── MODULES STRIP ── */}
      <section className="relative overflow-hidden border-b-[3px] border-[#0a0a0a] bg-[#c4b5fd] py-20 sm:py-28">
        <div aria-hidden className="pointer-events-none absolute inset-0 pattern-dots opacity-25" />
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="tag tag-dark">What&apos;s Inside</span>
              <h2 className="font-heading mt-5 text-[clamp(2.5rem,6vw,5rem)] font-black uppercase leading-[0.92] tracking-tighter">
                Five modules.{" "}
                <br />
                <span className="bg-[#0a0a0a] px-3 text-[#f5c800]">One mission.</span>
              </h2>
            </div>
            <p className="max-w-xs text-lg font-semibold text-[#0a0a0a]/80">
              Everything you need to run a freelance business. Nothing you don&apos;t.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {modules.map((m, i) => (
              <span
                key={m.label}
                className={`inline-flex items-center gap-2 border-[3px] border-[#0a0a0a] ${m.color} px-5 py-3 font-heading text-lg font-black uppercase tracking-tight shadow-[4px_4px_0_0_#0a0a0a] transition-transform duration-150 hover:-translate-y-1 hover:shadow-[7px_7px_0_0_#0a0a0a] ${
                  i % 3 === 0 ? "-rotate-1" : i % 3 === 1 ? "rotate-0" : "rotate-1"
                }`}
              >
                <span className="text-xs opacity-60 font-heading">{String(i+1).padStart(2,"0")}</span>
                {m.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="relative border-b-[3px] border-[#0a0a0a] bg-[#f5f0e8] py-20 sm:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="tag tag-yellow">How It Works</span>
            <h2 className="font-heading mt-5 text-[clamp(2.5rem,6vw,5rem)] font-black uppercase leading-[0.92] tracking-tighter">
              Four fewer
              <br />
              <span className="bg-[#e8341c] px-3 text-white text-hard-shadow">tabs open.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg font-semibold text-[#0a0a0a]/75">
              Stop Frankenstein-ing a workflow out of Notion, Google Docs, Stripe, DocuSign,
              and whatever else. CrewSync does the whole thing.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <article
                key={f.num}
                className={`group relative border-[3px] border-[#0a0a0a] ${f.bg} p-6 shadow-[7px_7px_0_0_#0a0a0a] transition-all duration-200 hover:-translate-y-2 hover:rotate-0 hover:shadow-[12px_12px_0_0_#0a0a0a] ${f.tilt}`}
              >
                <p className="text-outline font-heading text-[5.5rem] font-black leading-none">{f.num}</p>
                <h3 className="font-heading mt-3 text-xl font-black uppercase tracking-tight">{f.title}</h3>
                <p className="mt-3 border-t-[3px] border-[#0a0a0a] pt-3 text-sm font-semibold leading-snug text-[#0a0a0a]/80">{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── PERSONAS ── */}
      <section className="relative border-b-[3px] border-[#0a0a0a] bg-[#0a0a0a] py-20 sm:py-28">
        <div aria-hidden className="pointer-events-none absolute inset-0 pattern-dots-lg opacity-20" />
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="tag tag-yellow">Built For You</span>
              <h2 className="font-heading mt-5 text-[clamp(2.5rem,6vw,5rem)] font-black uppercase leading-[0.92] tracking-tighter text-white">
                Who{" "}
                <span className="text-[#e8341c]">actually</span>
                <br />
                uses this?
              </h2>
            </div>
            <p className="max-w-xs text-lg font-semibold text-white/70">
              If you bill by the project and chase your own invoices, this is you.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {stories.map((s) => (
              <article
                key={s.persona}
                className={`group border-[3px] border-[#0a0a0a] ${s.bg} p-6 shadow-white transition-all duration-200 hover:-translate-y-2 hover:rotate-0 hover:shadow-[14px_14px_0_0_#fff] ${s.tilt}`}
              >
                <span className="tag tag-dark mb-5">{s.persona}</span>
                <div className="border-[3px] border-[#0a0a0a] bg-white p-4">
                  <p className="font-heading text-[10px] uppercase tracking-[0.25em]">Before</p>
                  <p className="mt-2 text-sm font-semibold leading-snug">{s.before}</p>
                </div>
                <div className="my-4 flex justify-center">
                  <span className="font-heading text-3xl font-black">↓</span>
                </div>
                <div className="border-[3px] border-[#0a0a0a] bg-[#0a0a0a] p-4">
                  <p className="font-heading text-[10px] uppercase tracking-[0.25em] text-[#f5c800]">After</p>
                  <p className="mt-2 text-sm font-semibold leading-snug text-white">{s.after}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative border-b-[3px] border-[#0a0a0a] bg-[#e8341c] py-24 sm:py-36">
        <div aria-hidden className="pointer-events-none absolute inset-0 pattern-diagonal opacity-[0.07]" />
        <div className="relative mx-auto w-full max-w-5xl px-4 text-center sm:px-6">
          <div className="inline-flex items-center gap-2 mb-6">
            <span aria-hidden className="h-[3px] w-10 bg-[#0a0a0a]" />
            <span className="tag tag-dark">Ready?</span>
            <span aria-hidden className="h-[3px] w-10 bg-[#0a0a0a]" />
          </div>
          <h2 className="font-heading text-[clamp(3.5rem,10vw,8rem)] font-black uppercase leading-[0.88] tracking-tighter text-white text-hard-shadow">
            Stop
            <br />
            <span className="text-outline" style={{"--fg": "#fff"} as React.CSSProperties}>switching</span>
            <br />
            <span className="bg-[#0a0a0a] px-4 text-[#f5c800]">tabs.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-xl font-semibold text-white/90">
            30-second setup. No credit card. Cancel any time.
            <br />
            Your client work, unchained.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/sign-up" className="btn btn-dark btn-xl">Start Free →</Link>
            <Link href="/sign-in" className="btn btn-xl bg-white">Sign In</Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#f5c800] border-t-[3px] border-[#0a0a0a] py-10">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="border-[3px] border-[#0a0a0a] bg-white px-3 py-2 shadow-[3px_3px_0_0_#0a0a0a]">
              <span className="font-heading text-base font-black uppercase tracking-tight">CrewSync</span>
            </div>
            <span className="tag">v0.1</span>
          </div>
          <p className="font-heading text-sm font-black uppercase tracking-[0.2em] text-[#0a0a0a]">
            © 2026 · Built Loud. Built Raw.
          </p>
        </div>
      </footer>

    </main>
  );
}
