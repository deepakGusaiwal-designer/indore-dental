"use client";

import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { CheckCircle2, Loader2, Send } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    window.setTimeout(() => setStatus("success"), 1200);
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex h-full flex-col items-center justify-center rounded-2xl bg-brand/5 p-10 text-center"
      >
        <CheckCircle2 className="h-14 w-14 text-brand" />
        <h3 className="mt-4 text-xl font-semibold text-foreground">
          Message sent!
        </h3>
        <p className="mt-2 max-w-sm text-sm text-foreground/65">
          Thank you for reaching out. Our team will contact you shortly to
          confirm your appointment.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-sm font-medium text-foreground/80"
          >
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/20"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="mb-1.5 block text-sm font-medium text-foreground/80"
          >
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+91 98765 43210"
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/20"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block text-sm font-medium text-foreground/80"
        >
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/20"
        />
      </div>

      <div>
        <label
          htmlFor="service"
          className="mb-1.5 block text-sm font-medium text-foreground/80"
        >
          Service Interested In
        </label>
        <select
          id="service"
          name="service"
          className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/20"
        >
          <option>General Checkup</option>
          <option>Teeth Whitening</option>
          <option>Orthodontics</option>
          <option>Dental Implants</option>
          <option>Pediatric Dentistry</option>
          <option>Emergency Care</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-foreground/80"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Tell us about your concern or preferred appointment time..."
          className="w-full resize-none rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/20"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand/30 transition-all hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
