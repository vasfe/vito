
import ServicesSection from "@/components/ServicesSection";
import HeroSection from "@/components/HeroSection";
import AboutMeSection from "@/components/AboutSection";
import BookAppointment from "@/components/BookAppointment";
import FaqSection from "@/components/FaqSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psicologo Roma, Monterotondo, Acri | Online e Domiciliare",
  description:
    "Studio psicologico del Dott. Vito Ferraro. Sostegno psicologico a Roma, Monterotondo e Acri, Online e a Domicilio. Specialista in DSA, BES, Psico-oncologia e CAA.",
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutMeSection />
      <ServicesSection />
      <BookAppointment />
      <FaqSection />
      {/* <BlogSection /> */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Psychologist",
          "name": "Dott. Vito Ferraro",
          "image": "https://www.ferraropsicologo.it/hero.jpeg",
          "@id": "https://www.ferraropsicologo.it",
          "url": "https://www.ferraropsicologo.it",
          "telephone": "+39 3295813245",
          "email": "ferrarovpsicologo@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Via Labicana 92 - sc. A/int. 3",
            "addressLocality": "Roma",
            "postalCode": "00184",
            "addressRegion": "RM",
            "addressCountry": "IT"
          },
          "sameAs": [
            "https://www.facebook.com",
            "https://www.instagram.com"
          ]
        }) }}
      />
    </main>
  );
}