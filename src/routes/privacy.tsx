import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — QuickMart Careers" },
      { name: "description", content: "How QuickMart Careers handles applicant information." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 prose prose-sm">
      <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
        <p>
          QuickMart Careers ("we", "us") respects your privacy. This policy explains
          what information we collect when you visit this site and apply for a role.
        </p>
        <h2 className="text-lg font-semibold text-foreground">Information we collect</h2>
        <p>
          We collect the information you provide voluntarily through our contact form
          (name, email, message). When you click "Apply", you are taken to our hiring
          partner's secure portal where you will be asked for additional details
          required to process your application.
        </p>
        <h2 className="text-lg font-semibold text-foreground">How we use it</h2>
        <p>
          We use your information solely to respond to your inquiries and evaluate
          your application. We do not sell personal information.
        </p>
        <h2 className="text-lg font-semibold text-foreground">Cookies</h2>
        <p>
          This site uses minimal cookies needed for the site to function. We do not
          use third-party advertising trackers on this site.
        </p>
        <h2 className="text-lg font-semibold text-foreground">Contact</h2>
        <p>For privacy questions, call 0734654273.</p>
      </div>
    </section>
  );
}
