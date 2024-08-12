import React, { useEffect, useState } from 'react';
import './ScheduleButton.css';

const ScheduleButton = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <a href="/schedule" className={`schedule-button ${scrolled ? 'scrolled' : ''}`}>
      Schedule an Appointment
    </a>
  );
};

export default ScheduleButton;
