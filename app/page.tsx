"use client";
import RSVPForm from "./components/RSVPForm";
import ContactSection from "./components/ContactSection";
import { motion } from "motion/react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-center space-y-8 px-4"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900">
            Sueun & Aref
          </h1>
          <p className="text-xl md:text-2xl text-gray-600">
            We're getting married!
          </p>
          <a
            href="#rsvp"
            className="inline-block bg-gray-900 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            RSVP Now
          </a>
        </motion.div>
      </div>
      <RSVPForm />
      <ContactSection />
    </>
  );
}
