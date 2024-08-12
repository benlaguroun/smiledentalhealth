import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTooth, faCalendarCheck, faXRay } from '@fortawesome/free-solid-svg-icons';
import './Blog1.css'; // Custom CSS file
import Footer from '../components/Footer'; // Import Footer component
import SocialMedia from '../components/SocialMedia'; // Import SocialMedia component

const Blog1 = () => {
  return (
    <>
      <SocialMedia /> {/* Include the SocialMedia component */}
      <div className="blog1-container">
        <Container className="blog-post-container my-5">
          <Row>
            <Col>
              <h1 className="text-center blog-title">The Importance of Regular Dental Check-ups</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="blog-card">
                <FontAwesomeIcon icon={faCalendarCheck} className="fa-icon mb-3 animated-icon" />
                <p>
                  Regular dental check-ups are essential for maintaining good oral health. They allow dentists to detect and treat issues early before they become more serious. During a check-up, your dentist will examine your teeth and gums, clean your teeth, and may take X-rays to check for hidden problems.
                </p>
              </div>
              <div className="blog-card">
                <FontAwesomeIcon icon={faTooth} className="fa-icon mb-3 animated-icon" />
                <p>
                  One of the key benefits of regular dental visits is the prevention of tooth decay and gum disease. Dentists can remove plaque and tartar that brushing and flossing can't reach, preventing cavities and gum infections. They can also provide guidance on proper oral hygiene practices to help you maintain healthy teeth and gums at home.
                </p>
              </div>
              <div className="blog-card">
                <FontAwesomeIcon icon={faXRay} className="fa-icon mb-3 animated-icon" />
                <p>
                  Regular check-ups also play a crucial role in detecting oral cancer. Dentists are trained to spot early signs of oral cancer, which can be life-saving if caught early. Additionally, dental visits can help diagnose systemic conditions that manifest in the mouth, such as diabetes and autoimmune diseases.
                </p>
              </div>
              <div className="blog-card">
                <FontAwesomeIcon icon={faCalendarCheck} className="fa-icon mb-3 animated-icon" />
                <p>
                  Furthermore, regular check-ups are an opportunity to discuss cosmetic concerns and treatment options. If you're interested in whitening, orthodontics, or other aesthetic treatments, your dentist can provide valuable advice and help you plan the best approach. They can also guide you on lifestyle habits, such as diet and smoking cessation, that impact oral health.
                </p>
              </div>
              <div className="blog-card">
                <FontAwesomeIcon icon={faTooth} className="fa-icon mb-3 animated-icon" />
                <p>
                  In conclusion, regular dental check-ups are a vital part of overall health care. They help maintain oral health, prevent serious conditions, and detect potential issues early. Make sure to schedule a dental visit at least twice a year to keep your smile healthy and bright.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer /> {/* Include the Footer component */}
    </>
  );
};

export default Blog1;
