"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function CinematicIntro({ onComplete }: { onComplete: () => void }) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const sequence = async () => {
      // Stage 0: Initial blank screen (0.5s)
      await new Promise((r) => setTimeout(r, 500));
      setStage(1); // Logo fade in
      
      await new Promise((r) => setTimeout(r, 1500));
      setStage(2); // Text sequence
      
      await new Promise((r) => setTimeout(r, 2000));
      setStage(3); // Fade out to main site
      
      await new Promise((r) => setTimeout(r, 1000));
      onComplete();
    };
    
    sequence();
  }, [onComplete]);

  return (
    <AnimatePresence>
      {stage < 3 && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FDF2E9]"
        >
          {/* Logo Reveal */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)", scale: 0.9 }}
            animate={{ 
              opacity: stage >= 1 ? 1 : 0, 
              filter: stage >= 1 ? "blur(0px)" : "blur(10px)",
              scale: stage >= 1 ? 1 : 0.9
            }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="mb-8"
          >
            <img 
              src="/sns-logo.png" 
              alt="SNS Institutions" 
              className="w-32 md:w-48 h-auto object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            {/* Fallback Text if Logo fails */}
            <div className="hidden w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-3xl font-bold text-primary">SNS</span>
            </div>
          </motion.div>

          {/* Text Reveal */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ 
              opacity: stage >= 2 ? 1 : 0, 
              y: stage >= 2 ? 0 : 10 
            }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-widest text-foreground font-serif mb-4">
              <span className="text-primary">SNS</span> CLUBS
            </h1>
            <p className="text-lg text-secondary tracking-widest uppercase font-light">
              Empowering Student Life
            </p>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
