import { useState } from "react";
import { supabase } from "../lib/supabase";
import AdminLayout from "../components/AdminLayout";

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
        <AdminLayout>
            <section className="container py-6">
                <div style={{ maxWidth: "500px", margin: "0 auto" }}>
                    <h1 className="mb-4">Admin Login</h1>

                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
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

                        <div className="mb-3">
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

                        <button type="submit" disabled={loading}>
                            {loading ? "Logging in..." : "Log In"}
                        </button>
                    </form>

                    {message && <p className="mt-3">{message}</p>}
                </div>
            </section>
        </AdminLayout>
    );
};

export default AdminLoginScreen;