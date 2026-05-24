import { WorkspaceShell } from "@/components/navigation";
import { InsightCard, ListCard, PageSection } from "@/components/workspace";

export default function ExpensesPage() {
  const signals = [
    "Monthly spend trend by category: software, subcontractors, and ops.",
    "Renewal calendar for subscriptions so you can cancel before auto-charge.",
    "Margin alerts when tooling costs rise faster than project income.",
  ];

  return (
    <WorkspaceShell
      eyebrow="Expenses"
      title="Kill The Margin Leaks"
      description="Subscription creep is silent revenue loss. This page makes it loud."
    >
      <div className="grid gap-5 sm:grid-cols-3">
        <InsightCard label="Monthly Spend" value="$487" detail="Across 9 active subscriptions." tone="accent" tilt="left" />
        <InsightCard label="Renewing Soon" value="03"   detail="Figma, Linear, Notion — all within 10 days." tone="yellow" tilt="none" />
        <InsightCard label="Margin"        value="68%"  detail="Healthy. Below 60% triggers alerts." tone="violet" tilt="right" />
      </div>

      <PageSection
        eyebrow="Why"
        title="How This Helps You"
        description="Expenses makes hidden costs visible so your freelance margin stays healthy."
        tone="yellow"
      >
        <div className="border-[3px] border-[#0a0a0a] bg-white p-5 shadow-[4px_4px_0_0_#0a0a0a]">
          <p className="text-base font-semibold leading-relaxed">
            Review spend trends and renewal pressure in one place{" "}
            <span className="bg-[#e8341c] px-2 text-white">before</span>{" "}
            pricing your next client scope.
          </p>
        </div>
      </PageSection>

      <PageSection
        eyebrow="Actions"
        title="What You Can Do Today"
        description="Practical outcomes from this page."
        tone="cream"
      >
        <ListCard title="Expense Workflow" items={signals} tone="accent" />
      </PageSection>
    </WorkspaceShell>
  );
}
