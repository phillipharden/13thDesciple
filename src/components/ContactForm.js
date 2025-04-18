import { useState } from "react";
import "../styles/contactform.css";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  return submitted ? (
    <p>Thanks for reaching out!</p>
  ) : (
    <div className="container">
      <h1>Contact Us</h1>
      <form
        target="_blank"
        action="https://formsubmit.co/phillipharden78@gmail.com"
        method="POST"
        onSubmit={() => setSubmitted(true)}>
        <div className="form-group">
          <div className="form-row">
            <div className="col">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="col">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email Address"
                required
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <textarea
            placeholder="Your Message"
            className="form-control"
            name="message"
            rows="10"
            required></textarea>
        </div>
        <button type="submit" className="btn btn-lg btn-dark btn-block">
          Submit Form
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
