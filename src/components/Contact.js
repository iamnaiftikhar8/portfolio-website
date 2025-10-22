import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
  name: '',
  email:'',
  message:''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted Successfully:', formData);
    alert('Thank you for your message! I will get back to you soon');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's work Together </h3>
            <p>I'm always interested in new opportunities and collaborations.</p>
            <div className="contact-details">
              <div className="contact-item">
                <strong>Email:</strong>
                <span>johnsmith@example.com</span>
              </div>
              <div className="contact-item">
                <strong>Phone:</strong>
                <span>+1 (555) 678-8724</span>
              </div>
              <div className="contact-item">
                <strong>Location:</strong>
                <span>New York, NY</span>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;