"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { CalendarCheck, PhoneCall, ShieldCheck, Star } from "lucide-react";
import { clinic } from "./site-data";
import ToothLogo from "./ToothLogo";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-brand-light/20 via-white to-white">
      <div
        aria-hidden="true"
        className="animate-blob absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="animate-blob absolute top-40 -right-20 h-80 w-80 rounded-full bg-accent/20 blur-3xl [animation-delay:3s]"
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-1.5 text-sm font-medium text-brand-dark">
            <ShieldCheck className="h-4 w-4" />
            Indore&apos;s trusted dental care since 2010
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Gentle care for a lifetime of{" "}
            <span className="text-brand">healthy smiles</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/70">
            From routine checkups to complete smile makeovers, {clinic.name}{" "}
            combines advanced technology with a gentle touch — for patients
            of every age.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand/30 transition-all hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-xl"
            >
              <CalendarCheck className="h-5 w-5" />
              Book an Appointment
            </Link>
            <a
              href={clinic.phoneHref}
              className="flex items-center justify-center gap-2 rounded-full border border-brand/30 bg-white px-7 py-3.5 text-base font-semibold text-brand-dark transition-all hover:-translate-y-0.5 hover:border-brand hover:bg-brand/5"
            >
              <PhoneCall className="h-5 w-5" />
              {clinic.phone}
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-3">
              {["AS", "RV", "PN", "KM"].map((initials) => (
                <div
                  key={initials}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-brand/15 text-xs font-semibold text-brand-dark"
                >
                  {initials}
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-foreground/60">
                Rated 4.9/5 by 2,000+ patients
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative mx-auto flex h-72 w-72 items-center justify-center sm:h-96 sm:w-96"
        >
          <div className="absolute inset-0 rounded-full bg-linear-to-br from-brand/25 to-accent/20" />
          <div className="animate-float absolute inset-6 rounded-full bg-white shadow-2xl shadow-brand/20 ring-1 ring-black/5" />
          <ToothLogo className="animate-float relative h-40 w-40 sm:h-52 sm:w-52" />

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="animate-float-slow absolute -left-4 top-6 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-lg ring-1 ring-black/5 sm:-left-8"
          >
            <ShieldCheck className="h-5 w-5 text-brand" />
            <div className="text-left">
              <p className="text-xs font-semibold text-foreground">Painless Care</p>
              <p className="text-[11px] text-foreground/60">Modern techniques</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="animate-float-slow absolute -right-4 bottom-8 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-lg ring-1 ring-black/5 sm:-right-10"
          >
            <CalendarCheck className="h-5 w-5 text-accent" />
            <div className="text-left">
              <p className="text-xs font-semibold text-foreground">Same-day Slots</p>
              <p className="text-[11px] text-foreground/60">Emergency ready</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
