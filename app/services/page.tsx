import Image from "next/image";

export const metadata = {
  title: "Services | Ameche Cleaning Service",
  description:
    "Commercial floor care, janitorial maintenance, deep cleaning, and sanitization services tailored for your business.",
};

const services = [
  {
    id: "floor-care",
    title: "Floor Care Services",
    description:
      "Our dedicated team provides expert floor care, including stripping, waxing, buffing, and ongoing maintenance to maintain a pristine appearance in your commercial space.",
    benefits: [
      "Professional stripping and waxing programs",
      "Buffing and burnishing to restore shine",
      "Scheduled maintenance for long-lasting results",
      "Safe, slip-conscious products suitable for high-traffic areas",
    ],
    imageSrc: "/images/hero-floor.png",
    imageAlt: "Clean, polished commercial floor maintained by Ameche Cleaning Service",
  },
  {
    id: "janitorial-maintenance",
    title: "Janitorial Maintenance Services",
    description:
      "We offer tailored janitorial maintenance programs to keep your commercial space consistently clean and inviting for employees and visitors.",
    benefits: [
      "Daily and periodic cleaning routines",
      "Restroom and common-area care",
      "Waste removal and recycling support",
      "Custom schedules aligned with your operating hours",
    ],
    imageSrc: "/images/gallery-floor-2.jpg",
    imageAlt: "Janitorial maintenance in a commercial building",
  },
  {
    id: "deep-cleaning",
    title: "Deep Cleaning Services",
    description:
      "Our deep cleaning services ensure that every corner is spotless, supporting a healthy environment by reducing dust, dirt, and allergens.",
    benefits: [
      "Detail-focused cleaning of high-touch areas",
      "Thorough cleaning of hard-to-reach spaces",
      "Support for seasonal or one-time deep cleans",
      "Ideal for renovations, resets, or special projects",
    ],
    imageSrc: "/images/gallery-floor-3.jpg",
    imageAlt: "Facility after a deep cleaning service",
  },
  {
    id: "sanitization",
    title: "Sanitization Services",
    description:
      "Targeted sanitization services to help support safer spaces for staff and customers in your commercial facility.",
    benefits: [
      "Focus on high-contact surfaces and touchpoints",
      "Flexible frequency to match your risk profile",
      "Ideal for retail, offices, and public environments",
      "Helps support a healthier workplace for your team",
    ],
    imageSrc: "/images/gallery-floor-4.jpg",
    imageAlt: "Sanitization of high-touch surfaces in a commercial space",
  },
];

export default function ServicesPage() {
  return (
    <main className="page-shell">
      <header className="mb-10 space-y-4">
        <p className="section-heading">SERVICES</p>
        <h1 className="section-title text-4xl sm:text-5xl">
          Commercial Cleaning Services Tailored to Your Facility
        </h1>
        <p className="section-subtitle">
          Ameche Cleaning Service specializes in floor care, janitorial
          maintenance, deep cleaning, and sanitization for commercial spaces.
        </p>
      </header>

      <div className="space-y-12">
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className="grid gap-8 border border-slate-200/70 bg-white/80 p-6 shadow-sm ring-1 ring-transparent md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-center"
          >
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-slate-900">
                {service.title}
              </h2>
              <p className="text-sm leading-relaxed text-slate-600">
                {service.description}
              </p>
              <ul className="mt-2 grid gap-1 text-sm text-slate-700">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-primary" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-900/5">
              <Image
                src={service.imageSrc}
                alt={service.imageAlt}
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}

