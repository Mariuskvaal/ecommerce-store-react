// src/pages/ContactPage.js
import React, { useState } from 'react';
import './pages.styling/ContactPage.css';  // Assuming you'll create a separate CSS file for styling

function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    subject: '',
    email: '',
    body: ''
  });

  const [errors, setErrors] = useState({});

  // Handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Full name must be at least 3 characters long';
    }
    if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters long';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (formData.body.trim().length < 3) {
      newErrors.body = 'Message must be at least 3 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent page refresh on form submit
    if (validateForm()) {
      console.log('Form submitted successfully:', formData);
      // Here, form data is logged once validation is successful
      alert('Form submitted successfully');
    }
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
          {errors.fullName && <p className="error">{errors.fullName}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
          />
          {errors.subject && <p className="error">{errors.subject}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="body">Message</label>
          <textarea
            id="body"
            name="body"
            value={formData.body}
            onChange={handleInputChange}
            rows="4"
            required
          />
          {errors.body && <p className="error">{errors.body}</p>}
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default ContactPage;

