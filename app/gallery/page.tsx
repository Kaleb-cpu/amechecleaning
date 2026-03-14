import Image from "next/image";
import { motion } from "framer-motion";

export const metadata = {
  title: "Gallery | Ameche Cleaning Service",
  description:
    "Explore a selection of commercial spaces cared for by Ameche Cleaning Service.",
};

const images = [
  { src: "/images/gallery-floor-1.jpg", alt: "Polished supermarket floor in a retail store" },
  { src: "/images/gallery-floor-2.jpg", alt: "Clean supermarket entrance maintained by Ameche" },
  { src: "/images/gallery-floor-3.jpg", alt: "Supermarket aisle after floor care and finishing" },
  { src: "/images/gallery-floor-4.jpg", alt: "Wide commercial space with finished floor" },
  { src: "/images/gallery-floor-5.jpg", alt: "Retail aisle with reflective finished flooring" },
  { src: "/images/gallery-floor-6.jpg", alt: "Additional polished floors in a commercial space" },
  { src: "/images/partner-saveon-aisle.jpg", alt: "Save-On-Foods aisle maintained by Ameche Cleaning Service" },
  { src: "/images/partner-saveon-entrance.jpg", alt: "Retail entrance with polished floors" },
  { src: "/images/partner-team-1.jpg", alt: "Ameche Cleaning representative with retail partner" },
  { src: "/images/partner-team-2.jpg", alt: "Ameche Cleaning Service team member with partner" },
];

export default function GalleryPage() {
  return (
    <main className="page-shell">
      <header className="mb-8 space-y-4">
        <p className="section-heading">GALLERY</p>
        <h1 className="section-title text-4xl sm:text-5xl">
          Our Work in Commercial Spaces
        </h1>
        <p className="section-subtitle">
          A visual look at the clean, polished environments maintained by
          Ameche Cleaning Service.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <motion.div
            key={image.src}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.04 }}
            className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl bg-slate-900/5 ring-1 ring-slate-200/70"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(min-width: 1024px) 30vw, 50vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-slate-950/0 transition-colors duration-300 group-hover:bg-slate-950/20" />
          </motion.div>
        ))}
      </section>
    </main>
  );
}

