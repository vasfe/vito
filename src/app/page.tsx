
import ServiziSection from "@/components/ServiziSection";
import HeroSection from "@/components/HeroSection";
import SuDiMeSection from "@/components/SuDiMeSection";
import PrenotaSection from "@/components/PrenotaSection";
import FaqSection from "@/components/FaqSection";
import BlogSection from "@/components/BlogSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Pagina principale dello studio psicologico del Dott. Vito Ferraro. Scopri i servizi offerti e prenota una consulenza.",
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SuDiMeSection />
      <ServiziSection />
      <PrenotaSection />
      <FaqSection />
      {/* <BlogSection /> */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Psychologist",
          "name": "Dott. Vito Ferraro",
          "image": "https://vitoferraro.com/hero.jpeg",
          "@id": "https://vitoferraro.com",
          "url": "https://vitoferraro.com",
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