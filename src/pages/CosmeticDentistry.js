import React from 'react';
import './CosmeticDentistry.css';

const CosmeticDentistry = () => {
  return (
    <div className="cosmetic-dentistry">
      <div className="cd-header">
        <div className="container">
          <h1>Cosmetic Dentistry</h1>
          <p>Improving the appearance of your smile.</p>
        </div>
      </div>
      <div className="container">
        <div className="cd-content">
          <div className="cd-description">
            <h2>About Cosmetic Dentistry</h2>
            <p>
              Cosmetic dentistry focuses on enhancing the appearance of your teeth, gums, and smile. We offer a variety of treatments designed to improve the aesthetics of your smile, including:
            </p>
          </div>
          <div className="cd-services">
            <h2>Our Services</h2>
            <ul>
              <li>Teeth Whitening</li>
              <li>Veneers</li>
              <li>Dental Bonding</li>
              <li>Gum Contouring</li>
              <li>Smile Makeovers</li>
            </ul>
          </div>
          <div className="cd-cta">
            <h2>Get In Touch</h2>
            <p>Contact us today to learn more about our cosmetic dentistry services and to schedule a consultation.</p>
            <a href="#contact" className="btn btn-primary">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CosmeticDentistry;
