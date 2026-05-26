export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-teal-600">
          MarizFirst
        </p>

        <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Book Trusted Doctors With Consultation Savings
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
          Find verified doctors, hospitals, and clinics near you. Book through
          MarizFirst and get priority appointment support.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="/doctors"
            className="rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
          >
            Book Appointment
          </a>

          <a
            href="/contact"
            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-teal-600 hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
          >
            Talk on WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}