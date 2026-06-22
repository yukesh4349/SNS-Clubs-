"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface CinematicIntroProps {
  onComplete: () => void;
}

export function CinematicIntro({ onComplete }: CinematicIntroProps) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Stage 0: Black screen -> Stage 1: SNS Logo fade in
    const timer1 = setTimeout(() => setStage(1), 500);
    // Stage 2: "SNS Institutions" text
    const timer2 = setTimeout(() => setStage(2), 1500);
    // Stage 3: Empowering...
    const timer3 = setTimeout(() => setStage(3), 2500);
    // Stage 4: "SNS CLUBS" Reveal
    const timer4 = setTimeout(() => setStage(4), 3500);
    // Complete
    const timer5 = setTimeout(() => onComplete(), 5000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white overflow-hidden"
    >
      {/* Skip Button */}
      <button
        onClick={onComplete}
        className="absolute top-8 right-8 px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors z-50 glass rounded-full"
      >
        Skip Intro
      </button>

      {/* Stage 1 & 2: SNS Logo and Name */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: stage >= 1 && stage < 4 ? 1 : 0, scale: stage >= 1 ? 1 : 0.9 }}
        transition={{ duration: 0.8 }}
        className="absolute flex flex-col items-center"
      >
        <div className="w-24 h-24 mb-6 rounded-full bg-gradient-to-tr from-primary to-secondary p-1">
          <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
            <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">SNS</span>
          </div>
        </div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: stage >= 2 ? 1 : 0, y: stage >= 2 ? 0 : 20 }}
          className="text-4xl md:text-5xl font-bold tracking-widest text-center"
        >
          SNS INSTITUTIONS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: stage >= 3 ? 1 : 0 }}
          className="mt-4 text-xl text-gray-400 font-light tracking-wide"
        >
          Empowering Innovation. Creating Leaders.
        </motion.p>
      </motion.div>

      {/* Stage 4: Cinematic Reveal of "SNS CLUBS" */}
      <motion.div
        initial={{ opacity: 0, scale: 1.5, filter: "blur(10px)" }}
        animate={{ 
          opacity: stage >= 4 ? 1 : 0, 
          scale: stage >= 4 ? 1 : 1.5,
          filter: stage >= 4 ? "blur(0px)" : "blur(10px)" 
        }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute flex items-center justify-center"
      >
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
          SNS CLUBS
        </h1>
        {/* Light streak effect */}
        {stage >= 4 && (
          <motion.div
            initial={{ left: "-100%" }}
            animate={{ left: "200%" }}
            transition={{ duration: 1.5, ease: "linear" }}
            className="absolute top-0 bottom-0 w-32 bg-white/20 skew-x-12 blur-xl"
          />
        )}
      </motion.div>

    </motion.div>
  );
}
