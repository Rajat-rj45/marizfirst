import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const navItems = [
  { label: "Doctors", href: "/doctors" },
  { label: "Hospitals", href: "/hospitals" },
  { label: "Clinics", href: "/clinics" },
  { label: "Specialities", href: "/specialities" },
  { label: "Blog", href: "/blog" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2" aria-label="MarizFirst Home">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-600 text-sm font-bold text-white">
              MF
            </span>
            <span className="text-lg font-bold tracking-tight text-slate-950">
              MarizFirst
            </span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-600 transition hover:text-teal-700"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 sm:flex">
            <Button href="/contact" variant="outline" size="sm">
              WhatsApp
            </Button>
            <Button href="/doctors" size="sm">
              Book Appointment
            </Button>
          </div>

          <Button href="/doctors" size="sm" className="sm:hidden">
            Book
          </Button>
        </div>
      </Container>
    </header>
  );
}