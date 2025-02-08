import { useState } from "react";
import axios from "axios";
import "./ContactPage.css"; // Import the CSS file

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    //setStatus("Sending...");

    try {
      const response = await axios.post(
        "https://portfoliobackend-1-hmmu.onrender.com/send-email",
        formData
      );

      if (response.data.success) {
        // setStatus("Message sent successfully! ✅");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message ❌");
      }
    } catch (error) {
      setStatus(error.message || "Error sending message ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-container">
      <h1 className="section-heading text-5xl font-bold text-blue-600">
        Contact
      </h1>
      <div className="contact-content">
        <div className="contact-left">
          <h1>
            Let's chat.
            <br />
            Have an idea? Let’s make it happen!
          </h1>
          <p className="gradient-text">Let's create something together ✨</p>
        </div>

        <div className="contact-form-container">
          <h2>Send us a message 🚀</h2>
          <br />
          {status && <p className="message">{status}</p>}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full name*"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email address*"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Send your message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? "Sending..." : "Send message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
