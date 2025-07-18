import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Us</h2>
      <p className="description">We'd love to hear from you! Reach out anytime.</p>
      <div className="contact-info">
        <p><strong>Email:</strong> hello@cozycoffee.com</p>
        <p><strong>Phone:</strong> +49 123 456 789</p>
        <p><strong>Location:</strong> Berlin, Germany</p>
      </div>
    </section>
  );
}
