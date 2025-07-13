import React, { useState } from "react";
import axios from "axios";
import { useNotification } from "./Notification";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [form, setForm] = useState<ContactFormData>({ name: "", email: "", message: "" });
  const { showNotification } = useNotification();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/contact", form);
      showNotification("success", response.data.message);
      setForm({ name: "", email: "", message: "" });
    } catch {
      showNotification("error", "Failed to submit message");
    }
  };

  return (
    <div className="md:w-1/2">
      <form className="bg-white rounded-lg shadow-md p-8 " onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
          <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder="Your name" />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
          <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder="your.email@example.com" />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
          <textarea id="message" name="message" rows={5} value={form.message} onChange={handleChange} required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder="Your message"></textarea>
        </div>
        <button type="submit"
          className="w-full py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition duration-300">Send
          Message</button>
      </form>
    </div>
  );
};

export default ContactForm;