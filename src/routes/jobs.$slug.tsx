import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { getJob, jobs, APPLY_URL } from "@/lib/jobs";

export const Route = createFileRoute("/jobs/$slug")({
  loader: ({ params }) => {
    const job = getJob(params.slug);
    if (!job) throw notFound();
    return { job };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.job.title} — QuickMart Careers` },
          { name: "description", content: loaderData.job.summary },
          { property: "og:title", content: `${loaderData.job.title} — QuickMart Careers` },
          { property: "og:description", content: loaderData.job.summary },
          { property: "og:image", content: loaderData.job.image },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-4 py-20 text-center">
      <h1 className="text-3xl font-bold">Role not found</h1>
      <p className="mt-2 text-muted-foreground">That listing may have been filled.</p>
      <Link to="/jobs" className="mt-6 inline-block text-primary hover:underline">View open roles</Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-2xl px-4 py-20 text-center">
      <h1 className="text-2xl font-bold">Something went wrong</h1>
      <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: JobDetail,
});

function JobDetail() {
  const { job } = Route.useLoaderData();
  const [showModal, setShowModal] = useState(false);

  return (
    <article className="mx-auto max-w-4xl px-4 py-12 md:py-16">
      <Link to="/jobs" className="text-sm text-primary hover:underline">← Back to all roles</Link>

      <img
        src={job.image}
        alt={job.title}
        loading="lazy"
        width={1024}
        height={768}
        className="mt-6 aspect-[16/9] w-full rounded-xl object-cover"
      />

      <div className="mt-3 text-xs font-medium uppercase tracking-wide text-brand-red">
        {job.department}
      </div>
      <h1 className="mt-1 text-3xl font-bold tracking-tight md:text-4xl">{job.title}</h1>
      <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground">
        <span className="rounded-full bg-muted px-2 py-1">{job.type}</span>
        <span className="rounded-full bg-muted px-2 py-1">{job.location}</span>
      </div>

      <div className="mt-6 grid gap-3 rounded-xl border bg-card p-5 sm:grid-cols-2">
        <div>
          <div className="text-xs uppercase text-muted-foreground">Salary</div>
          <div className="text-lg font-semibold">{job.pay}</div>
        </div>
        <div>
          <div className="text-xs uppercase text-muted-foreground">{job.allowanceLabel}</div>
          <div className="text-lg font-semibold">{job.allowanceValue}</div>
        </div>
      </div>

      <p className="mt-6 text-lg text-muted-foreground">{job.summary}</p>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">What you'll do</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
          {job.responsibilities.map((r) => <li key={r}>{r}</li>)}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">What we're looking for</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
          {job.requirements.map((r) => <li key={r}>{r}</li>)}
        </ul>
      </section>

      <div className="mt-10 rounded-xl border bg-card p-6">
        <h2 className="text-xl font-semibold">Ready to apply?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Click below to start your QuickMart application. You'll be taken to our secure
          hiring portal to complete your details.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="rounded-md bg-apply px-6 py-3 text-sm font-semibold text-apply-foreground shadow hover:opacity-90"
          >
            Start Application
          </button>
          <Link
            to="/jobs"
            className="rounded-md border border-border bg-background px-6 py-3 text-sm font-medium hover:bg-accent"
          >
            See other roles
          </Link>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-xl font-semibold">Other roles you might like</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {jobs.filter((j) => j.slug !== job.slug).slice(0, 3).map((j) => (
            <Link
              key={j.slug}
              to="/jobs/$slug"
              params={{ slug: j.slug }}
              className="rounded-lg border bg-card p-4 hover:bg-accent"
            >
              <div className="text-sm font-medium">{j.title}</div>
              <div className="mt-1 text-xs text-muted-foreground">{j.pay}</div>
            </Link>
          ))}
        </div>
      </section>

      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setShowModal(false)}
        >
          <div
            className="w-full max-w-md rounded-xl bg-card p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-semibold">Continue to application</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              You're applying for <strong className="text-foreground">{job.title}</strong>.
              The application opens on our secure hiring partner site.
            </p>
            <div className="mt-5 flex gap-3">
              <button
                type="button"
                onClick={() => {
                  setShowModal(false);
                  window.open(APPLY_URL, '_blank');
                }}
                className="flex-1 rounded-md bg-apply px-4 py-2 text-center text-sm font-semibold text-apply-foreground hover:opacity-90"
              >
                Continue
              </button>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="rounded-md border border-border px-4 py-2 text-sm hover:bg-accent"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
