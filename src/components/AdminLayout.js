import { Link, useLocation } from "react-router-dom";
import { supabase } from "../lib/supabase";
import "../styles/admin.css";

const AdminLayout = ({ children }) => {
  const location = useLocation();

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div className="admin-layout">
      <header className="admin-header">
        <div className="admin-header-inner">
          <div className="admin-header-left">
            <Link to="/admin" className="admin-brand">
              13th Disciple Admin
            </Link>

            <nav className="admin-nav">
              {/* <Link
                to="/admin"
                className={`admin-nav-link ${
                  location.pathname === "/admin" ? "active" : ""
                }`}
              >
                Dashboard
              </Link> */}

              {/* <Link
                to="/admin/events"
                className={`admin-nav-link ${
                  location.pathname === "/admin/events" ? "active" : ""
                }`}
              >
                Events
              </Link> */}
            </nav>
          </div>

          <button className="admin-logout-btn" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </header>

      <main className="admin-main">{children}</main>
    </div>
  );
};

export default AdminLayout;