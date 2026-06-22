"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CinematicIntro } from "@/components/CinematicIntro";
import { CLUBS_DATA, Club } from "@/data/mockData";
import Link from "next/link";
import { ArrowRight, Users, Calendar, Award } from "lucide-react";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <AnimatePresence>
        {showIntro && (
          <CinematicIntro key="intro" onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!showIntro && (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full"
          >
            {/* HERO SECTION */}
            <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
              {/* Background Video/Particles */}
              <div className="absolute inset-0 z-0 opacity-20">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="object-cover w-full h-full"
                >
                  <source src="https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
              </div>

              <div className="z-10 text-center px-4 max-w-5xl">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-foreground font-serif">
                    SNS CLUBS <span className="text-gradient-primary">PORTAL</span>
                  </h1>
                  <p className="text-xl md:text-3xl text-secondary font-light mb-12 flex justify-center gap-4 md:gap-8 flex-wrap">
                    <span>Discover</span> <span className="text-primary">•</span>
                    <span>Learn</span> <span className="text-primary">•</span>
                    <span>Innovate</span> <span className="text-primary">•</span>
                    <span>Lead</span>
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <button className="px-8 py-4 rounded-full bg-foreground text-background font-semibold text-lg hover:bg-foreground/80 transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg">
                      Explore Clubs <ArrowRight size={20} />
                    </button>
                    <button className="px-8 py-4 rounded-full glass font-semibold text-lg text-foreground hover:bg-black/5 transition-all transform hover:scale-105">
                      Join a Club
                    </button>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* ABOUT SNS INSTITUTIONS SECTION */}
            <section className="py-24 px-6 md:px-12 relative z-10">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground font-serif">About SNS Institutions</h2>
                  <p className="text-secondary max-w-2xl mx-auto text-lg leading-relaxed">
                    At SNS Institutions, we believe in holistic development. Our clubs are the heartbeat of campus life, offering a vibrant ecosystem for students to explore their passions, build networks, and develop leadership skills outside the classroom.
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <StatCard icon={<Users size={32} />} value="15000+" label="Students" />
                  <StatCard icon={<Award size={32} />} value="20+" label="Clubs" />
                  <StatCard icon={<Calendar size={32} />} value="200+" label="Events Annually" />
                  <StatCard icon={<Users size={32} className="text-primary" />} value="5000+" label="Active Participants" />
                </div>
              </div>
            </section>

            {/* CLUBS SHOWCASE SECTION */}
            <section className="py-24 px-6 md:px-12 relative z-10">
              <div className="max-w-7xl mx-auto">
                <div className="flex items-end justify-between mb-16">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground font-serif">Discover Our Clubs</h2>
                    <p className="text-secondary text-lg">Find your tribe. Follow your passion.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {CLUBS_DATA.map((club) => (
                    <ClubCard key={club.id} club={club} />
                  ))}
                </div>
              </div>
            </section>

            {/* FOOTER */}
            <footer className="py-12 border-t border-black/10 text-center text-secondary">
              <p>© 2026 SNS Institutions. All rights reserved.</p>
            </footer>

          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

function StatCard({ icon, value, label }: { icon: React.ReactNode, value: string, label: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="glass-card p-8 rounded-2xl flex flex-col items-center justify-center text-center group"
    >
      <div className="mb-4 p-4 rounded-full bg-black/5 text-secondary group-hover:text-primary group-hover:bg-primary/10 transition-colors">
        {icon}
      </div>
      <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 font-serif">{value}</h3>
      <p className="text-secondary font-medium">{label}</p>
    </motion.div>
  );
}

function ClubCard({ club }: { club: Club }) {
  return (
    <Link href={`/club/${club.id}`}>
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="glass-card rounded-2xl overflow-hidden relative group cursor-pointer h-[400px] border border-black/5"
      >
        {/* Default Image Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 group-hover:opacity-0"
          style={{ backgroundImage: `url(${club.bannerImage})` }}
        />
        
        {/* Video Preview on Hover */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        >
          <source src={club.videoPreview} type="video/mp4" />
        </video>

        {/* Overlay Gradients - adjusted for light theme text legibility on hover vs static */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90 transition-opacity" />
        
        {/* Glowing Border Effect on Hover */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-2xl transition-colors duration-500 z-20 pointer-events-none" />
        
        <div className="absolute inset-0 p-8 flex flex-col justify-end z-10 text-white">
          <div className="flex items-center gap-4 mb-3">
            <span className="text-4xl bg-white/20 p-2 rounded-xl backdrop-blur-md">{club.logo}</span>
            <h3 className="text-2xl font-bold font-serif group-hover:text-primary transition-colors">{club.name}</h3>
          </div>
          <p className="text-white/80 line-clamp-2">{club.shortDescription}</p>
          
          <div className="mt-6 flex items-center text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            Explore Club <ArrowRight size={16} className="ml-2" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
