"use client";
import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormState>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError(null);

    const formData = new FormData(event.currentTarget);
    const body = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        throw new Error("Failed to send message. Please try again.");
      }

      setStatus("success");
      event.currentTarget.reset();
    } catch (err) {
      console.error(err);
      setError("Something went wrong while sending your message. Please try again.");
      setStatus("error");
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-500"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3 py-2 text-sm shadow-sm outline-none ring-0 placeholder:text-slate-400 focus:border-brand-primary/60 focus:bg-white focus:ring-2 focus:ring-brand-primary/30"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label
            htmlFor="company"
            className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-500"
          >
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3 py-2 text-sm shadow-sm outline-none ring-0 placeholder:text-slate-400 focus:border-brand-primary/60 focus:bg-white focus:ring-2 focus:ring-brand-primary/30"
            placeholder="Business or organization"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-500"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3 py-2 text-sm shadow-sm outline-none ring-0 placeholder:text-slate-400 focus:border-brand-primary/60 focus:bg-white focus:ring-2 focus:ring-brand-primary/30"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-500"
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3 py-2 text-sm shadow-sm outline-none ring-0 placeholder:text-slate-400 focus:border-brand-primary/60 focus:bg-white focus:ring-2 focus:ring-brand-primary/30"
            placeholder="Best contact number"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-500"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3 py-2 text-sm shadow-sm outline-none ring-0 placeholder:text-slate-400 focus:border-brand-primary/60 focus:bg-white focus:ring-2 focus:ring-brand-primary/30"
          placeholder="Tell us about your space, cleaning needs, and preferred schedule."
        />
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}
      {status === "success" && (
        <p className="text-sm text-emerald-600">
          Thank you. Your message has been sent and we will be in touch shortly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-slate-50 shadow-md shadow-slate-900/20 transition-transform duration-150 hover:-translate-y-0.5 hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" ? "Sending..." : "Request a Quote"}
      </button>
    </form>
  );
}

