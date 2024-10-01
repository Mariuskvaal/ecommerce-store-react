import React, { useState } from 'react';
import SuccessModal from '../Components/SuccessModal.js/SuccessModal'; // Import the modal component
import './pages.styling/ContactPage.css';
import '../pages/pages.styling/ContactPage.css';

function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    subject: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // State to control modal visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation (can be improved)
    if (formData.fullName && formData.subject && formData.email && formData.message) {
      setIsSubmitted(true); // Show the success modal
      console.log('Form submitted:', formData);
    } else {
      alert('Please fill out all fields.');
    }
  };

  const closeModal = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      subject: '',
      email: '',
      message: ''
    }); // Reset form after submission
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            minLength="3"
          />
        </label>
        <label>
          Subject:
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            minLength="3"
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            minLength="3"
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      {isSubmitted && <SuccessModal onClose={closeModal} />}
    </div>
  );
}

export default ContactPage;


