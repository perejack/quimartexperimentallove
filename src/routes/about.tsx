import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About QuickMart — Our Story" },
      { name: "description", content: "QuickMart is a community-focused supermarket group hiring friendly people across all locations." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tight">About QuickMart</h1>
      <p className="mt-6 text-lg text-muted-foreground">
        QuickMart is a neighborhood-focused supermarket group that believes great
        stores are built by great people. We serve thousands of families every day
        with fresh groceries, friendly service, and a welcoming environment.
      </p>
      <p className="mt-4 text-muted-foreground">
        Our hiring philosophy is simple: we look for kind, dependable people who
        want a real career — not just a job. We train you, support you, and give
        you the tools to grow with us. Most of our store managers started on the
        sales floor.
      </p>
      <h2 className="mt-10 text-2xl font-bold">Our values</h2>
      <ul className="mt-4 space-y-3 text-muted-foreground">
        <li><strong className="text-foreground">People first.</strong> Customers and team members both deserve respect and care.</li>
        <li><strong className="text-foreground">Honest work.</strong> We do things right, even when nobody's watching.</li>
        <li><strong className="text-foreground">Always learning.</strong> Every shift is a chance to get better.</li>
        <li><strong className="text-foreground">Community.</strong> We support the neighborhoods that support us.</li>
      </ul>
    </section>
  );
}
