import React from 'react';
import './OralSurgery.css';

const OralSurgery = () => {
  return (
    <div className="oral-surgery">
      <div className="os-header">
        <div className="container">
          <h1>Oral Surgery</h1>
          <p>Surgical procedures for complex dental problems.</p>
        </div>
      </div>
      <div className="container">
        <div className="os-content">
          <div className="os-description">
            <h2>About Oral Surgery</h2>
            <p>
              Oral surgery encompasses a variety of surgical procedures aimed at addressing complex dental problems. Our experienced team ensures you receive the best care.
            </p>
          </div>
          <div className="os-services">
            <h2>Our Oral Surgery Services</h2>
            <ul>
              <li>Tooth Extractions</li>
              <li>Wisdom Teeth Removal</li>
              <li>Dental Implants</li>
              <li>Bone Grafting</li>
              <li>Oral Pathology</li>
            </ul>
          </div>
          <div className="os-cta">
            <h2>Get In Touch</h2>
            <p>Contact us today to learn more about our oral surgery services and to schedule an appointment.</p>
            <a href="#contact" className="btn btn-primary">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OralSurgery;
