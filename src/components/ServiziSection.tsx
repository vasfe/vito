"use client";

import { useState } from "react";
import { Modal, Card, Col, Row } from "react-bootstrap";
import serviziData from "@/properties/servizi.json";
import { getAssetPath } from "@/utils/asset";

const ServiziSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState<{
    title: string;
    description: string;
  } | null>(null);

  const handleShowModal = (service: { title: string; description: string }) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <section id="servizi" className="py-5">
        <div className="container">
          <h2 className="fs-2 text-uppercase fw-bold text-center mb-5">
            {serviziData.title}
          </h2>
          <Row className="mt-1 g-4 justify-content-center">
            {serviziData.slides.map((slide) => (
              <Col md={6} lg={4} key={slide.title}>
                <Card
                  className="h-100 shadow-sm"
                  onClick={() => handleShowModal(slide)}
                  style={{ cursor: "pointer" }}
                >
                  <Card.Img
                    variant="top"
                    src={getAssetPath(slide.image)}
                    style={{
                      height: "200px",
                      objectFit: "contain",
                      paddingTop: "1rem",
                      paddingBottom: "1rem",
                      background: "#f8f9fa",
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
          <h3 className="fs-4 text-center mt-5 mb-3">{serviziData.subheader}</h3>
          <p>{serviziData.paragraph}</p>
          <div className="address-container ">
            <div className="address-label me-2">Ricevo a</div>
            <ul>
              {serviziData.addresses.map((address) => (
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

export default ServiziSection;
