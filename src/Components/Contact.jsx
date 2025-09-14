import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const ContactMe = () => {
  const form = useRef();
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pqpjh6d",    // Your EmailJS service ID (correct)
        "template_my2i90i",   // <-- Your actual EmailJS template ID from dashboard
        form.current,
        "lgfkZjIJhK3eg7CHn"   // Your EmailJS public key (correct)
      )
      .then(
        () => {
          setStatus({ success: true, message: "Message sent successfully!" });
          e.target.reset();
        },
        (error) => {
          setStatus({ success: false, message: "Failed to send message. Please try again." });
          console.error("EmailJS Error:", error.text);
        }
      );
  };

  return (
    <section 
      id="contact" 
      className="min-h-screen bg-gradient-to-b from-blue-900 via-purple-900 to-pink-800 px-6 py-16 flex flex-col items-center justify-center"
    >
      <motion.h2
        className="text-yellow-300 text-4xl md:text-5xl font-extrabold mb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Contact Me
      </motion.h2>

      <form 
        ref={form} 
        onSubmit={sendEmail} 
        className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl shadow-lg p-8 w-full max-w-lg"
      >
        <label className="block mb-4" htmlFor="user_name">
          <span className="text-yellow-400 font-semibold">Name</span>
          <input
            id="user_name"
            type="text"
            name="user_name"
            required
            className="mt-1 block w-full rounded-md bg-gray-900 border border-gray-600 px-3 py-2 text-white placeholder-gray-500 focus:border-pink-500 focus:ring focus:ring-pink-400 focus:ring-opacity-50"
            placeholder="Your full name"
          />
        </label>

        <label className="block mb-4" htmlFor="user_email">
          <span className="text-yellow-400 font-semibold">Email</span>
          <input
            id="user_email"
            type="email"
            name="user_email"
            required
            className="mt-1 block w-full rounded-md bg-gray-900 border border-gray-600 px-3 py-2 text-white placeholder-gray-500 focus:border-pink-500 focus:ring focus:ring-pink-400 focus:ring-opacity-50"
            placeholder="your.email@example.com"
          />
        </label>

        <label className="block mb-4" htmlFor="message">
          <span className="text-yellow-400 font-semibold">Message</span>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="mt-1 block w-full rounded-md bg-gray-900 border border-gray-600 px-3 py-2 text-white placeholder-gray-500 focus:border-pink-500 focus:ring focus:ring-pink-400 focus:ring-opacity-50"
            placeholder="Your message here"
          />
        </label>

        {status && (
          <p
            className={`mb-4 font-semibold ${
              status.success ? "text-green-400" : "text-red-400"
            }`}
            role="alert"
          >
            {status.message}
          </p>
        )}

        <button
          type="submit"
          className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 rounded-md transition"
          aria-label="Send message"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactMe;
