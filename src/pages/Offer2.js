import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './OfferPage.css';

const Offer2 = () => {
  return (
    <Container className="py-5 offer-page">
      <h1>Teeth Whitening</h1>
      <p>Full description of the Teeth Whitening offer...</p>
      <Button variant="primary" className="cta-button">Book Now</Button>
    </Container>
  );
};

export default Offer2;
