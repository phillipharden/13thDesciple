import { useState } from "react";
import { supabase } from "../lib/supabase";
import "../styles/admin.css";

const AdminLoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Logged in successfully.");
    }

    setLoading(false);
  };

  return (
    <section className="admin-login-page">
      <div className="admin-login-card">
        <div className="admin-login-heading">
          <p className="admin-login-kicker">13th Disciple Admin</p>
          <h1>Admin Login</h1>
          <p className="admin-login-subtext">
            Sign in to manage events, videos, and releases.
          </p>
        </div>

        <form onSubmit={handleLogin} className="admin-form">
          <div className="admin-form-group">
            <label htmlFor="admin-email">Email</label>
            <input
              id="admin-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              required
            />
          </div>

          <div className="admin-form-group">
            <label htmlFor="admin-password">Password</label>
            <input
              id="admin-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>

          <button type="submit" className="admin-btn admin-login-btn" disabled={loading}>
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>

        {message && <p className="admin-message">{message}</p>}
      </div>
    </section>
  );
};

export default AdminLoginScreen;