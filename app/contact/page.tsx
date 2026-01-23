"use client";
import { motion } from "motion/react";
import Navbar from "../components/Navbar";
import { AuroraBackground } from "../components/ui/aurora-background";

export default function Contact() {
  const contactInfo = [
    {
      name: "Sueun",
      role: "Bride",
      email: "sueun@example.com",
      phone: "+1 (555) 123-4567",
      color: "bg-rose-500",
    },
    {
      name: "Sueun's Parents",
      role: "Bride's Family",
      email: "sueun.parents@example.com",
      phone: "+1 (555) 111-2222",
      color: "bg-pink-400",
    },
    {
      name: "Aref",
      role: "Groom",
      email: "aref@example.com",
      phone: "+1 (555) 987-6543",
      color: "bg-indigo-500",
    },
    {
      name: "Aref's Parents",
      role: "Groom's Family",
      email: "aref.parents@example.com",
      phone: "+1 (555) 999-8888",
      color: "bg-purple-400",
    },
  ];

  return (
    <>
      <Navbar />
      <AuroraBackground>
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Reach out to us with any questions or just to say hello.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {contactInfo.map((person, index) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className={`inline-block ${person.color} text-white px-4 py-1 rounded-full text-sm font-semibold mb-4`}>
                  {person.role}
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{person.name}</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Email</p>
                      <a href={`mailto:${person.email}`} className="text-gray-900 hover:text-gray-600 transition-colors font-medium">
                        {person.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Phone</p>
                      <a href={`tel:${person.phone.replace(/\s/g, '')}`} className="text-gray-900 hover:text-gray-600 transition-colors font-medium">
                        {person.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Back to home link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <a
              href="/"
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Back to Home</span>
            </a>
          </motion.div>
        </div>
      </AuroraBackground>
    </>
  );
}
