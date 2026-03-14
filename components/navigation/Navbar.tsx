"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MotionConfig, motion } from "framer-motion";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <MotionConfig reducedMotion="user">
      <header
        className="sticky top-0 z-40 border-b border-slate-800/60 bg-slate-950/85 text-slate-50 backdrop-blur-md transition-colors"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-10 lg:py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-10 w-40">
              <Image
                src="/images/logo.png"
                alt="Ameche Cleaning Service logo"
                fill
                className="object-contain"
                sizes="160px"
                priority
                unoptimized
              />
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-sm font-medium transition-colors ${
                    active
                      ? "text-slate-50"
                      : "text-slate-300 hover:text-slate-50"
                  }`}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-0 -bottom-1 h-[2px] rounded-full bg-brand-secondary"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-brand-secondary px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-md shadow-slate-950/40 transition-transform duration-150 hover:-translate-y-0.5 hover:bg-brand-secondary/90"
            >
              Get a Quote
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-sm text-slate-50 shadow-sm md:hidden"
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle navigation</span>
            <motion.span
              animate={open ? { rotate: 45, y: 2 } : { rotate: 0, y: 0 }}
              className="absolute h-[2px] w-4 bg-current"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="absolute h-[2px] w-4 bg-current"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -2 } : { rotate: 0, y: 0 }}
              className="absolute h-[2px] w-4 bg-current"
            />
          </button>
        </div>

        <motion.div
          initial={false}
          animate={open ? "open" : "closed"}
          variants={{
            open: { height: "auto", opacity: 1 },
            closed: { height: 0, opacity: 0 },
          }}
          className="md:hidden"
        >
          <div
            className={`space-y-1 border-t px-4 pb-4 pt-2 ${
              "border-slate-800 bg-slate-950 text-slate-50"
            }`}
          >
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-2 text-sm font-medium ${
                    active
                      ? "bg-slate-50/10 text-slate-50"
                      : "text-slate-200 hover:bg-slate-50/5"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className={`mt-2 inline-flex w-full items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold shadow-md ${
                "bg-brand-secondary text-slate-950 hover:bg-brand-secondary/90"
              }`}
            >
              Get a Quote
            </Link>
          </div>
        </motion.div>
      </header>
    </MotionConfig>
  );
}

