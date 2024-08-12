import React from 'react';
import './Xrays.css';

const Xrays = () => {
  return (
    <div className="xrays">
      <div className="xr-header">
        <div className="container">
          <h1>X-Rays</h1>
          <p>Detailed imaging to diagnose dental issues.</p>
        </div>
      </div>
      <div className="container">
        <div className="xr-content">
          <div className="xr-description">
            <h2>About X-Rays</h2>
            <p>
              X-rays are an essential diagnostic tool in modern dentistry. They allow us to see detailed images of your teeth, bones, and the tissues surrounding them.
            </p>
          </div>
          <div className="xr-services">
            <h2>Our X-Ray Services</h2>
            <ul>
              <li>Intraoral X-Rays</li>
              <li>Extraoral X-Rays</li>
              <li>Panoramic X-Rays</li>
              <li>Cephalometric X-Rays</li>
              <li>Digital X-Rays</li>
            </ul>
          </div>
          <div className="xr-cta">
            <h2>Get In Touch</h2>
            <p>Contact us today to learn more about our X-ray services and to schedule an appointment.</p>
            <a href="#contact" className="btn btn-primary">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Xrays;
