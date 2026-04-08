import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./styles/App.css";
import "./styles/ShoeStrap.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import BackgroundVideo from "./components/BackgroundVideo";

import AdminDashboardScreen from "./screens/AdminDashboardScreen";
import AdminLoginScreen from "./screens/AdminLoginScreen";
import AdminEventsScreen from "./screens/AdminEventsScreen";


import { supabase } from "./lib/supabase";



const ProtectedAdminRoute = ({ session, children }) => {
  if (!session) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

const PublicSiteLayout = () => {
  return (
    <>
      <BackgroundVideo />
      <Header />
      <main>
        <HomeScreen />
      </main>
      <Footer />
    </>
  );
};

const App = () => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      setSession(session);
      setLoading(false);
    };

    getSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return <div className="container py-6">Loading...</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicSiteLayout />} />

        <Route
          path="/admin/login"
          element={
            session ? <Navigate to="/admin" replace /> : <AdminLoginScreen />
          }
        />

        <Route
          path="/admin"
          element={
            <ProtectedAdminRoute session={session}>
              <AdminDashboardScreen />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin/events"
          element={
            <ProtectedAdminRoute session={session}>
              <AdminEventsScreen />
            </ProtectedAdminRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
};

export default App;