import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import './Testimonials.css';

const testimonials = [
  {
    image: require('../images/customer1.jpg'),
    text: "Great service and friendly staff!",
    name: "Customer 1",
    rating: 5
  },
  {
    image: require('../images/customer2.jpg'),
    text: "Highly recommend this clinic.",
    name: "Customer 2",
    rating: 4
  },
  {
    image: require('../images/customer3.jpg'),
    text: "Professional and caring environment.",
    name: "Customer 3",
    rating: 5
  }
  
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-5">
      <Container>
        <div className="text-center mb-5">
          <h2>Testimonials</h2>
        </div>
        <Carousel activeIndex={index} onSelect={handleSelect} indicators={false} controls={false}>
          {testimonials.map((testimonial, i) => (
            <Carousel.Item key={i}>
              <Row className="justify-content-center">
                <Col md={4} className="text-center">
                  <img src={testimonial.image} className="testimonial-img rounded-circle" alt={testimonial.name} />
                  <h5>{testimonial.name}</h5>
                  <div className="stars">
                    {Array.from({ length: testimonial.rating }).map((_, index) => (
                      <span key={index} className="star">★</span>
                    ))}
                  </div>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                </Col>
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="testimonial-controls">
          <span className="control left" onClick={() => handleSelect((index - 1 + testimonials.length) % testimonials.length)}>❮</span>
          <span className="control right" onClick={() => handleSelect((index + 1) % testimonials.length)}>❯</span>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
