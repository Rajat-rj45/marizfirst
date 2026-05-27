import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const trustItems = [
  "Verified profiles",
  "Priority support",
  "No booking fee",
  "Secure patient information",
];

const popularSpecialities = [
  "Cardiology",
  "Dermatology",
  "Orthopedics",
  "Gynecology",
  "Pediatrics",
  "Dentistry",
];

export default function HomePage() {
  return (
    <main className="bg-white text-slate-950">
      <section className="border-b border-slate-200 bg-gradient-to-b from-teal-50 via-white to-white">
        <Container className="grid min-h-[calc(100vh-4rem)] items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-teal-700">
              MarizFirst
            </p>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Book Trusted Doctors With Consultation Savings
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Find verified doctors, hospitals, and clinics near you. Book
              through MarizFirst and get priority appointment support.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/doctors" size="lg">
                Book Appointment
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Talk on WhatsApp
              </Button>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {trustItems.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-teal-100 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-xl">
            <div className="rounded-[1.5rem] bg-slate-950 p-6 text-white">
              <p className="text-sm font-medium text-teal-300">
                Appointment Support
              </p>
              <h2 className="mt-3 text-2xl font-bold">
                Search by doctor, speciality, hospital, or clinic.
              </h2>

              <div className="mt-6 space-y-3">
                <input
                  type="text"
                  placeholder="Search doctors or specialities"
                  className="h-12 w-full rounded-full border border-white/10 bg-white px-5 text-sm text-slate-950 outline-none"
                />
                <input
                  type="text"
                  placeholder="Select city"
                  defaultValue="Gurgaon"
                  className="h-12 w-full rounded-full border border-white/10 bg-white px-5 text-sm text-slate-950 outline-none"
                />
                <Button href="/doctors" className="w-full" size="lg">
                  Search Doctors
                </Button>
              </div>

              <p className="mt-5 text-xs leading-5 text-slate-300">
                Appointment requests remain pending until MarizFirst or the
                partner confirms the slot.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
                Popular Care
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                Popular Specialities
              </h2>
            </div>

            <Button href="/specialities" variant="outline">
              View All
            </Button>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {popularSpecialities.map((speciality) => (
              <a
                key={speciality}
                href={`/specialities/${speciality.toLowerCase()}`}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-teal-200 hover:shadow-md"
              >
                <h3 className="text-lg font-bold text-slate-950">
                  {speciality}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Find verified {speciality.toLowerCase()} doctors with
                  appointment support.
                </p>
              </a>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}