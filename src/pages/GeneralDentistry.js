import React from 'react';
import './GeneralDentistry.css';

const GeneralDentistry = () => {
  return (
    <div className="general-dentistry">
      <header className="gd-header">
        <div className="container">
          <h1>General Dentistry</h1>
          <p>Routine dental check-ups and treatments to keep your smile healthy.</p>
        </div>
      </header>
      <main className="container">
        <section className="gd-content">
          <div className="gd-description">
            <h2>About Our General Dentistry Services</h2>
            <p>At our dental clinic, we offer comprehensive general dentistry services to ensure your oral health is maintained. Our team of experienced dentists is dedicated to providing high-quality care through routine check-ups, cleanings, and treatments for common dental issues.</p>
          </div>
          <div className="gd-services">
            <h2>Our General Dentistry Services Include:</h2>
            <ul>
              <li>Regular dental check-ups and cleanings</li>
              <li>Fillings for cavities</li>
              <li>Root canal treatments</li>
              <li>Gum disease treatment</li>
              <li>Tooth extractions</li>
              <li>Preventive care and education</li>
            </ul>
          </div>
          <div className="gd-cta">
            <h2>Book Your Appointment</h2>
            <p>Ready to schedule your next dental check-up? Contact us today to book an appointment and keep your smile healthy.</p>
            <a href="#contact" className="btn btn-primary">Contact Us</a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default GeneralDentistry;
