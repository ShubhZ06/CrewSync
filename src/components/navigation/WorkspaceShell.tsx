import type { ReactNode } from "react";

export function WorkspaceShell({
  children,
  eyebrow = "Crew Sync",
  title = "Workspace",
  description,
}: {
  children: ReactNode;
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  return (
    <main className="ml-56 flex min-h-screen flex-col">
      {/* Page header */}
      <div className="border-b-[3px] border-[#0a0a0a] bg-white px-8 py-8">
        <div className="relative max-w-5xl">
          {/* Decorative corner accent */}
          <div aria-hidden className="pointer-events-none absolute -right-4 -top-4 hidden h-20 w-20 pattern-dots opacity-40 md:block" />
          <span className="tag tag-red">{eyebrow}</span>
          <h1 className="font-heading mt-3 text-4xl font-black uppercase leading-[0.92] tracking-tighter sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-3 max-w-2xl text-base font-semibold leading-relaxed text-[#0a0a0a]/70 sm:text-lg">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Page body */}
      <div className="flex flex-1 flex-col gap-6 px-8 py-8">
        {children}
      </div>
    </main>
  );
}
