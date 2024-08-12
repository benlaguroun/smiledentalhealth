import React from 'react';
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';
import './Hero.css';

import image1 from '../images/hero-1.jpg';
import image2 from '../images/hero-2.jpg';
import image3 from '../images/hero-3.jpg';

const Hero = () => {
  return (
    <Carousel className="hero" interval={2000}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <Container>
            <Row className="align-items-center" style={{ height: '100vh' }}>
              <Col className="text-center text-white">
                <h1>Welcome to Our Dental Clinic</h1>
                <p>Providing high-quality dental care for your whole family.</p>
                <Button className="btn btn-primary">Book an Appointment</Button>
              </Col>
            </Row>
          </Container>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <Container>
            <Row className="align-items-center" style={{ height: '100vh' }}>
              <Col className="text-center text-white">
                <h1>Advanced Dental Technology</h1>
                <p>Using the latest technology to ensure the best care.</p>
                <Button className="btn btn-primary">Learn More</Button>
              </Col>
            </Row>
          </Container>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <Container>
            <Row className="align-items-center" style={{ height: '100vh' }}>
              <Col className="text-center text-white">
                <h1>Experienced Dental Professionals</h1>
                <p>Our team is dedicated to your dental health.</p>
                <Button className="btn btn-primary">Meet Our Team</Button>
              </Col>
            </Row>
          </Container>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;
