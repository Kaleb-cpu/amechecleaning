"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type GoogleReview = {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description?: string;
};

const fallbackReviews: GoogleReview[] = [
  {
    author_name: "Lisa Johnson",
    rating: 5,
    text: "Ameche Cleaning Service transformed our workspace. Their team is reliable and meticulous.",
  },
  {
    author_name: "Mike Anderson",
    rating: 5,
    text: "We have never been happier with a cleaning service. Ameche exceeds expectations every time.",
  },
];

export function Reviews() {
  const [reviews, setReviews] = useState<GoogleReview[]>(fallbackReviews);

  useEffect(() => {
    async function loadReviews() {
      try {
        const res = await fetch("/api/google-reviews");
        if (!res.ok) return;
        const data = await res.json();
        if (Array.isArray(data.reviews) && data.reviews.length > 0) {
          setReviews(data.reviews);
        }
      } catch {
        // silently fall back to defaults
      }
    }

    loadReviews();
  }, []);

  return (
    <section className="section-shell">
      <div className="mb-8 text-center">
        <p className="section-heading">CLIENT REVIEWS</p>
        <h2 className="section-title">What Clients Say</h2>
        <p className="section-subtitle">
          Hear from businesses that trust Ameche Cleaning Service with their commercial
          spaces.
        </p>
      </div>

      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-slate-950/95 p-6 text-slate-50 shadow-2xl ring-1 ring-slate-800">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-secondary">
              Google Reviews
            </p>
            <p className="mt-1 text-sm text-slate-300">
              Real feedback from our commercial cleaning clients.
            </p>
          </div>
          <div className="hidden flex-col items-end text-right text-xs text-slate-300 sm:flex">
            <span className="font-semibold text-slate-50">
              5.0
            </span>
            <span className="text-yellow-300">★★★★★</span>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {reviews.map((review, index) => (
            <motion.figure
              key={`${review.author_name}-${index}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex flex-col justify-between rounded-2xl bg-slate-900/60 p-4 text-sm ring-1 ring-slate-800/70"
            >
              <div className="mb-2 text-yellow-300">
                {"★".repeat(Math.round(review.rating || 5)).padEnd(5, "☆")}
              </div>
              <blockquote className="text-xs leading-relaxed text-slate-200 sm:text-sm">
                “{review.text}”
              </blockquote>
              <figcaption className="mt-3 text-xs font-semibold text-slate-50">
                {review.author_name}
                {review.relative_time_description && (
                  <span className="ml-1 text-[11px] font-normal text-slate-400">
                    · {review.relative_time_description}
                  </span>
                )}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

