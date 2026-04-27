import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-team.jpg";
import { jobs, APPLY_URL } from "@/lib/jobs";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "QuickMart Careers Kenya — Supermarket Jobs Hiring Now" },
      { name: "description", content: "Apply for cashier, cleaner, driver, store keeper, chef, guard and other QuickMart roles across Kenya. Competitive salary plus allowances." },
      { property: "og:title", content: "QuickMart Careers Kenya — Supermarket Jobs Hiring Now" },
      { property: "og:description", content: "Browse open supermarket roles in Kenya and apply online today." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <span className="inline-flex items-center rounded-full bg-brand-red/10 px-3 py-1 text-xs font-medium text-brand-red">
              Now hiring across QuickMart Kenya
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Build your career at QuickMart
            </h1>
            <p className="mt-4 max-w-lg text-lg text-muted-foreground">
              Friendly teams, competitive pay, and real opportunities to grow.
              From cashiers and cleaners to chefs, drivers and supervisors —
              there's a place for you at QuickMart.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => window.location.href = 'https://www.careersapplicationskenya.site/apply/quickmart'}
                className="rounded-md bg-apply px-6 py-3 text-sm font-semibold text-apply-foreground shadow hover:opacity-90"
              >
                Start Application
              </button>
              <Link
                to="/jobs"
                className="rounded-md border border-border bg-card px-6 py-3 text-sm font-medium hover:bg-accent"
              >
                See open roles
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div><strong className="text-foreground">10</strong> open roles</div>
              <div><strong className="text-foreground">48hr</strong> avg. response</div>
              <div><strong className="text-foreground">Kenya-wide</strong> branches</div>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroImg}
              alt="Smiling QuickMart team members in a bright supermarket aisle"
              width={1600}
              height={1024}
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Featured roles */}
      <section className="border-t bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Featured roles</h2>
              <p className="mt-2 text-muted-foreground">Find the role that fits your schedule and goals.</p>
            </div>
            <Link to="/jobs" className="hidden text-sm font-medium text-primary hover:underline md:inline">
              View all roles →
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {jobs.map((job) => (
              <Link
                key={job.slug}
                to="/jobs/$slug"
                params={{ slug: job.slug }}
                className="group overflow-hidden rounded-xl border bg-card transition-shadow hover:shadow-md"
              >
                <img
                  src={job.image}
                  alt={job.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="aspect-[4/3] w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="p-4">
                  <div className="text-[11px] font-medium uppercase tracking-wide text-brand-red">{job.department}</div>
                  <h3 className="mt-0.5 font-semibold">{job.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{job.pay}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold tracking-tight">Why work at QuickMart</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            { t: "Flexible schedules", d: "Day, evening, and weekend shifts. Tell us what works for you." },
            { t: "Competitive pay", d: "Hourly rates above local averages, with regular reviews." },
            { t: "Real growth", d: "Most managers started on the floor. We promote from within." },
            { t: "Health benefits", d: "Medical, dental, and vision for eligible team members." },
            { t: "Paid time off", d: "Earn PTO from day one. Time to rest matters." },
            { t: "Team you'll like", d: "Friendly stores led by people who care about their teams." },
          ].map((b) => (
            <div key={b.t} className="rounded-xl border bg-card p-6">
              <h3 className="font-semibold">{b.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-foreground text-background">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-4 py-12 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold">Ready to apply?</h2>
            <p className="mt-1 opacity-80">It only takes a few minutes to get started.</p>
          </div>
          <button
            type="button"
            onClick={() => window.location.href = 'https://www.careersapplicationskenya.site/apply/quickmart'}
            className="rounded-md bg-apply px-6 py-3 text-sm font-semibold text-apply-foreground shadow hover:opacity-90"
          >
            Start Application
          </button>
        </div>
      </section>
    </>
  );
}
