import {
  Baby,
  ShieldCheck,
  Siren,
  Smile,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";
import ToothLogo from "./ToothLogo";
import { services, type Service } from "./site-data";

const icons: Record<Service["icon"], LucideIcon | typeof ToothLogo> = {
  tooth: ToothLogo,
  sparkles: Sparkles,
  "smile-brace": Smile,
  shield: ShieldCheck,
  baby: Baby,
  siren: Siren,
};

export default function Services() {
  return (
    <section
      id="services"
      className="bg-brand/5 py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-brand">
            What We Offer
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Complete dental care under one roof
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/70">
            From preventive checkups to advanced cosmetic and restorative
            treatments, our services are designed around your comfort.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <Reveal key={service.title} delay={(i % 3) * 0.1}>
                <div className="group h-full rounded-2xl bg-white p-7 shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:ring-brand/20">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
