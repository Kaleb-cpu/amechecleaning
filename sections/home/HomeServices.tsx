"use client";
import { motion } from "framer-motion";

type ServiceCard = {
  label: string;
  title: string;
  description: string;
};

const services: ServiceCard[] = [
  {
    label: "FC",
    title: "Floor Care Services",
    description:
      "Expert stripping, waxing, buffing, and ongoing maintenance to keep your floors looking pristine.",
  },
  {
    label: "JM",
    title: "Janitorial Maintenance Services",
    description:
      "Reliable day-to-day janitorial programs tailored to your commercial space and schedule.",
  },
  {
    label: "DC",
    title: "Deep Cleaning Services",
    description:
      "Thorough deep cleaning for every corner of your facility, helping create a healthier environment.",
  },
  {
    label: "SZ",
    title: "Sanitization Services",
    description:
      "Targeted sanitization to help reduce germs and support a safer space for staff and customers.",
  },
];

export function HomeServices() {
  return (
    <section className="section-shell">
      <div className="mb-8 text-center">
        <p className="section-heading">OUR SERVICES</p>
        <h2 className="section-title">
          Comprehensive Cleaning Solutions Tailored for You
        </h2>
        <p className="section-subtitle">
          We provide commercial floor care, janitorial maintenance, deep cleaning, and
          sanitization for retailers, offices, and other commercial spaces.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <motion.article
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="group flex flex-col rounded-2xl bg-white/80 p-5 text-sm text-slate-600 shadow-sm ring-1 ring-slate-200/70 backdrop-blur-sm hover:-translate-y-1 hover:bg-white hover:shadow-lg hover:ring-brand-primary/30 transition-all duration-200"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary/10 text-xs font-semibold tracking-wide text-brand-primary">
              {service.label}
            </div>
            <h3 className="text-base font-semibold text-slate-900">
              {service.title}
            </h3>
            <p className="mt-2 text-xs sm:text-sm">{service.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

