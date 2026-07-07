import type { Metadata } from "next";
import Hero from "./components/Hero";
import AboutPreview from "./components/AboutPreview";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import ContactMapSection from "./components/ContactMapSection";

export const metadata: Metadata = {
  title: "Smile Dental Clinic | Trusted Dentist in Indore",
  description:
    "Smile Studio Dental Clinic in Indore offers general checkups, teeth whitening, orthodontics, implants, pediatric dentistry, and emergency care with a gentle touch.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <Services />
      <Testimonials />
      <ContactMapSection />
    </>
  );
}
