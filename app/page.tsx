"use client";
import { useState } from "react";
import RSVPForm from "./components/RSVPForm";
import ContactSection from "./components/ContactSection";
import { AuroraBackground } from "./components/ui/aurora-background";
import { motion } from "motion/react";
import { TextGenerateEffect } from "./components/ui/text-generate-effect";
import InformationContent from "./components/InformationContent";
 
export default function Home() {
  const [isVerified, setIsVerified] = useState(false);

  const scrollToRSVP = () => {
    const rsvpSection = document.getElementById('rsvp');
    if (rsvpSection) {
      const targetPosition = rsvpSection.offsetTop;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const duration = 1500; // 1.5 seconds
      let start: number | null = null;

      const easeInOutCubic = (t: number): number => {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      };

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOutCubic(progress);
        
        window.scrollTo(0, startPosition + distance * ease);
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }
  };

  return (
    <>
        <div className="relative z-10 text-center space-y-8 px-4 pt-16 min-h-screen flex flex-col items-center justify-center">
            <TextGenerateEffect className="text-6xl md:text-8xl font-bold text-gray-900 font-playfair italic" duration={0.75}
             words="Sueun & Aref" />
            <TextGenerateEffect className="text-xl md:text-2xl text-gray-600" 
            duration={1} words="We're getting married!" />
          <button
            onClick={scrollToRSVP}
            className="inline-block bg-gray-900 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            RSVP Now
          </button>
        </div>
      <RSVPForm onVerified={() => setIsVerified(true)} />
      {isVerified && <InformationContent />}
      <ContactSection />
    </>
  );
}
