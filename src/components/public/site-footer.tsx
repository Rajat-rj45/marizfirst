import Link from "next/link";
import { Container } from "@/components/ui/container";

const footerLinks = [
  {
    title: "Explore",
    links: [
      { label: "Doctors", href: "/doctors" },
      { label: "Hospitals", href: "/hospitals" },
      { label: "Clinics", href: "/clinics" },
      { label: "Specialities", href: "/specialities" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Partner With Us", href: "/partner-with-us" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms", href: "/terms" },
      { label: "Medical Disclaimer", href: "/medical-disclaimer" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_2fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-500 text-sm font-bold text-white">
                MF
              </span>
              <span className="text-lg font-bold">MarizFirst</span>
            </Link>

            <p className="mt-4 max-w-md text-sm leading-6 text-slate-300">
              MarizFirst helps patients discover verified doctors, hospitals,
              and clinics with priority appointment support.
            </p>

            <p className="mt-4 text-xs leading-5 text-slate-400">
              Medical disclaimer: MarizFirst is an appointment assistance
              platform. It does not provide emergency care, diagnosis, or
              treatment guarantees.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold text-white">{group.title}</h3>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-slate-300 transition hover:text-teal-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-xs text-slate-400">
          © {new Date().getFullYear()} MarizFirst. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}