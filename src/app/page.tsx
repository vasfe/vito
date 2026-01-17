import SwiperComponent from "@/components/SwiperComponent";
import ContactForm from "@/components/ContactForm";
import heroData from "@/properties/hero.json";
import suDiMeData from "@/properties/su-di-me.json";
import serviziData from "@/properties/servizi.json";
import faqData from "@/properties/faq.json";
import blogData from "@/properties/blog.json";
import prenotaData from "@/properties/prenota.json";
import { getAssetPath } from "@/utils/asset";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Pagina principale dello studio psicologico del Dott. Vito Ferraro. Scopri i servizi offerti e prenota una consulenza.",
};

export default function Home() {
  const heroStyle = {
    backgroundImage: `url('${getAssetPath(heroData.image)}')`,
  };

  return (
    <main>
      {/* Hero Section */}
      <section id="home" className="hero-section" style={heroStyle}>
        <div className="container hero-content">
          <h1 className="display-1">
            <span className="dott-prefix">Dott.</span> Vito Ferraro
          </h1>
          <h2 className="display-5">{heroData.subheader}</h2>
          <p className="lead">{heroData.paragraph}</p>
          <div className="social-icons mt-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <i className="bi bi-whatsapp"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Su Di Me Section */}
      <section id="su-di-me" className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-3">
            <div className="col-lg-6 image-column">
              <div className="su-di-me-image-wrapper">
                <Image
                  src={getAssetPath(suDiMeData.image)}
                  alt="Fotografia del Dott. Vito Ferraro - Psicologo"
                  className="rounded"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="su-di-me-content">
                <h2 className="section-header">{suDiMeData.title}</h2>
                <p className="lead">{suDiMeData.lead}</p>
                <p>{suDiMeData.paragraph}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servizi Section */}
      <section id="servizi" className="py-5">
        <div className="container">
          <h2 className="section-header text-center mb-5">
            {serviziData.title}
          </h2>
          <h3 className="section-subheader text-center mb-4">
            {serviziData.subheader}
          </h3>
          <p className="servizi-paragraph">{serviziData.paragraph}</p>
          <SwiperComponent slides={serviziData.slides} />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-5 bg-light">
        <div className="container">
          <h2 className="section-header text-center mb-5">{faqData.title}</h2>
          <div className="row">
            <div className="col-lg-12 mx-auto">
              <div className="accordion" id="faqAccordion">
                {faqData.questions.map((q, index) => (
                  <div className="accordion-item" key={q.question}>
                    <h2 className="accordion-header" id={`heading${index}`}>
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${index}`}
                        aria-expanded={index === 0 ? "true" : "false"}
                        aria-controls={`collapse${index}`}
                      >
                        {q.question}
                      </button>
                    </h2>
                    <div
                      id={`collapse${index}`}
                      className={`accordion-collapse collapse ${
                        index === 0 ? "show" : ""
                      }`}
                      aria-labelledby={`heading${index}`}
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">{q.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-5">
        <div className="container">
          <h2 className="section-header text-center mb-5">{blogData.title}</h2>
          <div className="row">
            {blogData.posts.map((post, index) => (
              <div className="col-md-4 mb-4" key={post.title}>
                <a href="#" className="card h-100">
                  <Image
                    src={getAssetPath(post.image)}
                    className="card-img-top"
                    alt={post.title}
                    width={400}
                    height={300}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.description}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prenota Section */}
      <section id="prenota" className="py-5 bg-light">
        <div className="container">
          <h2 className="section-header text-center mb-5">
            {prenotaData.title}
          </h2>
          <div className="row">
            <div className="col-lg-6">
              <div className="address-container">
                <div className="address-label">Ricevo a</div>
                <ul>
                  {prenotaData.addresses.map((address) => (
                    <li key={address}>{address}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <p>{prenotaData.phone}</p>
                <p>{prenotaData.email}</p>
              </div>
            </div>
            <div className="col-lg-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Psychologist",
          "name": "Dott. Vito Ferraro",
          "image": "https://www.vitoferraro.com/hero.jpeg",
          "@id": "https://www.vitoferraro.com",
          "url": "https://www.vitoferraro.com",
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