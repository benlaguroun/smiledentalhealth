// Schedule.js
import React from 'react';
import './Schedule.css'; // Import the CSS file for styling

const Schedule = () => {
  return (
    <div className="schedule-container">
      <h2>Schedule an Appointment</h2>
      <form className="schedule-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" required />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" required />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input type="time" id="time" name="time" required />
        </div>
        <button type="submit" className="btn-submit">Submit</button>
      </form>
    </div>
  );
};

export default Schedule;
