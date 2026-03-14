"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const previewImages = [
  { src: "/images/gallery-floor-1.jpg", alt: "Clean and polished commercial floor" },
  { src: "/images/gallery-floor-2.jpg", alt: "Retail store cleaned by Ameche Cleaning" },
  { src: "/images/gallery-floor-3.jpg", alt: "Supermarket aisle after floor care service" },
  { src: "/images/gallery-floor-4.jpg", alt: "Wide commercial space with finished flooring" },
];

export function GalleryPreview() {
  return (
    <section className="section-shell">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="section-heading">OUR WORK</p>
          <h2 className="section-title">Showcasing Our Cleaning Excellence</h2>
          <p className="section-subtitle">
            A look at some of the commercial environments we help keep clean and
            welcoming.
          </p>
        </div>
        <Link
          href="/gallery"
          className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/80 px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm backdrop-blur hover:border-slate-400"
        >
          View Full Gallery
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        {previewImages.map((image, index) => (
          <motion.div
            key={image.src}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-900/10 ring-1 ring-slate-200/70"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 20vw, 50vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-slate-950/0 transition-colors duration-300 group-hover:bg-slate-950/10" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

