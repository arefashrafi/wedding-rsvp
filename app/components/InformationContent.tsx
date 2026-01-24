'use client';

import { motion } from 'motion/react';
import { AuroraBackground } from './ui/aurora-background';
import { WobbleCard } from './ui/wobble-card';

export default function InformationContent() {
  return (
    <>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-24">


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* When & Where */}
          <WobbleCard containerClassName="col-span-1 lg:col-span-2 h-full bg-gradient-to-br from-pink-500 to-rose-500">
            <div className="max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                When & Where
              </h2>
              <div className="grid md:grid-cols-2 gap-6 text-white">
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-white/60 uppercase tracking-wider mb-1 font-semibold">Date</p>
                    <p className="text-xl font-bold">Saturday, June 14th, 2026</p>
                  </div>
                  <div>
                    <p className="text-xs text-white/60 uppercase tracking-wider mb-1 font-semibold">Time</p>
                    <p className="text-xl font-bold">4:00 PM - Ceremony</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-white/60 uppercase tracking-wider mb-1 font-semibold">Venue</p>
                    <p className="text-xl font-bold">[Venue Name]</p>
                  </div>
                  <div>
                    <p className="text-xs text-white/60 uppercase tracking-wider mb-1 font-semibold">Address</p>
                    <p className="text-base font-medium">[Street Address]</p>
                    <p className="text-base font-medium">[City, State ZIP]</p>
                  </div>
                </div>
              </div>
            </div>
          </WobbleCard>

          {/* Dress Code */}
          <WobbleCard containerClassName="col-span-1 h-full bg-gradient-to-br from-blue-500 to-cyan-500">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Dress Code
              </h2>
              <div className="text-white">
                <p className="text-lg font-bold mb-3">Semi-Formal / Cocktail Attire</p>
                <p className="text-sm text-white/90 leading-relaxed">
                  Suits and cocktail dresses are perfect, but feel free to express your style!
                </p>
              </div>
            </div>
          </WobbleCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Schedule */}
          <WobbleCard containerClassName="col-span-1 h-full bg-gradient-to-br from-violet-500 to-purple-500">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Schedule of Events
              </h2>
              <div className="space-y-4 text-white">
                <div className="flex gap-4 items-start">
                  <div className="min-w-[70px]">
                    <p className="text-base font-bold">4:00 PM</p>
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-base mb-1">Ceremony</p>
                    <p className="text-sm text-white/80">Exchange vows and celebrate our love</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="min-w-[70px]">
                    <p className="text-base font-bold">5:00 PM</p>
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-base mb-1">Cocktail Hour</p>
                    <p className="text-sm text-white/80">Drinks and hors d'oeuvres</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="min-w-[70px]">
                    <p className="text-base font-bold">6:00 PM</p>
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-base mb-1">Reception</p>
                    <p className="text-sm text-white/80">Dinner, toasts, and dancing until 11 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </WobbleCard>

          {/* Getting There */}
          <WobbleCard containerClassName="col-span-1 h-full bg-gradient-to-br from-emerald-500 to-teal-500">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Getting There
              </h2>
              <div className="space-y-4 text-white">
                <div>
                  <p className="font-bold text-base mb-2">Parking</p>
                  <p className="text-sm text-white/90 leading-relaxed">
                    Free parking available at the venue. Overflow parking at [nearby location].
                  </p>
                </div>
                <div>
                  <p className="font-bold text-base mb-2">Transportation</p>
                  <p className="text-sm text-white/90 leading-relaxed">
                    Rideshare services recommended. The venue is 15 minutes from downtown.
                  </p>
                </div>
              </div>
            </div>
          </WobbleCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Accommodations */}
          <WobbleCard containerClassName="col-span-1 lg:col-span-2 h-full bg-gradient-to-br from-amber-500 to-orange-500">
            <div className="max-w-5xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Accommodations
              </h2>
              <p className="text-sm text-white/90 mb-6">Room blocks reserved for your convenience:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-white/20">
                  <p className="text-lg font-bold text-white mb-2">[Hotel Name 1]</p>
                  <p className="text-sm text-white/90 mb-1">[Hotel Address]</p>
                  <p className="text-sm text-white/90 mb-3">[City, State ZIP]</p>
                  <p className="text-xs text-white bg-white/20 px-3 py-1.5 rounded-lg inline-block">
                    Code: <span className="font-bold">SUEUN-AREF</span>
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-white/20">
                  <p className="text-lg font-bold text-white mb-2">[Hotel Name 2]</p>
                  <p className="text-sm text-white/90 mb-1">[Hotel Address]</p>
                  <p className="text-sm text-white/90 mb-3">[City, State ZIP]</p>
                  <p className="text-xs text-white bg-white/20 px-3 py-1.5 rounded-lg inline-block">
                    Code: <span className="font-bold">JEON-ASHRAFI</span>
                  </p>
                </div>
              </div>
            </div>
          </WobbleCard>

          {/* Registry */}
          <WobbleCard containerClassName="col-span-1 h-full bg-gradient-to-br from-fuchsia-500 to-pink-500">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Registry
              </h2>
              <div className="text-white">
                <p className="text-sm text-white/90 mb-6 leading-relaxed">
                  Your presence is the greatest gift. However, if you wish to honor us with a gift:
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center px-5 py-2.5 bg-white text-gray-900 rounded-lg hover:bg-white/90 transition-colors font-bold text-sm"
                >
                  View Registry
                </a>
              </div>
            </div>
          </WobbleCard>
        </div>
      </div>
    </>
  );
}
