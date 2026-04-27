import { Link, Outlet } from "@tanstack/react-router";

export function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-red text-white font-bold">
              Q
            </span>
            <span className="font-semibold tracking-tight">QuickMart Careers</span>
          </Link>
          <nav className="hidden gap-6 text-sm md:flex">
            <Link to="/" activeOptions={{ exact: true }} className="text-muted-foreground hover:text-foreground">Home</Link>
            <Link to="/jobs" className="text-muted-foreground hover:text-foreground">Open Roles</Link>
            <Link to="/about" className="text-muted-foreground hover:text-foreground">About</Link>
            <Link to="/benefits" className="text-muted-foreground hover:text-foreground">Benefits</Link>
            <Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link>
          </nav>
          <Link
            to="/jobs"
            className="rounded-md bg-apply px-4 py-2 text-sm font-semibold text-apply-foreground shadow hover:opacity-90"
          >
            Apply Now
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t bg-muted/40">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-muted-foreground">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="mb-2 font-semibold text-foreground">QuickMart</div>
              <p>Helping local supermarkets staff up with great people.</p>
            </div>
            <div>
              <div className="mb-2 font-semibold text-foreground">Company</div>
              <ul className="space-y-1">
                <li><Link to="/about" className="hover:text-foreground">About us</Link></li>
                <li><Link to="/benefits" className="hover:text-foreground">Benefits</Link></li>
                <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
              </ul>
            </div>
            <div>
              <div className="mb-2 font-semibold text-foreground">Legal</div>
              <ul className="space-y-1">
                <li><Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-foreground">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <div className="mb-2 font-semibold text-foreground">Contact</div>
              <p>0734654273<br />Mon–Fri, 9am–5pm</p>
            </div>
          </div>
          <div className="mt-8 border-t pt-6 text-xs">
            © {new Date().getFullYear()} QuickMart Careers. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
