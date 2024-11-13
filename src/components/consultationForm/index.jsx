import React, { useState } from 'react';
import './styles.css';

const ConsultationForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [specialist, setSpecialist] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const formData = {
      fullName,
      email,
      specialist
    };

    try {
      const response = await fetch('https://your-api-endpoint.com/appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Appointment request sent successfully!');
      } else {
        alert('Failed to send appointment request.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while sending the request.');
    }
  };

  return (
    <div className="consultation-form">
      <h2>Get Online Consultation</h2>
      <form onSubmit={handleSubmit}>
        <label>Full name</label>
        <input
          type="text"
          placeholder="Enter your full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />

        <label>Email address</label>
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Specialist</label>
        <input
          type="text"
          placeholder="Choose a specialist"
          value={specialist}
          onChange={(e) => setSpecialist(e.target.value)}
          className="specialist-input"
          required
        />

        <button type="submit">Make an appointment</button>
      </form>
    </div>
  );
};

export default ConsultationForm;
