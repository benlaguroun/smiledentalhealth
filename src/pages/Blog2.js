import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTooth } from '@fortawesome/free-solid-svg-icons';
import './Blog2.css'; // Custom CSS file for Blog2
import Footer from '../components/Footer'; // Import Footer component
import SocialMedia from '../components/SocialMedia'; // Import SocialMedia component

const Blog2 = () => {
  return (
    <>
      <SocialMedia /> {/* Include the SocialMedia component */}
      <div className="blog2-container">
        <Container className="blog-post-container my-5">
          <div className="text-center mb-5">
            <h1 className="text-center blog-title">Benefits of Regular Dental Flossing</h1>
          </div>
          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faTooth} className="fa-icon animated-icon" />
            </div>
            <p>
              Regular dental flossing is an essential part of maintaining good oral hygiene. It helps remove plaque and food particles between teeth and under the gumline where toothbrushes can't reach. By doing so, it reduces the risk of cavities and gum disease, keeping your smile healthy and bright.
            </p>
          </div>
          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faTooth} className="fa-icon animated-icon" />
            </div>
            <p>
              Flossing also stimulates the gums, promoting healthy blood flow and reducing inflammation. This simple habit, when combined with brushing and regular dental check-ups, can make a significant difference in your overall dental health.
            </p>
          </div>
          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faTooth} className="fa-icon animated-icon" />
            </div>
            <p>
              Additionally, flossing helps prevent bad breath by removing debris that can cause odor. It is a critical step in oral care, ensuring that all areas of your mouth are clean and free of harmful bacteria.
            </p>
          </div>
          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faTooth} className="fa-icon animated-icon" />
            </div>
            <p>
              For best results, it's important to floss correctly and regularly. Using about 18 inches of floss, wind most of it around each middle finger, leaving an inch or two to work with. Gently slide the floss between your teeth and curve it around each tooth, rubbing it against the side in an up-and-down motion. Avoid snapping the floss, as it can injure the gums.
            </p>
          </div>
          <div className="blog-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faTooth} className="fa-icon animated-icon" />
            </div>
            <p>
              In conclusion, flossing is a crucial part of your daily oral hygiene routine. It complements brushing and helps maintain the overall health of your teeth and gums. Make it a habit to floss daily to enjoy a cleaner mouth, fresher breath, and a brighter smile.
            </p>
          </div>
        </Container>
      </div>
      <Footer /> {/* Include the Footer component */}
    </>
  );
};

export default Blog2;
