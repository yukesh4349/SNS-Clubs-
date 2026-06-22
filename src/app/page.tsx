"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CinematicIntro } from "@/components/CinematicIntro";
import { RegistrationModal } from "@/components/RegistrationModal";
import { CLUBS_DATA, Club } from "@/data/mockData";
import Link from "next/link";
import { ArrowRight, Lightbulb, Target, Users } from "lucide-react";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden">
      <AnimatePresence>
        {showIntro && (
          <CinematicIntro key="intro" onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      <RegistrationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      <AnimatePresence>
        {!showIntro && (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full relative z-10"
          >
            {/* HEADER */}
            <header className="absolute top-0 left-0 w-full p-6 z-50 flex justify-between items-center">
              <div>
                {/* Fallback to text if sns-logo.png is not found, but we attempt to load the image */}
                <img 
                  src="/sns-logo.png" 
                  alt="SNS Institutions" 
                  className="h-12 w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden font-serif text-2xl font-bold tracking-widest text-foreground">
                  <span className="text-primary">SNS</span> INSTITUTIONS
                </div>
              </div>
              <div className="hidden md:flex gap-8 text-sm font-semibold tracking-widest text-foreground/80">
                <Link href="#about" className="hover:text-primary transition-colors">ABOUT</Link>
                <Link href="#clubs" className="hover:text-primary transition-colors">CLUBS</Link>
                <Link href="#contact" className="hover:text-primary transition-colors">CONTACT</Link>
              </div>
            </header>

            {/* HERO SECTION */}
            <section className="relative min-h-screen w-full flex flex-col items-center justify-center pt-24 pb-12">
              <div className="z-10 text-center px-4 max-w-5xl">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  <p className="text-sm font-semibold tracking-widest text-primary mb-6 uppercase">
                    Empowering Student Life
                  </p>
                  <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-6 text-foreground font-serif drop-shadow-sm">
                    SNS CLUBS <br className="hidden md:block"/> <span className="text-primary">PORTAL</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-foreground/70 font-light mb-12 max-w-3xl mx-auto leading-relaxed">
                    A vibrant community for students to discover their passions, learn new skills, innovate for the future, and lead with purpose.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
                    <Link href="#clubs">
                      <button className="w-full sm:w-auto px-10 py-4 rounded-full bg-foreground text-[#FFDCC2] font-semibold text-lg hover:bg-foreground/80 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 shadow-xl">
                        Explore Clubs <ArrowRight size={20} />
                      </button>
                    </Link>
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className="w-full sm:w-auto px-10 py-4 rounded-full bg-white/40 border border-foreground/10 font-semibold text-lg text-foreground hover:bg-white/60 transition-all transform hover:-translate-y-1 shadow-md backdrop-blur-sm"
                    >
                      Join a Club
                    </button>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* NEW ABOUT SECTION */}
            <section id="about" className="py-24 px-6 md:px-12 relative z-10 bg-white/20 backdrop-blur-md border-y border-foreground/5">
              <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
                
                {/* About SNS */}
                <div>
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground font-serif">About SNS Institutions</h2>
                  <p className="text-secondary text-lg leading-relaxed mb-6">
                    Established in 1997, SNS Institutions is a premier educational group in Coimbatore. 
                    We are pioneers in implementing a unique <strong>Design Thinking framework</strong> across our curriculum, 
                    fostering creativity, innovation, and an entrepreneurial mindset among students.
                  </p>
                  <p className="text-secondary text-lg leading-relaxed">
                    With top-tier autonomous colleges like SNS College of Technology (NAAC A++), our focus 
                    remains on Industry-Institute Partnerships, holistic student wellness, and developing 
                    practical skills to meet real-world industrial and social needs.
                  </p>
                </div>

                {/* Why Join a Club */}
                <div>
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground font-serif">Why Join a Club?</h2>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="mt-1 p-3 bg-primary/10 rounded-full text-primary h-fit">
                        <Lightbulb size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground font-serif mb-2">Holistic Development</h3>
                        <p className="text-secondary">Clubs offer a vibrant ecosystem to explore passions beyond academics, encouraging creative thinking and personal growth.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="mt-1 p-3 bg-primary/10 rounded-full text-primary h-fit">
                        <Users size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground font-serif mb-2">Networking & Collaboration</h3>
                        <p className="text-secondary">Connect with like-minded peers, experienced faculty mentors, and industry experts. Build relationships that last a lifetime.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="mt-1 p-3 bg-primary/10 rounded-full text-primary h-fit">
                        <Target size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground font-serif mb-2">Practical Leadership</h3>
                        <p className="text-secondary">Take charge of events, manage teams, and solve real challenges. Clubs are the ultimate training ground for future leaders.</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* CLUBS SHOWCASE SECTION */}
            <section id="clubs" className="py-24 px-6 md:px-12 relative z-10">
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
            <footer id="contact" className="py-16 bg-foreground text-[#FFDCC2] text-center border-t border-black/10">
              <div className="max-w-7xl mx-auto px-6">
                <img src="/sns-logo.png" alt="SNS Institutions" className="h-12 w-auto mx-auto mb-6 brightness-0 invert opacity-80" />
                <p className="mb-8 opacity-80 max-w-xl mx-auto">Empowering students through innovation, creativity, and leadership. Join a club today and be part of our vibrant community.</p>
                <div className="flex justify-center gap-6 mb-12 opacity-80">
                  <span className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</span>
                  <span className="hover:text-primary cursor-pointer transition-colors">Terms of Service</span>
                  <span className="hover:text-primary cursor-pointer transition-colors">Contact Us</span>
                </div>
                <p className="opacity-60 text-sm">© 2026 SNS Institutions. All rights reserved.</p>
              </div>
            </footer>

          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

function ClubCard({ club }: { club: Club }) {
  return (
    <Link href={`/club/${club.id}`}>
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="glass-card rounded-2xl overflow-hidden relative group cursor-pointer h-[400px] border border-black/5 bg-white/40"
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

        {/* Overlay Gradients */}
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
