import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Blog.css';

const blogs = [
  {
    id: 1,
    image: require('../images/blog1.jpg'),
    title: 'The Importance of Regular Dental Check-ups',
    snippet: 'Regular dental check-ups are crucial for maintaining good oral health. Learn why...',
  },
  {
    id: 2,
    image: require('../images/blog2.jpg'),
    title: 'Tips for Maintaining Healthy Teeth',
    snippet: 'Discover essential tips to keep your teeth healthy and strong...',
  },
  {
    id: 3,
    image: require('../images/blog3.jpg'),
    title: 'Understanding Different Types of Dental Treatments',
    snippet: 'Learn about various dental treatments and their benefits...',
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-5">
      <Container>
        <div className="text-center mb-5">
          <h2>Our Blog</h2>
        </div>
        <Row>
          {blogs.map((blog) => (
            <Col md={4} key={blog.id} className="mb-4">
              <Card className="h-100">
                <Card.Img variant="top" src={blog.image} alt={blog.title} />
                <Card.Body>
                  <Card.Title>{blog.title}</Card.Title>
                  <Card.Text>{blog.snippet}</Card.Text>
                  <Link to={`/blog/${blog.id}`}>
                    <Button variant="primary">Read More</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Blog;
