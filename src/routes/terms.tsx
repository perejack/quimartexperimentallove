import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — QuickMart Careers" },
      { name: "description", content: "Terms governing use of the QuickMart Careers website." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tight">Terms of Service</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
        <p>
          By using this website you agree to these terms. The QuickMart Careers site
          is provided for the purpose of sharing information about open roles and
          allowing visitors to begin a job application.
        </p>
        <h2 className="text-lg font-semibold text-foreground">Use of the site</h2>
        <p>
          You agree to use the site lawfully and not to interfere with its operation.
          Job descriptions, pay ranges, and benefits are illustrative and may vary
          by location and individual offer.
        </p>
        <h2 className="text-lg font-semibold text-foreground">External links</h2>
        <p>
          The "Apply" buttons on this site link to a secure third-party hiring portal.
          That portal is governed by its own terms and privacy policy.
        </p>
        <h2 className="text-lg font-semibold text-foreground">No employment offer</h2>
        <p>
          Visiting this site or submitting an application does not create an offer of
          employment. All hiring decisions are at the company's discretion.
        </p>
      </div>
    </section>
  );
}
