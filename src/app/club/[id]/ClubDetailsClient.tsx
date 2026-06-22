"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Club } from "@/data/mockData";
import { RegistrationModal } from "@/components/RegistrationModal";
import { ArrowLeft, MapPin, Calendar, Trophy, Image as ImageIcon, Video } from "lucide-react";
import Link from "next/link";

export function ClubDetailsClient({ club }: { club: Club }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background pb-24">
      <RegistrationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        clubName={club.name} 
      />

      {/* CLUB HERO SECTION */}
      <section className="relative h-[60vh] min-h-[500px] w-full flex items-end pb-16 pt-32 px-6 md:px-12">
        {/* Background Image with Parallax feel */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 z-0"
          style={{ backgroundImage: `url(${club.bannerImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-0" />
        
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <Link href="/" className="inline-flex items-center text-secondary hover:text-foreground mb-8 transition-colors group">
            <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} /> Back to Clubs
          </Link>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-6 mb-4">
              <span className="text-6xl md:text-7xl bg-white/50 p-4 rounded-2xl backdrop-blur-md border border-black/5 shadow-sm">
                {club.logo}
              </span>
              <div>
                <h1 className="text-5xl md:text-7xl font-extrabold text-foreground tracking-tight font-serif">{club.name}</h1>
                <p className="text-xl md:text-2xl text-primary font-medium mt-2">{club.motto}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* LEFT COLUMN: Main Content */}
        <div className="lg:col-span-2 space-y-16">
          
          {/* ABOUT CLUB */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-foreground border-b border-black/10 pb-4 font-serif">About Us</h2>
            <p className="text-secondary text-lg leading-relaxed mb-8">{club.fullDescription}</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-card p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-primary mb-3 font-serif">Our Vision</h3>
                <p className="text-secondary">{club.vision}</p>
              </div>
              <div className="glass-card p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-accent mb-3 font-serif">Our Mission</h3>
                <p className="text-secondary">{club.mission}</p>
              </div>
            </div>
          </section>

          {/* CLUB ACTIVITIES TIMELINE */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-foreground border-b border-black/10 pb-4 font-serif">What We Do</h2>
            <div className="space-y-6">
              {club.activities.map((activity, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 glass-card p-4 rounded-xl border-l-4 border-l-primary shadow-sm"
                >
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <p className="text-lg text-foreground">{activity}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ACHIEVEMENTS */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-foreground border-b border-black/10 pb-4 font-serif">Wall of Fame</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {club.achievements.map((achievement, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5 }}
                  className="glass-card p-6 rounded-2xl relative overflow-hidden"
                >
                  <Trophy className="absolute -right-4 -bottom-4 w-24 h-24 text-black/5" />
                  <span className="text-sm font-bold text-primary mb-2 inline-block">{achievement.year}</span>
                  <h3 className="text-xl font-bold text-foreground mb-2 font-serif">{achievement.title}</h3>
                  <p className="text-secondary">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* GALLERY */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-foreground border-b border-black/10 pb-4 font-serif">Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {club.gallery.map((item, index) => (
                <div key={index} className="aspect-square rounded-xl overflow-hidden relative group cursor-pointer border border-black/5">
                  {item.type === 'image' ? (
                    <img src={item.url} alt="Gallery item" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  ) : (
                    <video src={item.url} className="w-full h-full object-cover" muted loop autoPlay />
                  )}
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                    {item.type === 'image' ? <ImageIcon className="text-foreground" /> : <Video className="text-foreground" />}
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* RIGHT COLUMN: Sidebar (Coordinators & Events) */}
        <div className="space-y-8">
          
          {/* JOIN CTA */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="glass-card p-8 rounded-2xl text-center border-primary/30 shadow-md"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4 font-serif">Ready to Innovate?</h3>
            <p className="text-secondary mb-6">Join our community of passionate learners and creators.</p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-bold text-lg hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(217,119,6,0.3)]"
            >
              JOIN THIS CLUB
            </button>
          </motion.div>

          {/* COORDINATORS */}
          <div className="glass-card p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-foreground mb-6 font-serif">Leadership</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-secondary uppercase tracking-wider mb-4">Faculty Mentors</h4>
                <div className="space-y-4">
                  {club.facultyCoordinators.map((faculty, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <img src={faculty.photo} alt={faculty.name} className="w-12 h-12 rounded-full object-cover border border-black/10" />
                      <div>
                        <p className="text-foreground font-medium">{faculty.name}</p>
                        <p className="text-xs text-secondary">{faculty.designation}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-black/10">
                <h4 className="text-sm font-semibold text-secondary uppercase tracking-wider mb-4">Student Leads</h4>
                <div className="space-y-4">
                  {club.studentCoordinators.map((student, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <img src={student.photo} alt={student.name} className="w-12 h-12 rounded-full object-cover border border-black/10" />
                      <div>
                        <p className="text-foreground font-medium">{student.name}</p>
                        <p className="text-xs text-primary">{student.position}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* UPCOMING EVENTS */}
          <div className="glass-card p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-foreground mb-6 font-serif">Upcoming Events</h3>
            <div className="space-y-4">
              {club.upcomingEvents.map((event, i) => (
                <div key={i} className="p-4 rounded-xl bg-black/5 border border-black/5 hover:bg-black/10 transition-colors cursor-pointer">
                  <h4 className="text-foreground font-bold mb-2">{event.name}</h4>
                  <div className="flex items-center gap-2 text-sm text-secondary mb-1">
                    <Calendar size={14} className="text-primary" /> {event.date}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-secondary mb-3">
                    <MapPin size={14} className="text-accent" /> {event.venue}
                  </div>
                  <button className="text-xs font-semibold text-primary hover:text-accent transition-colors">
                    Register Now →
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
