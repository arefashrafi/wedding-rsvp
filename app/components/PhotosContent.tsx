'use client';

import { motion } from 'motion/react';
import { AuroraBackground } from './ui/aurora-background';

export default function PhotosContent() {
  return (
      <div className="relative z-10 w-full h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-12 md:p-20 max-w-3xl"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
              className="mb-8"
            >
              <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
                <svg 
                  className="w-12 h-12 text-gray-400" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" 
                  />
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" 
                  />
                </svg>
              </div>
            </motion.div>
            
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
              Photos
            </h1>
            
            <div className="space-y-4">
              <p className="text-3xl md:text-4xl text-gray-600 font-light">
                Coming Soon
              </p>
              
              <p className="text-lg text-gray-500 max-w-lg mx-auto leading-relaxed">
                We can't wait to share our beautiful wedding photos with you. 
                Check back after the celebration!
              </p>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="mt-8 pt-8 border-t border-gray-200"
            >
              <p className="text-sm text-gray-400 uppercase tracking-wider">
                June 14, 2026
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
  );
}
