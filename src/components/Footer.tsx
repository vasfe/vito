'use client';

import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-light text-dark py-4">
      <Container>
        <Row className="justify-content-center">
          <Col md={6} className="text-center">
            <small className="mt-3 mb-3 text-muted d-block">&copy; {new Date().getFullYear()} Vito Ferraro. All rights reserved.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
