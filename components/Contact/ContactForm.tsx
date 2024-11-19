import { useState } from "react";
import { FaUser, FaEnvelope, FaPaperPlane } from "react-icons/fa";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    alert("Thank you for your message!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-xl backdrop-blur-lg border border-gray-700 hover:shadow-2xl transition-shadow"
    >
      <h2 className="text-4xl font-extrabold text-neon mb-6 text-center">Contact Me</h2>
      <div className="mb-6">
        <label htmlFor="name" className="block text-lg text-gray-300 mb-2">
          <FaUser className="inline-block mr-2 text-neon" />
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full px-6 py-3 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-neon"
          placeholder="Enter your name"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block text-lg text-gray-300 mb-2">
          <FaEnvelope className="inline-block mr-2 text-neon" />
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full px-6 py-3 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-neon"
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-lg text-gray-300 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          className="w-full px-6 py-3 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-neon"
          placeholder="Write your message..."
          rows={4}
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full flex items-center justify-center py-3 bg-gradient-to-r from-neon to-yellow-500 text-gray-900 font-bold rounded-lg shadow-md hover:scale-105 transition"
      >
        <FaPaperPlane className="mr-2" />
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;