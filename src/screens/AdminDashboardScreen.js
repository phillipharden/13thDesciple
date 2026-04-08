import { Link } from "react-router-dom";
import AdminLayout from "../components/AdminLayout";
import "../styles/admin.css";

const AdminDashboardScreen = () => {
  return (
    <AdminLayout>
      <section className="admin-dashboard">
        <div className="admin-page-heading">
          <h2>Admin Dashboard</h2>
          <p>Welcome to the admin area.</p>
        </div>

        <div className="admin-grid">
          <Link to="/admin/events" className="admin-card">
            Manage Events
          </Link>

          <div className="admin-card disabled">
            Manage Video Carousel
          </div>

          <div className="admin-card disabled">
            Manage Newest Release
          </div>
        </div>
      </section>
    </AdminLayout>
  );
};

export default AdminDashboardScreen;