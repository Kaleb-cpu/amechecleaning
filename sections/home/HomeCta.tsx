"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export function HomeCta() {
  return (
    <section className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl bg-slate-950 text-slate-50 shadow-2xl ring-1 ring-slate-800"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(125,211,252,0.28),transparent_55%)]" />
        <div className="relative z-10 flex flex-col items-center justify-between gap-6 px-6 py-10 text-center sm:px-10 sm:py-12 lg:flex-row lg:text-left">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-secondary">
              READY TO GET STARTED?
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold leading-tight sm:text-4xl">
              Ready for a Cleaner Workplace?
            </h2>
            <p className="mt-4 text-sm text-slate-200 sm:text-base">
              Partner with Ameche Cleaning Service for professional, reliable
              commercial cleaning tailored to your facility.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 lg:items-end">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-brand-secondary px-7 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-slate-900/40 transition-transform duration-150 hover:-translate-y-0.5 hover:bg-brand-secondary/90"
            >
              Request a Quote
            </Link>
            <p className="text-xs text-slate-300">
              We will follow up to learn about your space and cleaning needs.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

