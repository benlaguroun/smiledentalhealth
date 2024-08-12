import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTooth, faFillDrip, faCrown, faXRay, faSmile } from '@fortawesome/free-solid-svg-icons';
import './Blog3.css'; // Custom CSS file for Blog3
import Footer from '../components/Footer'; // Import Footer component
import SocialMedia from '../components/SocialMedia'; // Import SocialMedia component

const Blog3 = () => {
  return (
    <>
      <SocialMedia /> {/* Include the SocialMedia component */}
      <div className="blog3-container">
        <Container className="blog-post-container my-5">
          <div className="text-center mb-5">
            <h1 className="text-center blog-title">Understanding Different Types of Dental Treatments</h1>
          </div>
          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faTooth} className="fa-icon animated-icon" />
            </div>
            <p>
              Dental treatments vary widely depending on the issue being addressed. Here are some common types of dental treatments:
            </p>
          </div>
          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faFillDrip} className="fa-icon animated-icon" />
            </div>
            <p>
              <strong>1. Cleanings:</strong> Routine cleanings remove plaque and tartar buildup, helping prevent cavities and gum disease. This is a preventative measure to maintain oral health and should be done regularly.
            </p>
          </div>
          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faCrown} className="fa-icon animated-icon" />
            </div>
            <p>
              <strong>2. Fillings:</strong> Used to treat cavities, fillings can be made of composite resin, amalgam, gold, or porcelain. They restore the tooth's function and integrity after decay has been removed.
            </p>
          </div>
          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faXRay} className="fa-icon animated-icon" />
            </div>
            <p>
              <strong>3. Crowns:</strong> A crown is a cap placed over a damaged tooth to restore its shape, size, and strength. Crowns are often used after root canal therapy or when a large filling is not sufficient.
            </p>
          </div>
          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faSmile} className="fa-icon animated-icon" />
            </div>
            <p>
              <strong>4. Root Canals:</strong> A treatment used to repair and save a tooth that is badly decayed or infected. The procedure involves removing the damaged area of the tooth (the pulp), cleaning and disinfecting it, and then filling and sealing it.
            </p>
          </div>
          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faSmile} className="fa-icon animated-icon" />
            </div>
            <p>
              <strong>5. Extractions:</strong> Removing a tooth that is beyond repair due to damage or decay. Extractions are also performed for orthodontic reasons or to remove wisdom teeth that are impacted.
            </p>
          </div>
          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faSmile} className="fa-icon animated-icon" />
            </div>
            <p>
              <strong>6. Orthodontic Treatment:</strong> This includes braces, clear aligners, and other devices that help align teeth and jaws properly. Orthodontic treatment can improve the appearance of your smile and the functionality of your bite.
            </p>
          </div>
          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faSmile} className="fa-icon animated-icon" />
            </div>
            <p>
              <strong>7. Cosmetic Procedures:</strong> Treatments like teeth whitening, veneers, and bonding that improve the appearance of your teeth. These procedures can boost confidence and enhance your smile.
            </p>
          </div>
        </Container>
      </div>
      <Footer /> {/* Include the Footer component */}
    </>
  );
};

export default Blog3;
