import React from "react";
import "./Contact.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Contact = () => {

  const sendEmail = async (e) => {
    e.preventDefault();

    // honeypot bot check
    if (e.target.website.value) return;

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const res = await fetch("/.netlify/functions/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.ok) {
        alert("Message sent successfully!");
        e.target.reset();
      } else {
        alert("Failed to send message.");
      }

    } catch (err) {
      alert("Error sending message.");
      console.error(err);
    }
  };

  return (
    <>
      <Navbar/>

      <main className="contact-page">
        <div className="contact-container">

          <h1 className="contact-title">Contact Us</h1>

          <p className="contact-description">
            Have questions or feedback? Feel free to reach out to us.
          </p>

          <div className="contact-content">

            <form onSubmit={sendEmail} className="contact-form">

              {/* Honeypot spam trap */}
              <input
                type="text"
                name="website"
                style={{ display: "none" }}
              />

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
              ></textarea>

              <button type="submit">Send Message</button>

            </form>

            <div className="contact-info">

              <h2>Get in Touch</h2>

              <p>Email: yagantispandana@gmail.com</p>
              <p>Location: India</p>

            </div>

          </div>

        </div>
      </main>

      <Footer/>
    </>
  );
};

export default Contact;