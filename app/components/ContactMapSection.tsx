import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Reveal from "./Reveal";
import { clinic } from "./site-data";

export default function ContactMapSection() {
  return (
    <section id="visit" className="bg-brand/5 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-brand">
            Visit Us
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Find us in the heart of Indore
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-5">
          <Reveal direction="left" className="lg:col-span-2">
            <div className="flex h-full flex-col justify-between rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Address</p>
                    <p className="mt-1 text-sm text-foreground/65">{clinic.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Phone</p>
                    <a
                      href={clinic.phoneHref}
                      className="mt-1 block text-sm text-foreground/65 hover:text-brand-dark"
                    >
                      {clinic.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Email</p>
                    <a
                      href={`mailto:${clinic.email}`}
                      className="mt-1 block text-sm text-foreground/65 hover:text-brand-dark"
                    >
                      {clinic.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <Clock className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Working Hours</p>
                    {clinic.hours.map((h) => (
                      <p key={h.day} className="mt-1 text-sm text-foreground/65">
                        {h.day}: {h.time}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-brand/30 transition-all hover:-translate-y-0.5 hover:bg-brand-dark"
              >
                Get in Touch
              </Link>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.1} className="lg:col-span-3">
            <div className="h-80 w-full overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5 lg:h-full">
              <iframe
                title="Clinic location map"
                src={clinic.mapsEmbedSrc}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
