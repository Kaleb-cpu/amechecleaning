import Image from "next/image";

export const metadata = {
  title: "About | Ameche Cleaning Service",
  description:
    "Learn about Ameche Cleaning Service, founded in 2018 and built on quality, reliability, and commercial cleaning expertise.",
};

const aboutImages = [
  { src: "/images/partner-team-1.jpg", alt: "Warehouse Manager"},
  { src: "/images/partner-team-2.jpg", alt: "Photo with warehouse manager" },
  { src: "/images/gallery-floor-1.jpg", alt: "Polished retail floor maintained by our team" },
  { src: "/images/hero-floor.png", alt: "Commercial floor care by Ameche Cleaning Service" }
];

export default function AboutPage() {
  return (
    <main className="page-shell">
      <header className="mb-8 space-y-4">
        <p className="section-heading">ABOUT AMECHE</p>
        <h1 className="section-title text-4xl sm:text-5xl">
          Our Journey in Commercial Cleaning
        </h1>
        <p className="section-subtitle">
          Founded in 2018 by Binyam Yaman Abraham, Ameche Cleaning Service is
          built on a commitment to quality, reliability, and professional
          commercial cleaning.
        </p>
      </header>

      <div className="mb-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {aboutImages.map((image) => (
          <div
            key={image.src}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200/70"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 25vw, 50vw"
            />
          </div>
        ))}
      </div>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <section className="space-y-4 text-sm leading-relaxed text-slate-700">
          <p>
            Based in Kelowna, BC, Ameche Cleaning Service provides
            exceptional cleaning solutions for commercial spaces, helping create
            safe and welcoming environments for employees and customers every
            day.
          </p>
          <p>
            From the beginning, our focus has been on delivering consistent,
            high-quality cleaning supported by clear communication and
            dependable service. Our team of 28 trained professionals
            understands the unique needs of retail stores, supermarkets,
            offices, and other commercial environments.
          </p>
          <p>
            We specialize in floor care, janitorial maintenance, deep cleaning,
            and sanitization, working with respected clients such as Loblaws
            and Save-On-Foods. Every service program is tailored to the
            facility, schedule, and standards of the businesses we serve.
          </p>
          <p>
            As we continue to grow, our mission remains the same: to provide
            reliable, detail-focused cleaning that keeps your commercial space
            looking its best while supporting a healthy workplace for your
            team and customers.
          </p>
        </section>

        <section className="space-y-4 rounded-3xl bg-white/80 p-6 text-sm text-slate-700 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-base font-semibold text-slate-900">
            At a Glance
          </h2>
          <dl className="grid gap-4 text-sm">
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                Founded
              </dt>
              <dd className="mt-1 text-base font-semibold text-slate-900">
                2018
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                Team
              </dt>
              <dd className="mt-1 text-base font-semibold text-slate-900">
                28 trained professionals
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                Focus
              </dt>
              <dd className="mt-1 text-sm">
                Commercial floor care, janitorial maintenance, deep cleaning,
                and sanitization.
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                Clients
              </dt>
              <dd className="mt-1 text-sm">
                Serving retailers and commercial properties across Western
                Canada, including brands like Loblaws and Save-On-Foods.
              </dd>
            </div>
          </dl>
        </section>
      </div>
    </main>
  );
}

