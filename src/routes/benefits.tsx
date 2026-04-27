import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/benefits")({
  head: () => ({
    meta: [
      { title: "Employee Benefits — QuickMart Careers" },
      { name: "description", content: "Health insurance, paid time off, employee discounts, flexible schedules, and growth opportunities at QuickMart." },
    ],
  }),
  component: BenefitsPage,
});

const benefits = [
  { t: "Medical, dental & vision", d: "Comprehensive coverage for eligible full-time team members." },
  { t: "Paid time off", d: "Earn PTO from your first shift." },
  { t: "401(k) with match", d: "Plan for the future with company contributions." },
  { t: "Employee discount", d: "Save on groceries and household essentials." },
  { t: "Flexible scheduling", d: "Day, evening, and weekend shifts to fit your life." },
  { t: "Tuition assistance", d: "Support for continuing education for eligible team members." },
  { t: "Promote from within", d: "Clear pathways into supervisor and management roles." },
  { t: "Wellness resources", d: "Free access to mental health and wellness programs." },
];

function BenefitsPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tight">Benefits & perks</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        We invest in our team because great stores start with supported people.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((b) => (
          <div key={b.t} className="rounded-xl border bg-card p-6">
            <h3 className="font-semibold">{b.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
          </div>
        ))}
      </div>
      <p className="mt-8 text-xs text-muted-foreground">
        Benefit eligibility varies by role, location, and hours worked.
      </p>
    </section>
  );
}
