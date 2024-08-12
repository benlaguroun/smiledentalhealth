import React from 'react';
import './Orthodontics.css';

const Orthodontics = () => {
  return (
    <div className="orthodontics">
      <div className="ortho-header">
        <div className="container">
          <h1>Orthodontics</h1>
          <p>Straightening teeth and correcting bites.</p>
        </div>
      </div>
      <div className="container">
        <div className="ortho-content">
          <div className="ortho-description">
            <h2>About Orthodontics</h2>
            <p>
              Orthodontics is a specialized field of dentistry focused on diagnosing, preventing, and treating dental and facial irregularities. Our expert orthodontists are here to help you achieve a beautiful, healthy smile.
            </p>
          </div>
          <div className="ortho-services">
            <h2>Our Orthodontic Services</h2>
            <ul>
              <li>Braces (traditional and clear)</li>
              <li>Invisalign</li>
              <li>Retainers</li>
              <li>Jaw Alignment</li>
              <li>Space Maintainers</li>
            </ul>
          </div>
          <div className="ortho-cta">
            <h2>Get In Touch</h2>
            <p>Contact us today to learn more about our orthodontic services and to schedule an appointment.</p>
            <a href="#contact" className="btn btn-primary">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orthodontics;
