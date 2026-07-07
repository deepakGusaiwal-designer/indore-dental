import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Reveal from "../components/Reveal";
import ContactForm from "../components/ContactForm";
import { clinic } from "../components/site-data";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Smile Studio Dental Clinic in Indore. Book an appointment, ask a question, or find our clinic on the map.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-linear-to-b from-brand-light/20 via-white to-white">
        <div
          aria-hidden="true"
          className="animate-blob absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand/20 blur-3xl"
        />
        <div className="relative mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-1.5 text-sm font-medium text-brand-dark">
              Get in Touch
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              We&apos;d love to see your smile
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-foreground/70">
              Whether you have a question or want to book an appointment,
              our friendly team is here to help.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <Reveal direction="left" className="lg:col-span-2">
            <div className="flex h-full flex-col gap-6">
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5">
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
              </div>

              <div className="h-64 w-full overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5 lg:flex-1">
                <iframe
                  title="Clinic location map"
                  src={clinic.mapsEmbedSrc}
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.1} className="lg:col-span-3">
            <div className="h-full rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5">
              <h2 className="text-2xl font-bold text-foreground">
                Send us a message
              </h2>
              <p className="mt-2 text-sm text-foreground/60">
                Fill out the form below and we&apos;ll get back to you within
                one business day.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
