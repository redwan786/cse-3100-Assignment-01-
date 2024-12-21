import React, { useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");
  const [animateStatus, setAnimateStatus] = useState(false); // for animation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message || !formData.phone) {
      setFormStatus("Please fill out all fields.");
      return;
    }

    // Trigger the success message and animation
    setFormStatus("Thank you for your message. We will get back to you soon!");
    setAnimateStatus(true);

    // Clear the form data
    setFormData({ name: "", email: "", phone: "", message: "" });

    // Reset animation after 3 seconds
    setTimeout(() => setAnimateStatus(false), 3000);
  };

  return (
    <>
      <section className="text-center mt-4">
        <h2>Contact Us</h2>
        <p>Need help with cats or have an emergency? Reach out to us!</p>
      </section>

      <section className="contact-form-section mt-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="contact" className="form-label">
              Contact no.
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter your contact number"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-control"
              rows="5"
              placeholder="Write your message here"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>

        {formStatus && (
          <p className={`mt-3 success-message ${animateStatus ? "fade-in" : ""}`}>
            {formStatus}
          </p>
        )}
      </section>

      <section className="email-section mt-5">
        <h3>Contact via Email</h3>
        <p>If you'd prefer, you can also email us directly at:</p>
        <div className="email-addresses">
          <p>
            <strong>cat.emergency7@gmail.com</strong>
          </p>
        </div>
      </section>

      <style>
        {`
          .contact-form-section {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background: linear-gradient(135deg, #e3f2fd, #ffffff);
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }

          .form-label {
            font-weight: bold;
            color: #333;
          }

          .form-control {
            margin-bottom: 15px;
            border-radius: 8px;
            border: 1px solid #ccc;
            padding: 10px;
          }

          .btn-primary {
            background-color: #4caf50;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            transition: background-color 0.3s ease;
          }

          .btn-primary:hover {
            background-color: #45a049;
          }

          .success-message {
            color: #4caf50;
            font-weight: bold;
          }

          .fade-in {
            animation: fadeIn 1.5s ease-in-out;
          }

          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: translateY(10px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .email-section {
            text-align: center;
            background-color: #f9f9f9;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }

          .email-addresses {
            font-size: 1.2rem;
            color: #007bff;
          }
        `}
      </style>
    </>
  );
}

export default ContactUs;
