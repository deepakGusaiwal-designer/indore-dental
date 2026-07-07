import type { Metadata } from "next";
import Link from "next/link";
import {
  Award,
  CalendarCheck,
  GraduationCap,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Reveal from "../components/Reveal";
import ToothLogo from "../components/ToothLogo";
import { clinic, stats } from "../components/site-data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Smile Studio Dental Clinic in Indore — our story, our values, and the experienced team dedicated to your family's dental health.",
};

const values = [
  {
    icon: HeartHandshake,
    title: "Patient-First Care",
    description:
      "Every treatment plan is built around your comfort, your questions, and your goals — never a one-size-fits-all approach.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Hygiene",
    description:
      "Hospital-grade sterilization and strict infection-control protocols keep every visit safe for you and your family.",
  },
  {
    icon: Sparkles,
    title: "Modern Technology",
    description:
      "Digital X-rays, intraoral cameras, and painless techniques mean faster, more accurate, and more comfortable care.",
  },
  {
    icon: GraduationCap,
    title: "Experienced Team",
    description:
      "Our dentists continue their education year-round to bring the latest, evidence-based treatments to Indore.",
  },
];

const team = [
  { name: "Dr. Ananya Kapoor", role: "Chief Dental Surgeon", focus: "Cosmetic & Restorative Dentistry" },
  { name: "Dr. Rohan Deshmukh", role: "Orthodontist", focus: "Braces & Clear Aligners" },
  { name: "Dr. Neha Joshi", role: "Pediatric Dentist", focus: "Child-friendly Dental Care" },
  { name: "Dr. Aditya Rane", role: "Oral & Maxillofacial Surgeon", focus: "Implants & Extractions" },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-linear-to-b from-brand-light/20 via-white to-white">
        <div
          aria-hidden="true"
          className="animate-blob absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand/20 blur-3xl"
        />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-1.5 text-sm font-medium text-brand-dark">
              <ToothLogo className="h-4 w-4" />
              About {clinic.name}
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Caring for Indore&apos;s smiles since 2010
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/70">
              What started as a single-chair clinic has grown into one of
              Indore&apos;s most trusted dental practices — built on honest
              advice, gentle treatment, and genuine care for every patient
              who walks through our doors.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal direction="left">
            <div className="relative rounded-3xl bg-brand/5 p-10">
              <ToothLogo className="mx-auto h-40 w-40 sm:h-52 sm:w-52" />
            </div>
          </Reveal>
          <Reveal direction="right" delay={0.1}>
            <span className="text-sm font-semibold uppercase tracking-wide text-brand">
              Our Story
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Building trust, one smile at a time
            </h2>
            <p className="mt-5 text-base leading-relaxed text-foreground/70">
              {clinic.name} was founded with a simple mission: make quality
              dental care accessible, comfortable, and transparent. Over the
              years we&apos;ve treated thousands of patients — from first
              baby teeth to complete smile makeovers — while staying true to
              that founding promise.
            </p>
            <p className="mt-4 text-base leading-relaxed text-foreground/70">
              Today, our multi-specialty team offers everything from
              preventive checkups to advanced surgical and cosmetic
              procedures, all under one roof in Vijay Nagar, Indore.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Award className="h-10 w-10 text-accent" />
              <p className="text-sm text-foreground/70">
                Recognized as a <strong>Top Dental Clinic in Indore</strong>{" "}
                for three consecutive years.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-brand/5 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-brand">
              Our Values
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What guides every treatment
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.1}>
                <div className="h-full rounded-2xl bg-white p-7 text-center shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <value.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-brand">
            Meet the Team
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Experienced specialists who care
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.1}>
              <div className="h-full rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand/10 text-xl font-semibold text-brand-dark">
                  {member.name
                    .replace("Dr. ", "")
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-brand">{member.role}</p>
                <p className="mt-2 text-xs text-foreground/60">{member.focus}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 rounded-3xl bg-brand/5 p-10 sm:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center">
              <p className="text-3xl font-bold text-brand-dark sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-foreground/60">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-brand py-16 text-center text-white">
        <Reveal className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to experience gentle, modern dental care?
          </h2>
          <p className="mt-4 text-brand-light">
            Book your appointment today and let us take care of your smile.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-brand-dark shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            <CalendarCheck className="h-5 w-5" />
            Book an Appointment
          </Link>
        </Reveal>
      </section>
    </>
  );
}
