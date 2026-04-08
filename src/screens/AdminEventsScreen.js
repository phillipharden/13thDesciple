import { useEffect, useMemo, useState } from "react";
import { supabase } from "../lib/supabase";
import AdminLayout from "../components/AdminLayout";
import "../styles/admin.css";

const AdminEventsScreen = () => {
    const [events, setEvents] = useState([]);
    const [editingEvent, setEditingEvent] = useState(null);
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [buttonText, setButtonText] = useState("");
    const [buttonLink, setButtonLink] = useState("");
    const [posterFile, setPosterFile] = useState(null);
    const [message, setMessage] = useState("");
    const [saving, setSaving] = useState(false);

    const posterPreviewUrl = useMemo(() => {
        if (!posterFile) return "";
        return URL.createObjectURL(posterFile);
    }, [posterFile]);

    useEffect(() => {
        return () => {
            if (posterPreviewUrl) {
                URL.revokeObjectURL(posterPreviewUrl);
            }
        };
    }, [posterPreviewUrl]);

    const resetForm = () => {
        setEditingEvent(null);
        setTitle("");
        setDate("");
        setButtonText("");
        setButtonLink("");
        setPosterFile(null);
    };

    const fetchEvents = async () => {
        const { data, error } = await supabase
            .from("events")
            .select("*")
            .order("date", { ascending: true });

        if (error) {
            console.error("Error fetching events:", error);
            return;
        }

        setEvents(data || []);
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    const handleEdit = (event) => {
        setEditingEvent(event);
        setTitle(event.title || "");
        setDate(event.date || "");
        setButtonText(event.button_text || "");
        setButtonLink(event.button_link || "");
        setPosterFile(null);
        setMessage("");
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleDelete = async (event) => {
        const confirmDelete = window.confirm(`Delete "${event.title}"?`);
        if (!confirmDelete) return;

        setMessage("");

        if (event.poster_path) {
            const { error: storageError } = await supabase.storage
                .from("event-posters")
                .remove([event.poster_path]);

            if (storageError) {
                setMessage(storageError.message);
                return;
            }
        }

        const { error } = await supabase.from("events").delete().eq("id", event.id);

        if (error) {
            setMessage(error.message);
            return;
        }

        if (editingEvent?.id === event.id) {
            resetForm();
        }

        setMessage("Event deleted successfully.");
        fetchEvents();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);
        setMessage("");

        let posterUrl = editingEvent?.poster_url || "";
        let posterPath = editingEvent?.poster_path || "";

        if (posterFile) {
            const fileExt = posterFile.name.split(".").pop();
            const fileName = `${Date.now()}.${fileExt}`;
            const filePath = fileName;

            const { error: uploadError } = await supabase.storage
                .from("event-posters")
                .upload(filePath, posterFile);

            if (uploadError) {
                setMessage(uploadError.message);
                setSaving(false);
                return;
            }

            const { data } = supabase.storage
                .from("event-posters")
                .getPublicUrl(filePath);

            if (editingEvent?.poster_path) {
                await supabase.storage.from("event-posters").remove([editingEvent.poster_path]);
            }

            posterUrl = data.publicUrl;
            posterPath = filePath;
        }

        const payload = {
            title,
            date,
            poster_url: posterUrl || null,
            poster_path: posterPath || null,
            button_text: buttonText || null,
            button_link: buttonLink || null,
        };

        let error;

        if (editingEvent) {
            const result = await supabase
                .from("events")
                .update(payload)
                .eq("id", editingEvent.id);

            error = result.error;
        } else {
            const result = await supabase.from("events").insert([payload]);
            error = result.error;
        }

        if (error) {
            setMessage(error.message);
            setSaving(false);
            return;
        }

        resetForm();
        setMessage(editingEvent ? "Event updated successfully." : "Event added successfully.");
        setSaving(false);
        fetchEvents();
    };

    return (
        <AdminLayout>
            <section className="admin-events">
                <div className="admin-page-heading">
                    <h2>{editingEvent ? "Edit Event" : "Manage Events"}</h2>
                    <p>
                        {editingEvent
                            ? "Update the selected event."
                            : "Add, upload, and manage event flyers."}
                    </p>
                </div>

                <div className="admin-events-grid">
                    <div className="admin-panel">
                        <h3 className="admin-section-title">
                            {editingEvent ? "Editing Event" : "Add Event"}
                        </h3>

                        <form onSubmit={handleSubmit} className="admin-form">
                            <div className="admin-form-group">
                                <label htmlFor="event-title">Title</label>
                                <input
                                    id="event-title"
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="admin-form-group">
                                <label htmlFor="event-date">Date</label>
                                <input
                                    id="event-date"
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="admin-form-group">
                                <label>Poster</label>

                                <label className="admin-upload">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => setPosterFile(e.target.files?.[0] || null)}
                                        hidden
                                    />

                                    <div className="admin-upload-inner">
                                        <span className="admin-upload-btn">Upload Poster</span>

                                        <span className="admin-upload-file">
                                            {posterFile ? posterFile.name : "No file selected"}
                                        </span>
                                    </div>
                                </label>
                            </div>

                            {posterPreviewUrl && (
                                <div className="admin-upload-preview">
                                    <p className="admin-upload-preview-label">New Poster Preview</p>
                                    <img
                                        src={posterPreviewUrl}
                                        alt="Selected event poster preview"
                                        className="admin-upload-preview-img"
                                    />
                                </div>
                            )}

                            {!posterPreviewUrl && editingEvent?.poster_url && (
                                <div className="admin-upload-preview">
                                    <p className="admin-upload-preview-label">Current Poster</p>
                                    <img
                                        src={editingEvent.poster_url}
                                        alt={editingEvent.title}
                                        className="admin-upload-preview-img"
                                    />
                                </div>
                            )}

                            <div className="admin-form-group">
                                <label htmlFor="button-text">Button Text</label>
                                <input
                                    id="button-text"
                                    type="text"
                                    value={buttonText}
                                    onChange={(e) => setButtonText(e.target.value)}
                                    placeholder="Buy Tickets"
                                />
                            </div>

                            <div className="admin-form-group">
                                <label htmlFor="button-link">Button Link</label>
                                <input
                                    id="button-link"
                                    type="text"
                                    value={buttonLink}
                                    onChange={(e) => setButtonLink(e.target.value)}
                                    placeholder="https://..."
                                />
                            </div>

                            <div className="admin-event-actions">
                                <button type="submit" className="admin-btn" disabled={saving}>
                                    {saving
                                        ? "Saving..."
                                        : editingEvent
                                            ? "Update Event"
                                            : "Add Event"}
                                </button>

                                {editingEvent && (
                                    <button
                                        type="button"
                                        className="admin-secondary-btn"
                                        onClick={resetForm}
                                    >
                                        Cancel
                                    </button>
                                )}
                            </div>
                        </form>

                        {message && <p className="admin-message">{message}</p>}
                    </div>

                    <div className="admin-panel">
                        <h3 className="admin-section-title">Current Events</h3>

                        {events.length === 0 ? (
                            <p className="admin-empty-state">No events yet.</p>
                        ) : (
                            <div className="admin-events-list">
                                {events.map((event) => (
                                    <div key={event.id} className="admin-event-card">
                                        <div className="admin-event-card-content">
                                            <div className="admin-event-text">
                                                <h4>{event.title}</h4>
                                                <p className="admin-event-date">{event.date}</p>

                                                {event.button_text && event.button_link && (
                                                    <a
                                                        href={event.button_link}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="admin-event-link"
                                                    >
                                                        {event.button_text}
                                                    </a>
                                                )}
                                            </div>

                                            {event.poster_url && (
                                                <div className="admin-event-image-wrap">
                                                    <img src={event.poster_url} alt={event.title} />
                                                </div>
                                            )}
                                        </div>

                                        <div className="admin-event-actions">
                                            <button
                                                type="button"
                                                className="admin-secondary-btn"
                                                onClick={() => handleEdit(event)}
                                            >
                                                Edit
                                            </button>

                                            <button
                                                type="button"
                                                className="admin-delete-btn"
                                                onClick={() => handleDelete(event)}
                                            >
                                                Delete Event
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </AdminLayout>
    );
};

export default AdminEventsScreen;