"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";
import { CLUBS_DATA } from "@/data/mockData";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  clubName?: string;
}

export function RegistrationModal({ isOpen, onClose, clubName }: RegistrationModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedClub, setSelectedClub] = useState(clubName || "");
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
        // Reset form state
        if (!clubName) setSelectedClub("");
      }, 3000);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-background relative w-full max-w-2xl rounded-2xl p-6 md:p-8 overflow-hidden z-10 max-h-[90vh] overflow-y-auto shadow-2xl border border-foreground/5"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/5 transition-colors text-secondary hover:text-foreground"
            >
              <X size={24} />
            </button>

            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                <CheckCircle2 size={64} className="text-green-500 mb-6" />
                <h3 className="text-3xl font-bold text-foreground mb-2 font-serif">Registration Submitted Successfully!</h3>
                <p className="text-secondary">Welcome to {selectedClub || "the club"}. We will contact you soon.</p>
              </motion.div>
            ) : (
              <>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-2 font-serif">
                    {clubName ? `Join ${clubName}` : "Join a Club"}
                  </h2>
                  <p className="text-secondary">Fill out the form below to become a member.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {!clubName && (
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Select Club *</label>
                      <select 
                        required 
                        value={selectedClub}
                        onChange={(e) => setSelectedClub(e.target.value)}
                        className="w-full bg-white/50 border border-foreground/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors appearance-none"
                      >
                        <option value="">-- Choose a Club --</option>
                        {CLUBS_DATA.map(c => (
                          <option key={c.id} value={c.name}>{c.name}</option>
                        ))}
                      </select>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Student Name *</label>
                      <input required type="text" className="w-full bg-white/50 border border-foreground/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Register Number *</label>
                      <input required type="text" className="w-full bg-white/50 border border-foreground/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="714021..." />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Department *</label>
                      <select required className="w-full bg-white/50 border border-foreground/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors appearance-none">
                        <option value="">Select Department</option>
                        <option value="CSE">CSE</option>
                        <option value="ECE">ECE</option>
                        <option value="IT">IT</option>
                        <option value="MECH">Mechanical</option>
                        <option value="CIVIL">Civil</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Year *</label>
                      <select required className="w-full bg-white/50 border border-foreground/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors appearance-none">
                        <option value="">Select Year</option>
                        <option value="1">1st Year</option>
                        <option value="2">2nd Year</option>
                        <option value="3">3rd Year</option>
                        <option value="4">4th Year</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Email Address *</label>
                      <input required type="email" className="w-full bg-white/50 border border-foreground/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="john@sns.edu" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Phone Number *</label>
                      <input required type="tel" className="w-full bg-white/50 border border-foreground/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="+91..." />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Why do you want to join this club? *</label>
                    <textarea required rows={4} className="w-full bg-white/50 border border-foreground/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors resize-none" placeholder="I am passionate about..."></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-bold text-lg hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center shadow-lg"
                  >
                    {isSubmitting ? (
                      <span className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></span>
                    ) : (
                      "Submit Registration"
                    )}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
