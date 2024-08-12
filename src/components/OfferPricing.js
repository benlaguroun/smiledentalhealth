import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './OfferPricing.css';

const offers = [
  {
    id: 1,
    title: 'Basic Dental Checkup',
    price: '$50',
    summary: 'A comprehensive dental checkup including cleaning.',
  },
  {
    id: 2,
    title: 'Teeth Whitening',
    price: '$120',
    summary: 'Professional teeth whitening service to brighten your smile.',
  },
  {
    id: 3,
    title: 'Orthodontic Braces',
    price: '$500',
    summary: 'Full orthodontic treatment with braces for all ages.',
  },
];

const OfferPricing = () => {
  return (
    <div className="offer-section">
      <Container className="py-5" id="offers">
        <h2 className="section-heading">Our Offers and Pricing</h2>
        <Row>
          {offers.map((offer) => (
            <Col md={4} key={offer.id}>
              <Card className="mb-4 offer-card">
                <Card.Body>
                  <Card.Title>{offer.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{offer.price}</Card.Subtitle>
                  <Card.Text>{offer.summary}</Card.Text>
                  <Link to={`/offer/${offer.id}`}>
                    <Button variant="primary">Learn More</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default OfferPricing;
