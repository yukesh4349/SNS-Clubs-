export interface Faculty {
  name: string;
  designation: string;
  contact: string;
  photo: string;
}

export interface StudentCoordinator {
  name: string;
  position: string;
  contact: string;
  photo: string;
}

export interface Event {
  name: string;
  date: string;
  venue: string;
  description: string;
}

export interface Achievement {
  title: string;
  description: string;
  year: string;
}

export interface Club {
  id: string;
  name: string;
  motto: string;
  shortDescription: string;
  fullDescription: string;
  vision: string;
  mission: string;
  objectives: string[];
  bannerImage: string;
  logo: string;
  videoPreview: string;
  facultyCoordinators: Faculty[];
  studentCoordinators: StudentCoordinator[];
  activities: string[];
  achievements: Achievement[];
  upcomingEvents: Event[];
  gallery: { url: string; type: 'image' | 'video' }[];
}

const defaultFaculty = [{ name: "Dr. Faculty Member", designation: "Club Coordinator", contact: "coordinator@sns.edu", photo: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop" }];
const defaultStudents = [{ name: "Student Lead", position: "President", contact: "president@sns.edu", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop" }];
const defaultGallery = [
  { url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format&fit=crop", type: 'image' as const },
  { url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&auto=format&fit=crop", type: 'image' as const }
];

export const CLUBS_DATA: Club[] = [
  {
    id: "rotaract", name: "Rotaract Club", motto: "Service Above Self", logo: "🤝",
    shortDescription: "A global community of young adults taking action for positive change.",
    fullDescription: "The Rotaract Club focuses on community service, leadership development, and international understanding.",
    vision: "To develop leaders who promote goodwill and peace.", mission: "Empowering youth to serve communities.",
    objectives: ["Community Service", "Professional Development", "Networking"],
    bannerImage: "https://images.unsplash.com/photo-1593113589914-07599019dd0c?q=80&w=2070&auto=format&fit=crop",
    videoPreview: "https://videos.pexels.com/video-files/5473765/5473765-uhd_2560_1440_25fps.mp4",
    facultyCoordinators: defaultFaculty, studentCoordinators: defaultStudents,
    activities: ["Blood Donation Camps", "Orphanage Visits", "Leadership Seminars"], achievements: [], upcomingEvents: [], gallery: defaultGallery
  },
  {
    id: "pets-club", name: "Pets club", motto: "Paws, Claws, and Love", logo: "🐾",
    shortDescription: "For animal lovers and pet enthusiasts.",
    fullDescription: "A community dedicated to the welfare, adoption, and celebration of our furry friends.",
    vision: "A compassionate campus for all animals.", mission: "To spread awareness about animal welfare.",
    objectives: ["Adoption Drives", "Animal Welfare Campaigns"],
    bannerImage: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?q=80&w=2086&auto=format&fit=crop",
    videoPreview: "https://videos.pexels.com/video-files/3206298/3206298-uhd_2560_1440_25fps.mp4",
    facultyCoordinators: defaultFaculty, studentCoordinators: defaultStudents,
    activities: ["Pet Shows", "Vaccination Drives"], achievements: [], upcomingEvents: [], gallery: defaultGallery
  },
  {
    id: "travel-trek", name: "Travel & Trek Club", motto: "Explore the Unseen", logo: "⛰️",
    shortDescription: "Adventure, exploration, and nature trekking.",
    fullDescription: "Organizing hikes, nature walks, and travel expeditions for thrill-seekers.",
    vision: "To foster a spirit of adventure.", mission: "Exploring nature responsibly.",
    objectives: ["Organize Treks", "Promote Eco-tourism"],
    bannerImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
    videoPreview: "https://videos.pexels.com/video-files/2823616/2823616-uhd_2560_1440_24fps.mp4",
    facultyCoordinators: defaultFaculty, studentCoordinators: defaultStudents,
    activities: ["Weekend Treks", "Camping Nights"], achievements: [], upcomingEvents: [], gallery: defaultGallery
  },
  {
    id: "gear-shifters", name: "Gear shifters Club", motto: "Driven by Passion", logo: "🏎️",
    shortDescription: "For automotive enthusiasts and mechanics.",
    fullDescription: "A hub for students passionate about cars, bikes, and automotive engineering.",
    vision: "To innovate in automotive design.", mission: "Learning through building.",
    objectives: ["Go-kart Building", "Auto Expos"],
    bannerImage: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2066&auto=format&fit=crop",
    videoPreview: "https://videos.pexels.com/video-files/2795750/2795750-uhd_2560_1440_25fps.mp4",
    facultyCoordinators: defaultFaculty, studentCoordinators: defaultStudents,
    activities: ["Auto Shows", "Mechanic Workshops"], achievements: [], upcomingEvents: [], gallery: defaultGallery
  },
  {
    id: "arts-with-hearts", name: "Arts with Hearts", motto: "Creativity with Compassion", logo: "🎨",
    shortDescription: "Using art to make a difference.",
    fullDescription: "A fine arts club focusing on painting, sketching, and using art for charity.",
    vision: "Art as a medium for change.", mission: "To bring color to lives.",
    objectives: ["Art Exhibitions", "Charity Auctions"],
    bannerImage: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=2080&auto=format&fit=crop",
    videoPreview: "https://videos.pexels.com/video-files/5473765/5473765-uhd_2560_1440_25fps.mp4",
    facultyCoordinators: defaultFaculty, studentCoordinators: defaultStudents,
    activities: ["Canvas Painting", "Art Auctions"], achievements: [], upcomingEvents: [], gallery: defaultGallery
  },
  {
    id: "santa-365", name: "Santa 365", motto: "Joy Every Day", logo: "🎅",
    shortDescription: "Spreading happiness and giving back year-round.",
    fullDescription: "A unique club dedicated to acts of kindness and organizing festive cheer throughout the year.",
    vision: "A campus filled with daily joy.", mission: "Making every day feel like a holiday through giving.",
    objectives: ["Surprise Gifts", "Community Relief"],
    bannerImage: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?q=80&w=2069&auto=format&fit=crop",
    videoPreview: "https://videos.pexels.com/video-files/3206298/3206298-uhd_2560_1440_25fps.mp4",
    facultyCoordinators: defaultFaculty, studentCoordinators: defaultStudents,
    activities: ["Gift Drives", "Smile Campaigns"], achievements: [], upcomingEvents: [], gallery: defaultGallery
  },
  {
    id: "robotics-club", name: "Robotics Club", motto: "Building the Future", logo: "🤖",
    shortDescription: "Design, build, and program autonomous robots.",
    fullDescription: "The Robotics Club brings together students interested in hardware, microcontrollers, and autonomous systems.",
    vision: "Center of excellence in robotics.", mission: "Practical knowledge in embedded systems.",
    objectives: ["Workshops", "Competitions"],
    bannerImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
    videoPreview: "https://videos.pexels.com/video-files/2823616/2823616-uhd_2560_1440_24fps.mp4",
    facultyCoordinators: defaultFaculty, studentCoordinators: defaultStudents,
    activities: ["Drone Building", "Bot Wars"], achievements: [], upcomingEvents: [], gallery: defaultGallery
  },
  {
    id: "toast-masters", name: "Toast Masters", motto: "Where Leaders Are Made", logo: "🎙️",
    shortDescription: "Improve public speaking and leadership skills.",
    fullDescription: "A supportive environment to practice public speaking, debate, and effective communication.",
    vision: "To empower students to become effective communicators.", mission: "Providing a mutually supportive learning environment.",
    objectives: ["Public Speaking", "Leadership Training"],
    bannerImage: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070&auto=format&fit=crop",
    videoPreview: "https://videos.pexels.com/video-files/2795750/2795750-uhd_2560_1440_25fps.mp4",
    facultyCoordinators: defaultFaculty, studentCoordinators: defaultStudents,
    activities: ["Debates", "Speech Contests"], achievements: [], upcomingEvents: [], gallery: defaultGallery
  },
  {
    id: "dance-club", name: "Dance Club-Feel the Beat", motto: "Rhythm in Every Step", logo: "💃",
    shortDescription: "Express yourself through dance and movement.",
    fullDescription: "From classical to hip-hop, the dance club is the heartbeat of cultural fests.",
    vision: "To celebrate diversity through dance.", mission: "Creating spectacular performances.",
    objectives: ["Choreography", "Inter-college Competitions"],
    bannerImage: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=2069&auto=format&fit=crop",
    videoPreview: "https://videos.pexels.com/video-files/5473765/5473765-uhd_2560_1440_25fps.mp4",
    facultyCoordinators: defaultFaculty, studentCoordinators: defaultStudents,
    activities: ["Flash Mobs", "Dance Battles"], achievements: [], upcomingEvents: [], gallery: defaultGallery
  },
  {
    id: "round-square", name: "Round Square Club", motto: "Holistic Development", logo: "🌍",
    shortDescription: "Fostering internationalism, democracy, and environmentalism.",
    fullDescription: "Based on the IDEALS (Internationalism, Democracy, Environmentalism, Adventure, Leadership, Service).",
    vision: "To build global citizens.", mission: "Promoting experiential learning.",
    objectives: ["Global Exchange", "Environmental Projects"],
    bannerImage: "https://images.unsplash.com/photo-1528605105345-5344ea20e269?q=80&w=2070&auto=format&fit=crop",
    videoPreview: "https://videos.pexels.com/video-files/3206298/3206298-uhd_2560_1440_25fps.mp4",
    facultyCoordinators: defaultFaculty, studentCoordinators: defaultStudents,
    activities: ["Model United Nations prep", "Sustainability drives"], achievements: [], upcomingEvents: [], gallery: defaultGallery
  },
  {
    id: "imun", name: "International Model United Nations", motto: "Diplomacy in Action", logo: "🏛️",
    shortDescription: "Debate global issues and diplomacy.",
    fullDescription: "Simulating UN committees to teach research, speaking, debating, and writing skills.",
    vision: "To nurture future diplomats.", mission: "Understanding international relations.",
    objectives: ["MUN Conferences", "Policy Debates"],
    bannerImage: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=2070&auto=format&fit=crop",
    videoPreview: "https://videos.pexels.com/video-files/2823616/2823616-uhd_2560_1440_24fps.mp4",
    facultyCoordinators: defaultFaculty, studentCoordinators: defaultStudents,
    activities: ["Mock UN Sessions", "Resolution Drafting"], achievements: [], upcomingEvents: [], gallery: defaultGallery
  },
  {
    id: "entrepreneur", name: "Young Entrepreneur Club", motto: "Innovate and Lead", logo: "💡",
    shortDescription: "Fostering startups and business acumen.",
    fullDescription: "A platform for aspiring founders to ideate, pitch, and build their businesses.",
    vision: "To create job creators, not seekers.", mission: "Supporting student startups.",
    objectives: ["Pitch Fests", "Business Mentoring"],
    bannerImage: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1974&auto=format&fit=crop",
    videoPreview: "https://videos.pexels.com/video-files/2795750/2795750-uhd_2560_1440_25fps.mp4",
    facultyCoordinators: defaultFaculty, studentCoordinators: defaultStudents,
    activities: ["Startup Weekend", "Investor Meets"], achievements: [], upcomingEvents: [], gallery: defaultGallery
  },
  {
    id: "foodies-hub", name: "Foodies Hub", motto: "Taste the World", logo: "🍔",
    shortDescription: "For culinary artists and food lovers.",
    fullDescription: "Exploring gastronomy, cooking techniques, and organizing food festivals.",
    vision: "To celebrate culinary arts.", mission: "Exploring diverse cuisines.",
    objectives: ["Cooking Competitions", "Food Drives"],
    bannerImage: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop",
    videoPreview: "https://videos.pexels.com/video-files/5473765/5473765-uhd_2560_1440_25fps.mp4",
    facultyCoordinators: defaultFaculty, studentCoordinators: defaultStudents,
    activities: ["Bake Sales", "Masterchef Campus"], achievements: [], upcomingEvents: [], gallery: defaultGallery
  },
  {
    id: "snapture", name: "Snapture (Photography club)", motto: "Capturing Moments", logo: "📸",
    shortDescription: "For those who view the world through a lens.",
    fullDescription: "A community of passionate photographers covering events and organizing exhibitions.",
    vision: "Visual storytelling.", mission: "Teaching photography skills.",
    objectives: ["Photo Walks", "Exhibitions"],
    bannerImage: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=1974&auto=format&fit=crop",
    videoPreview: "https://videos.pexels.com/video-files/3206298/3206298-uhd_2560_1440_25fps.mp4",
    facultyCoordinators: defaultFaculty, studentCoordinators: defaultStudents,
    activities: ["Campus Photo Walks", "Portrait Workshops"], achievements: [], upcomingEvents: [], gallery: defaultGallery
  },
  {
    id: "fashion-studio", name: "Fashion Studio Club", motto: "Style Meets Substance", logo: "👗",
    shortDescription: "Designing trends and organizing fashion shows.",
    fullDescription: "For students interested in fashion design, styling, and modeling.",
    vision: "To be at the forefront of campus fashion.", mission: "Encouraging self-expression through attire.",
    objectives: ["Fashion Shows", "Design Workshops"],
    bannerImage: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop",
    videoPreview: "https://videos.pexels.com/video-files/2823616/2823616-uhd_2560_1440_24fps.mp4",
    facultyCoordinators: defaultFaculty, studentCoordinators: defaultStudents,
    activities: ["Ramp Walks", "Sustainable Fashion Drives"], achievements: [], upcomingEvents: [], gallery: defaultGallery
  },
  {
    id: "women-empowerment", name: "Women Empowerment Club", motto: "Inspire and Elevate", logo: "👑",
    shortDescription: "Promoting gender equality and women's leadership.",
    fullDescription: "A safe space to discuss, advocate, and support women's rights and leadership on campus.",
    vision: "An equal and empowered society.", mission: "Supporting female students to achieve their potential.",
    objectives: ["Leadership Talks", "Self-defense Workshops"],
    bannerImage: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=2069&auto=format&fit=crop",
    videoPreview: "https://videos.pexels.com/video-files/2795750/2795750-uhd_2560_1440_25fps.mp4",
    facultyCoordinators: defaultFaculty, studentCoordinators: defaultStudents,
    activities: ["Mentorship Programs", "Panel Discussions"], achievements: [], upcomingEvents: [], gallery: defaultGallery
  },
  {
    id: "rhythm-lounge", name: "Rhythm Lounge(Music Club)", motto: "Harmony in Diversity", logo: "🎸",
    shortDescription: "Singers, instrumentalists, and music producers.",
    fullDescription: "The official college band and music community for all genres.",
    vision: "To create soul-stirring music.", mission: "Providing a platform for musical talent.",
    objectives: ["Jam Sessions", "Concerts"],
    bannerImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop",
    videoPreview: "https://videos.pexels.com/video-files/5473765/5473765-uhd_2560_1440_25fps.mp4",
    facultyCoordinators: defaultFaculty, studentCoordinators: defaultStudents,
    activities: ["Acoustic Nights", "Battle of Bands"], achievements: [], upcomingEvents: [], gallery: defaultGallery
  },
  {
    id: "aero-modelling", name: "Aero Modelling Club", motto: "Reach for the Skies", logo: "✈️",
    shortDescription: "Designing and flying RC aircraft.",
    fullDescription: "For aviation enthusiasts who want to build and fly remote-controlled planes and drones.",
    vision: "Innovating in aeronautics.", mission: "Hands-on experience with aerodynamics.",
    objectives: ["Aircraft Design", "Flight Testing"],
    bannerImage: "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2070&auto=format&fit=crop",
    videoPreview: "https://videos.pexels.com/video-files/3206298/3206298-uhd_2560_1440_25fps.mp4",
    facultyCoordinators: defaultFaculty, studentCoordinators: defaultStudents,
    activities: ["RC Plane Competitions", "Aerodynamics Workshops"], achievements: [], upcomingEvents: [], gallery: defaultGallery
  }
];

export const getClubById = (id: string) => {
  return CLUBS_DATA.find(club => club.id === id) || CLUBS_DATA[0];
}
