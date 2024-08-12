import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTooth, faSmile, faXRay, faSyringe, faStethoscope, faHeartbeat } from '@fortawesome/free-solid-svg-icons';

const services = [
  { icon: faTooth, title: 'General Dentistry', description: 'Routine dental check-ups and treatments.', link: '/general-dentistry' },
  { icon: faSmile, title: 'Cosmetic Dentistry', description: 'Improving the appearance of your smile.', link: '/cosmetic-dentistry' },
  { icon: faXRay, title: 'X-Rays', description: 'Detailed imaging to diagnose dental issues.', link: '/x-rays' },
  { icon: faSyringe, title: 'Oral Surgery', description: 'Surgical procedures for complex dental problems.', link: '/oral-surgery' },
  { icon: faStethoscope, title: 'Orthodontics', description: 'Straightening teeth and correcting bites.', link: '/orthodontics' },
  { icon: faHeartbeat, title: 'Emergency Care', description: 'Immediate assistance for dental emergencies.', link: '/emergency-care' },
];

const OurServices = () => {
  return (
    <section id="services" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2>Our Services</h2>
          <p className="text-muted">We offer a variety of dental services to meet your needs.</p>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card shadow hover-shadow h-100 text-center">
                <div className="card-body d-flex flex-column">
                  <div className="mb-3">
                    <FontAwesomeIcon icon={service.icon} size="3x" className="text-primary" />
                  </div>
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text text-muted">{service.description}</p>
                  <div className="mt-auto">
                    <Link to={service.link} className="btn btn-primary">Learn More</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
