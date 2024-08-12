import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './OfferPage.css';

const Offer1 = () => {
  return (
    <Container className="py-5 offer-page">
      <h1>Basic Dental Checkup</h1>
      <p>Full description of the Basic Dental Checkup offer...</p>
      <Button variant="primary" className="cta-button">Book Now</Button>
    </Container>
  );
};

export default Offer1;
