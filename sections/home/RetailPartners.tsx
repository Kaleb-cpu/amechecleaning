"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const partnerImages = [
  {
    src: "/images/partner-saveon-aisle.jpg",
    alt: "Polished supermarket aisle maintained by Ameche Cleaning Service",
  },
  {
    src: "/images/partner-saveon-entrance.jpg",
    alt: "Save-On-Foods entrance with freshly finished floors",
  },
  {
    src: "/images/partner-team-1.jpg",
    alt: "Ameche Cleaning Service team member with store representative",
  },
  {
    src: "/images/partner-team-2.jpg",
    alt: "Ameche Cleaning Service representative with retail partner",
  },
];

export function RetailPartners() {
  return (
    <section className="section-shell">
      <div className="mb-8 text-center">
        <p className="section-heading">RETAIL PARTNERS</p>
        <h2 className="section-title">Working with Loblaws &amp; Save-On-Foods</h2>
        <p className="section-subtitle">
          Ameche Cleaning Service supports leading retailers, including Loblaws and
          Save-On-Foods, with ongoing floor care, janitorial maintenance, and
          project-based deep cleaning.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:items-center">
        <div className="grid gap-4 sm:grid-cols-2">
          {partnerImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-900/5 ring-1 ring-slate-200/70"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 35vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-slate-950/0 transition-colors duration-300 group-hover:bg-slate-950/10" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mt-4 space-y-4 rounded-3xl bg-white/90 p-6 text-sm text-slate-700 shadow-sm ring-1 ring-slate-200 lg:mt-0"
        >
          <h3 className="text-base font-semibold text-slate-900">
            Trusted Retail Cleaning Partner
          </h3>
          <p>
            Our team has extensive experience working inside busy supermarkets and
            large-format retail stores. From daily presentation to overnight
            projects, we help keep floors safe, clean, and ready for customers.
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-primary" />
              <span>Floor stripping, waxing, and burnishing for high-traffic aisles.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-primary" />
              <span>Flexible scheduling around store hours and promotional events.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-primary" />
              <span>Coordinated work with store management and operations teams.</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

