'use client';

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-light text-dark py-4">
      <Container>
        <Row className="justify-content-center">
          <Col md={6} className="text-center">
            {/* <div className="social-icons mt-3">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-dark me-3">
                <i className="bi bi-facebook fs-4"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-dark me-3">
                <i className="bi bi-instagram fs-4"></i>
              </a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-dark">
                <i className="bi bi-whatsapp fs-4"></i>
              </a>
            </div> */}
            <p className="mt-3 fs-6 text-muted">&copy; {new Date().getFullYear()} Vito Ferraro. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
