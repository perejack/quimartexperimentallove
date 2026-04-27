import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — QuickMart Careers" },
      { name: "description", content: "Get in touch with the QuickMart hiring team." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tight">Contact us</h1>
      <p className="mt-3 text-muted-foreground">
        Questions about a role or your application? Send us a note.
      </p>

      {submitted ? (
        <div className="mt-8 rounded-xl border bg-card p-6">
          <h2 className="font-semibold">Thanks — we got your message.</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Our hiring team typically responds within 1–2 business days.
          </p>
        </div>
      ) : (
        <form
          className="mt-8 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <div>
            <label className="text-sm font-medium" htmlFor="name">Name</label>
            <input id="name" required className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm" />
          </div>
          <div>
            <label className="text-sm font-medium" htmlFor="phone">Phone</label>
            <input id="phone" type="tel" required className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm" />
          </div>
          <div>
            <label className="text-sm font-medium" htmlFor="msg">Message</label>
            <textarea id="msg" required rows={5} className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm" />
          </div>
          <button
            type="submit"
            className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Send message
          </button>
        </form>
      )}

      <div className="mt-10 text-sm text-muted-foreground">
        <div><strong className="text-foreground">Phone:</strong> 0734654273</div>
        <div className="mt-1"><strong className="text-foreground">Hours:</strong> Mon–Fri, 9am–5pm</div>
      </div>
    </section>
  );
}
