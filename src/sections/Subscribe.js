import AnimatedText from "../components/AnimatedText";
import "../styles/subscribe.css";
import { useForm, ValidationError } from "@formspree/react";

const Subscribe = () => {
  const [state, handleSubmit] = useForm("mzzekalb");

  return (
    <section className="subscribe">
        <div className="headline">
          <AnimatedText text="Stay Connected" />
        </div>
      
      <p>Get updates on new music, drops, and events.</p>

      {state.succeeded ? (
        <div className="subscribe-success">
          <h3>🔥 You're Locked In!</h3>
          <p>Thanks for subscribing. Stay tuned for new music and updates.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="subscribe-form">

          {/* Name */}
          <label className="sr-only" htmlFor="sub-name">Name</label>
          <input
            id="sub-name"
            type="text"
            name="name"
            placeholder="Your name"
            autoComplete="name"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          {/* Email */}
          <label className="sr-only" htmlFor="sub-email">Email</label>
          <input
            id="sub-email"
            type="email"
            name="email"
            placeholder="Your email"
            autoComplete="email"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          {/* Phone (commented out for now) */}
          {/*
          <label className="sr-only" htmlFor="sub-phone">Phone</label>
          <input
            id="sub-phone"
            type="tel"
            name="phone"
            placeholder="Phone (optional)"
            autoComplete="tel"
          />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} />
          */}

          <button type="submit" disabled={state.submitting}>
            {state.submitting ? "Sending..." : "Subscribe"}
          </button>
        </form>
      )}
    </section>
  );
};

export default Subscribe;