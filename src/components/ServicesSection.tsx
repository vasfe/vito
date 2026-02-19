"use client";

import { useState, useEffect } from "react";
import { Modal, Card, Col, Row } from "react-bootstrap";
import prestazioniData from "@/properties/prestazioni.json";
import { getAssetPath } from "@/utils/asset";

const ServicesSection = () => {
  const [isClientHydrated, setIsClientHydrated] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState<{
    title: string;
    description: string;
  } | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setIsClientHydrated(true);
    }, 0);
  }, []);

  const handleShowModal = (service: { title: string; description: string }) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // SEO-friendly version for server-side rendering and initial client render
  if (!isClientHydrated) {
    return (
      <section id="services" className="py-5">
        <div className="container">
          <h2 className="fs-2 text-uppercase fw-bold text-center mb-5">
            {prestazioniData.title}
          </h2>
          {prestazioniData.slides.map((service) => (
            <div key={service.title} className="mb-4">
              <h3 className="fs-5 fw-bold">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
          <h3 className="fs-4 text-center mt-5 mb-3">
            {prestazioniData.subheader}
          </h3>
          <p>{prestazioniData.paragraph}</p>
          <div className="d-flex align-items-start">
            <div className="fw-bold mr-2">Ricevo a</div>
            <ul>
              {prestazioniData.addresses.map((address) => (
                <li key={address}>{address}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  }

  // Interactive version for client-side rendering after hydration
  return (
    <>
      <section id="services" className="py-5">
        <div className="container">
          <h2 className="fs-2 text-uppercase fw-bold text-center mb-5">
            {prestazioniData.title}
          </h2>
          <Row className="mt-1 g-4 justify-content-center">
            {prestazioniData.slides.map((slide) => (
              <Col md={6} lg={4} key={slide.title}>
                <Card
                  className="h-100 shadow-sm"
                  onClick={() => handleShowModal(slide)}
                  style={{ cursor: "pointer" }}
                >
                  <Card.Img
                    variant="top"
                    src={getAssetPath(slide.image)}
                    alt={slide.title}
                    style={{
                      maxHeight: "250px",
                      background: "#f8f9fa",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <Card.Body className="text-center">
                    <Card.Title as="h4" className="fs-5 fw-bold">
                      {slide.title}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <h3 className="fs-4 text-center mt-5 mb-3">
            {prestazioniData.subheader}
          </h3>
          <p>{prestazioniData.paragraph}</p>
          <div className="d-flex align-items-start">
            <div className="fw-bold mr-2">Ricevo a</div>
            <ul>
              {prestazioniData.addresses.map((address) => (
                <li key={address}>{address}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {selectedService && (
        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedService.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{selectedService.description}</Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default ServicesSection;
