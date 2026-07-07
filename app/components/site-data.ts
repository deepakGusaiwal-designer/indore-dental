export const clinic = {
  name: "Smile Studio Dental Clinic",
  shortName: "Smile Studio",
  tagline: "Gentle care for a lifetime of healthy smiles",
  phone: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  email: "hello@smilestudiodental.in",
  address: "12 MG Road, Vijay Nagar, Indore, Madhya Pradesh 452010",
  mapsEmbedSrc:
    "https://www.google.com/maps?q=Vijay+Nagar,+Indore,+Madhya+Pradesh&output=embed",
  mapsLinkHref: "https://maps.google.com/?q=Vijay+Nagar,+Indore,+Madhya+Pradesh",
  hours: [
    { day: "Monday – Saturday", time: "9:00 AM – 8:00 PM" },
    { day: "Sunday", time: "10:00 AM – 2:00 PM" },
  ],
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    x: "https://x.com",
  },
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/contact" },
];

export type Service = {
  icon: "tooth" | "sparkles" | "smile-brace" | "shield" | "baby" | "siren";
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: "tooth",
    title: "General Checkups",
    description:
      "Comprehensive exams and cleanings to catch problems early and keep your smile in top shape.",
  },
  {
    icon: "sparkles",
    title: "Teeth Whitening",
    description:
      "Safe, in-clinic whitening treatments that brighten your smile by several shades in one visit.",
  },
  {
    icon: "smile-brace",
    title: "Orthodontics",
    description:
      "Braces and clear aligners tailored to straighten teeth comfortably at any age.",
  },
  {
    icon: "shield",
    title: "Dental Implants",
    description:
      "Durable, natural-looking implants that restore missing teeth and full chewing function.",
  },
  {
    icon: "baby",
    title: "Pediatric Dentistry",
    description:
      "Friendly, patient care designed to make dental visits stress-free for children.",
  },
  {
    icon: "siren",
    title: "Emergency Care",
    description:
      "Same-day appointments for dental pain, trauma, and other urgent concerns.",
  },
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Ananya Sharma",
    role: "Patient since 2021",
    quote:
      "The most comfortable dental experience I've ever had. The team explained every step and made sure I was relaxed throughout.",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    role: "Invisalign patient",
    quote:
      "My smile transformation exceeded expectations. The doctors are genuinely caring and the clinic is spotless.",
    rating: 5,
  },
  {
    name: "Priya Nair",
    role: "Parent of a patient",
    quote:
      "My daughter used to be terrified of dentists. The pediatric team here changed that completely — she now looks forward to visits!",
    rating: 5,
  },
  {
    name: "Karan Mehta",
    role: "Implant patient",
    quote:
      "Professional, transparent about costs, and the results speak for themselves. Highly recommend to anyone in Indore.",
    rating: 4,
  },
];

export const stats = [
  { label: "Years of Experience", value: "15+" },
  { label: "Happy Patients", value: "12,000+" },
  { label: "Expert Dentists", value: "8" },
  { label: "Patient Rating", value: "4.9/5" },
];
