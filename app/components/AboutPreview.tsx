import Link from "next/link";
import { ArrowRight, HeartPulse, Sparkles, Users } from "lucide-react";
import Reveal from "./Reveal";
import { stats } from "./site-data";

export default function AboutPreview() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <Reveal direction="left">
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-brand/10" />
            <div className="grid grid-cols-2 gap-4">
              <div className="flex h-40 flex-col items-center justify-center gap-2 rounded-2xl bg-brand text-white shadow-lg sm:h-48">
                <Users className="h-8 w-8" />
                <span className="text-2xl font-bold">12k+</span>
                <span className="text-xs">Happy Patients</span>
              </div>
              <div className="mt-8 flex h-40 flex-col items-center justify-center gap-2 rounded-2xl bg-white shadow-lg ring-1 ring-black/5 sm:h-48">
                <HeartPulse className="h-8 w-8 text-brand" />
                <span className="text-2xl font-bold text-foreground">15+</span>
                <span className="text-xs text-foreground/60">Years of Care</span>
              </div>
              <div className="flex h-40 flex-col items-center justify-center gap-2 rounded-2xl bg-white shadow-lg ring-1 ring-black/5 sm:h-48">
                <Sparkles className="h-8 w-8 text-accent" />
                <span className="text-2xl font-bold text-foreground">8</span>
                <span className="text-xs text-foreground/60">Expert Dentists</span>
              </div>
              <div className="mt-8 flex h-40 flex-col items-center justify-center gap-2 rounded-2xl bg-accent text-white shadow-lg sm:h-48">
                <span className="text-2xl font-bold">4.9★</span>
                <span className="text-xs">Patient Rating</span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.1}>
          <span className="text-sm font-semibold uppercase tracking-wide text-brand">
            About Our Clinic
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Compassionate dentistry, backed by modern technology
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/70">
            For over 15 years, our team of specialists has helped families
            across Indore achieve healthier, more confident smiles. We
            combine advanced diagnostic tools with a calm, welcoming
            environment — because great dental care should never feel
            intimidating.
          </p>

          <ul className="mt-6 space-y-3">
            {[
              "Advanced digital X-rays and imaging",
              "Sterile, hygienic treatment rooms",
              "Transparent pricing, no hidden costs",
              "Flexible scheduling, including weekends",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-foreground/80">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 font-semibold text-brand-dark transition-all hover:gap-3"
          >
            Learn more about us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>

      <div className="mt-16 grid grid-cols-2 gap-6 border-t border-black/5 pt-10 sm:grid-cols-4">
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
  );
}
