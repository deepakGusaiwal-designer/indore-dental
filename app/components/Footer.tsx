import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { clinic, navLinks } from "./site-data";
import ToothLogo from "./ToothLogo";
import { FacebookIcon, InstagramIcon, XIcon } from "./SocialIcons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/5 bg-[#0f2a2e] text-white/80">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2 text-lg font-bold text-white">
            <ToothLogo className="h-9 w-9" />
            <span>{clinic.shortName}</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            {clinic.tagline}. Trusted dental care in the heart of Indore for
            the whole family.
          </p>
          <div className="mt-5 flex gap-3">
            {[
              { icon: FacebookIcon, href: clinic.social.facebook, label: "Facebook" },
              { icon: InstagramIcon, href: clinic.social.instagram, label: "Instagram" },
              { icon: XIcon, href: clinic.social.x, label: "X" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-all hover:-translate-y-0.5 hover:bg-brand"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-brand-light"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-light" />
              <span>{clinic.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-brand-light" />
              <a href={clinic.phoneHref} className="hover:text-brand-light">
                {clinic.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-brand-light" />
              <a
                href={`mailto:${clinic.email}`}
                className="hover:text-brand-light"
              >
                {clinic.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Working Hours
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            {clinic.hours.map((h) => (
              <li key={h.day} className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-light" />
                <span>
                  {h.day}
                  <br />
                  <span className="text-white/60">{h.time}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-6 text-center text-xs text-white/50 sm:px-6 lg:px-8">
        © {year} {clinic.name}. All rights reserved.
      </div>
    </footer>
  );
}
