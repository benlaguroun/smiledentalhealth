import React from 'react';
import './EmergencyCare.css';

const EmergencyCare = () => {
  return (
    <div className="emergency-care">
      <div className="ec-header">
        <div className="container">
          <h1>Emergency Care</h1>
          <p>Immediate assistance for dental emergencies.</p>
        </div>
      </div>
      <div className="container">
        <div className="ec-content">
          <div className="ec-description">
            <h2>About Emergency Care</h2>
            <p>
              Dental emergencies can occur at any time and require immediate attention. Our team is here to provide prompt and effective care to address any urgent dental issues you may have.
            </p>
          </div>
          <div className="ec-services">
            <h2>Our Emergency Care Services</h2>
            <ul>
              <li>Toothaches and pain relief</li>
              <li>Broken or chipped teeth</li>
              <li>Knocked-out teeth</li>
              <li>Lost fillings or crowns</li>
              <li>Abscesses and infections</li>
            </ul>
          </div>
          <div className="ec-cta">
            <h2>Get In Touch</h2>
            <p>If you have a dental emergency, don't hesitate to contact us immediately for assistance.</p>
            <a href="#contact" className="btn btn-primary">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyCare;
