import Image from 'next/image';
import suDiMeData from '@/properties/su-di-me.json';
import { getAssetPath } from '@/utils/asset';

const SuDiMeSection = () => {
  return (
    <section id="su-di-me" className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center g-3">
          <div className="col-lg-6 image-column mb-4">
            <div className="su-di-me-image-wrapper border border-5 border-accent shadow rounded">
              <Image
                src={getAssetPath(suDiMeData.image)}
                alt="Fotografia del Dott. Vito Ferraro - Psicologo"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="su-di-me-content">
              <h2 className="fs-2 text-uppercase fw-bold">{suDiMeData.title}</h2>
              <p className="lead">{suDiMeData.lead}</p>
              <p>{suDiMeData.paragraph}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuDiMeSection;