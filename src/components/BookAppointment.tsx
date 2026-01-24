"use client";

import dynamic from 'next/dynamic';
import prenotaData from "@/properties/prenota.json";

const DynamicContactForm = dynamic(() => import('@/components/ContactForm'), {
  ssr: false,
});

const whatsAppNumber = prenotaData.phone.replace(/[\s+]/g, "");

const BookAppointment = () => {
  return (
    <section id="book-appointment" className="py-5 bg-light">
      <div className="container">
        <h2 className="fs-2 text-uppercase fw-bold text-center mb-5">
          {prenotaData.title}
        </h2>
        <div className="row">
          <div className="col col-lg-6 justify-content-center ">
            <p>{prenotaData.paragraph}</p>
            <div className="d-flex flex-column my-4 gap-2">
              <a
                href={`https://wa.me/${whatsAppNumber}`}
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="contact-link"
              >
                <i className="bi bi-whatsapp whatsapp-icon"></i>
                <>{prenotaData.phone}</>
              </a>
              <a
                href={`mailto:${prenotaData.email}`}
                rel="noopener noreferrer"
                aria-label="Email"
                className="contact-link"
              >
                <i className="bi bi-envelope-at email-icon"></i>
                <>{prenotaData.email}</>
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <DynamicContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookAppointment;
