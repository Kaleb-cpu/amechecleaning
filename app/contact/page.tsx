import { ContactForm } from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact | Ameche Cleaning Service",
  description:
    "Contact Ameche Cleaning Service for commercial cleaning, janitorial, deep cleaning, and floor care services.",
};

export default function ContactPage() {
  return (
    <main className="page-shell">
      <header className="mb-8 space-y-4">
        <p className="section-heading">CONTACT</p>
        <h1 className="section-title text-4xl sm:text-5xl">
          Request a Commercial Cleaning Quote
        </h1>
        <p className="section-subtitle">
          We&apos;re here to help with all your commercial cleaning needs. Share
          a few details about your space and we&apos;ll be in touch.
        </p>
      </header>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <section className="rounded-3xl bg-white/80 p-6 text-sm text-slate-700 shadow-sm ring-1 ring-slate-200">
          <ContactForm />
        </section>

        <section className="space-y-6 text-sm text-slate-700">
          <div>
            <h2 className="text-base font-semibold text-slate-900">
              Contact Details
            </h2>
            <p className="mt-2 text-sm">
              We&apos;re here to assist you with all your cleaning needs.
            </p>
          </div>

          <div className="space-y-4 rounded-3xl bg-white/80 p-5 shadow-sm ring-1 ring-slate-200">
            <div>
              <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                Email
              </h3>
              <p className="mt-1 text-sm text-slate-800">
                amechecleaning@gmail.com
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Send us an email and we will get back to you as soon as
                possible.
              </p>
            </div>
            <div>
              <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                Phone
              </h3>
              <p className="mt-1 text-sm text-slate-800">672-227-1874</p>
              <p className="mt-1 text-xs text-slate-500">
                Call during business hours to speak with our team.
              </p>
            </div>
            <div>
              <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                Office
              </h3>
              <p className="mt-1 text-sm text-slate-800">
                250 Patterson Rd
                <br />
                Kelowna, BC V1X 2L2
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Contact us to arrange a consultation about your facility.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

