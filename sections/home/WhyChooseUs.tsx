"use client";
import { motion } from "framer-motion";

const features = [
  {
    title: "Consistent Quality",
    description:
      "We deliver exceptional, reliable cleaning backed by trained professionals and detailed processes.",
  },
  {
    title: "Flexible Scheduling",
    description:
      "Cleaning programs tailored around your trading hours so your business can keep running smoothly.",
  },
  {
    title: "Trained Professionals",
    description:
      "A dedicated team of 28 cleaning specialists focused on commercial environments.",
  },
  {
    title: "Commercial Expertise",
    description:
      "Experience working with leading retailers and commercial properties across Western Canada.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-shell">
      <div className="mb-8 text-center">
        <p className="section-heading">WHY CHOOSE AMECHE</p>
        <h2 className="section-title">Experience the Ameche Advantage</h2>
        <p className="section-subtitle">
          Reliable, high-quality commercial cleaning services that help your
          business look its best every day.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {features.map((feature, index) => (
          <motion.article
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="rounded-2xl bg-white/80 p-6 text-sm text-slate-600 shadow-sm ring-1 ring-slate-200/70 backdrop-blur-sm hover:-translate-y-1 hover:bg-white hover:shadow-lg hover:ring-brand-primary/30 transition-all duration-200"
          >
            <h3 className="text-base font-semibold text-slate-900">
              {feature.title}
            </h3>
            <p className="mt-2 text-xs sm:text-sm">{feature.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

