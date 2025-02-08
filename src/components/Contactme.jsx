import { useState } from "react";
import axios from "axios"; // Ensure this is at the top

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setStatus("Sending...");
      console.log("Axios:", axios); // Debugging line

      const response = await axios.post(
        "http://localhost:5000/send-email",
        formData
      );

      if (response.data.success) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Error sending message.");
      }
    } catch (error) {
      setStatus("Error sending message.");
      console.error(error);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-[500px] mx-auto">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-3 border rounded-md"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full p-3 border rounded-md"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="5"
          className="w-full p-3 border rounded-md"
          required
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-md"
        >
          Send Message
        </button>
      </form>

      {status && <p className="text-center mt-4">{status}</p>}
    </section>
  );
};

export default ContactMe;
