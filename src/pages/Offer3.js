import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './OfferPage.css';

const Offer3 = () => {
  return (
    <Container className="py-5 offer-page">
      <h1>Orthodontic Braces</h1>
      <p>Full description of the Orthodontic Braces offer...</p>
      <Button variant="primary" className="cta-button">Book Now</Button>
    </Container>
  );
};

export default Offer3;
