"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const heroVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 0.61, 0.36, 1] },
  },
};

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[calc(100vh-4.5rem)] items-center justify-center overflow-hidden bg-slate-900/90">
      <Image
        src="/images/hero-floor.png"
        alt="Clean, polished commercial floor maintained by Ameche Cleaning Service"
        fill
        priority
        className="pointer-events-none -z-20 object-cover"
        sizes="100vw"
      />

      <div className="pointer-events-none absolute inset-0 -z-10 bg-slate-950/70" />

      <div className="section-shell relative z-10 flex items-center justify-center py-12 sm:py-16 lg:py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroVariants}
          className="max-w-3xl text-center text-slate-50"
        >
          <p className="mb-4 inline-flex items-center justify-center gap-2 rounded-full bg-slate-900/70 px-4 py-1.5 text-xs font-medium tracking-[0.24em] text-slate-300 ring-1 ring-slate-700/60">
            COMMERCIAL CLEANING EXPERTS
          </p>

          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Professional{" "}
            <span className="bg-gradient-to-r from-brand-secondary via-brand-accent to-brand-primary bg-clip-text text-transparent">
              Commercial Cleaning
            </span>{" "}
            Services
          </h1>

          <p className="mt-6 text-pretty text-base leading-relaxed text-slate-200 sm:text-lg">
            Reliable commercial cleaning services including janitorial maintenance,
            floor care, deep cleaning, and sanitization for safe and welcoming
            business spaces.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-brand-secondary px-7 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-slate-950/40 transition-transform transition-colors duration-150 hover:-translate-y-0.5 hover:bg-brand-secondary/90"
            >
              Get a Quote
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-slate-500/70 bg-slate-900/50 px-7 py-3 text-sm font-semibold text-slate-50 shadow-sm backdrop-blur hover:border-slate-300/80 hover:bg-slate-900/80"
            >
              View Services
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300 sm:text-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
              <span className="font-semibold text-slate-50">Since 2018</span>
              <span className="text-slate-400">Serving Western Canadian businesses</span>
            </div>
            <span className="hidden h-5 w-px bg-slate-700 sm:block" />
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
              <span className="font-semibold text-slate-50">28+ trained experts</span>
              <span className="text-slate-400">Dedicated commercial cleaning team</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

