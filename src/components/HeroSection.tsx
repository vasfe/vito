import heroData from '@/properties/hero.json';
import { getAssetPath } from '@/utils/asset';
import prenotaData from '@/properties/prenota.json';

const HeroSection = () => {
  const heroStyle = {
    backgroundImage: `url('${getAssetPath(heroData.image)}')`,
  };

  const whatsAppNumber = prenotaData.phone.replace(/[\s+]/g, '');

  return (
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
            className="mx-2"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="mx-2"
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a
            href={`https://wa.me/${whatsAppNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="mx-2"
          >
            <i className="bi bi-whatsapp"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
