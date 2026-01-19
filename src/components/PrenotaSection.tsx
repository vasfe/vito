'use client';

import ContactForm from "@/components/ContactForm";
import prenotaData from '@/properties/prenota.json';

const PrenotaSection = () => {
  return (
    <section id="prenota" className="py-5 bg-light">
      <div className="container">
        <h2 className="fs-2 text-uppercase fw-bold text-center mb-5">
          {prenotaData.title}
        </h2>
        <div className="row">
          <div className="col-lg-6">
            <div className="address-container">
              <div className="address-label me-3">Ricevo a</div>
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
  );
};

export default PrenotaSection;
