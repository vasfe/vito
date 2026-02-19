import heroData from '@/properties/hero.json';
import { getAssetPath } from '@/utils/asset';

const HeroSection = () => {
  const heroStyle = {
    backgroundImage: `url('${getAssetPath(heroData.image)}')`,
  };

  return (
    <section id="home" className="hero-section" style={heroStyle}>
      <div className="container hero-content">
        <h1 className="display-1">
          <span className="dott-prefix">Dott.</span> Vito Ferraro
        </h1>
        <h2 className="display-5">{heroData.subheader}</h2>
        <p className="lead">{heroData.paragraph}</p>
      </div>
    </section>
  );
};

export default HeroSection;
