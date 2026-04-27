import { createFileRoute, Link } from "@tanstack/react-router";
import { jobs } from "@/lib/jobs";

export const Route = createFileRoute("/jobs")({
  head: () => ({
    meta: [
      { title: "Open Roles — QuickMart Careers" },
      { name: "description", content: "Browse current openings at QuickMart Kenya: cashiers, cleaners, drivers, store keepers, chefs, guards and more." },
      { property: "og:title", content: "Open Roles — QuickMart Careers" },
      { property: "og:description", content: "Apply for open positions at QuickMart Kenya." },
    ],
  }),
  component: JobsPage,
});

function JobsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <h1 className="text-4xl font-bold tracking-tight">Open roles</h1>
      <p className="mt-2 text-muted-foreground">
        Pick a role to learn more, see the salary and allowances, and start your application.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <article key={job.slug} className="flex flex-col overflow-hidden rounded-xl border bg-card">
            <img
              src={job.image}
              alt={`QuickMart ${job.title} in branded uniform`}
              loading="lazy"
              width={1280}
              height={960}
              className="aspect-[16/10] w-full object-cover"
            />
            <div className="flex flex-1 flex-col p-6">
              <div className="text-xs font-medium uppercase tracking-wide text-brand-red">
                {job.department}
              </div>
              <h2 className="mt-1 text-xl font-semibold">{job.title}</h2>

              <div className="mt-3 space-y-1 text-sm">
                <div><span className="font-semibold">{job.pay}</span></div>
                <div className="text-muted-foreground">
                  {job.allowanceLabel}: <span className="text-foreground">{job.allowanceValue}</span>
                </div>
              </div>

              <p className="mt-3 text-sm text-muted-foreground">{job.summary}</p>

              <div className="mt-auto flex gap-3 pt-5">
                <Link
                  to="/jobs/$slug"
                  params={{ slug: job.slug }}
                  className="rounded-md border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-accent"
                >
                  View details
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
