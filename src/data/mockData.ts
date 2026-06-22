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

export const CLUBS_DATA: Club[] = [
  {
    id: "coding-club",
    name: "Coding Club",
    motto: "Code • Create • Innovate",
    shortDescription: "A community for passionate programmers and developers.",
    fullDescription: "The Coding Club is dedicated to fostering a community of students who are passionate about programming, software development, and algorithmic problem solving. We conduct regular coding sessions, workshops, and hackathons to hone our skills and build innovative solutions.",
    vision: "To create a strong programming culture within the campus and produce top-tier software engineers.",
    mission: "To provide a collaborative platform for students to learn, practice, and excel in competitive programming and software development.",
    objectives: [
      "Improve algorithmic thinking and problem-solving skills.",
      "Conduct regular coding contests and hackathons.",
      "Facilitate peer-to-peer learning and mentorship."
    ],
    bannerImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
    logo: "💻",
    videoPreview: "https://videos.pexels.com/video-files/5473765/5473765-uhd_2560_1440_25fps.mp4",
    facultyCoordinators: [
      { name: "Dr. A. Sharma", designation: "Professor, CSE", contact: "sharma@sns.edu", photo: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop" }
    ],
    studentCoordinators: [
      { name: "Rahul Verma", position: "President", contact: "rahul@sns.edu", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop" },
      { name: "Priya Raj", position: "Vice President", contact: "priya@sns.edu", photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop" }
    ],
    activities: ["Weekly Code Sprints", "Open Source Contributions", "Tech Talks", "Annual Hackathon (CodeFest)"],
    achievements: [
      { title: "Winners at Smart India Hackathon", description: "Our team built an AI-driven healthcare solution.", year: "2023" },
      { title: "Top 100 in ICPC Regionals", description: "Secured top positions among prestigious institutions.", year: "2022" }
    ],
    upcomingEvents: [
      { name: "Intro to Web3 Workshop", date: "Oct 15, 2026", venue: "Lab 3, CS Block", description: "A beginner friendly workshop on blockchain and Web3." },
      { name: "AlgoRhythm Contest", date: "Oct 22, 2026", venue: "Online", description: "Monthly competitive programming contest." }
    ],
    gallery: [
      { url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format&fit=crop", type: 'image' },
      { url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&auto=format&fit=crop", type: 'image' }
    ]
  },
  {
    id: "robotics-club",
    name: "Robotics Club",
    motto: "Building the Future of Automation",
    shortDescription: "Design, build, and program autonomous robots.",
    fullDescription: "The Robotics Club brings together students interested in hardware, microcontrollers, and autonomous systems. From simple line-followers to advanced robotic arms, we build the future.",
    vision: "To be a center of excellence in robotics research and practical applications.",
    mission: "To impart practical knowledge in embedded systems, AI, and mechanical design to build intelligent machines.",
    objectives: [
      "Organize hands-on workshops on Arduino, Raspberry Pi, and ROS.",
      "Participate in national and international robotics competitions.",
      "Develop solutions for real-world automation challenges."
    ],
    bannerImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
    logo: "🤖",
    videoPreview: "https://videos.pexels.com/video-files/3206298/3206298-uhd_2560_1440_25fps.mp4",
    facultyCoordinators: [
      { name: "Dr. K. Iyer", designation: "HOD, Mechatronics", contact: "iyer@sns.edu", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop" }
    ],
    studentCoordinators: [
      { name: "Siddharth", position: "Lead Engineer", contact: "sid@sns.edu", photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop" }
    ],
    activities: ["Drone Building", "IoT Workshops", "Bot Wars"],
    achievements: [
      { title: "RoboWars Champions", description: "Secured 1st place in the national RoboWars event.", year: "2024" }
    ],
    upcomingEvents: [
      { name: "Arduino 101", date: "Nov 5, 2026", venue: "Mechatronics Lab", description: "Learn the basics of microcontrollers." }
    ],
    gallery: [
      { url: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500&auto=format&fit=crop", type: 'image' }
    ]
  },
  {
    id: "photography-club",
    name: "Photography Club",
    motto: "Capturing Moments, Telling Stories",
    shortDescription: "For those who view the world through a lens.",
    fullDescription: "A community of passionate photographers and videographers. We cover all major college events and organize photo walks and exhibitions.",
    vision: "To cultivate visual storytelling and artistic expression.",
    mission: "To provide a platform for aspiring photographers to learn techniques, share work, and gain exposure.",
    objectives: [
      "Conduct regular photo walks and excursions.",
      "Host workshops on lighting, editing, and composition.",
      "Document the vibrant life of the campus."
    ],
    bannerImage: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=1974&auto=format&fit=crop",
    logo: "📸",
    videoPreview: "https://videos.pexels.com/video-files/2823616/2823616-uhd_2560_1440_24fps.mp4",
    facultyCoordinators: [
      { name: "Mr. R. Nair", designation: "Asst. Professor, Media", contact: "nair@sns.edu", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop" }
    ],
    studentCoordinators: [
      { name: "Anjali M.", position: "Lead Photographer", contact: "anjali@sns.edu", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop" }
    ],
    activities: ["Campus Photo Walks", "Portrait Workshops", "Annual Exhibition"],
    achievements: [
      { title: "NatGeo Campus Feature", description: "Our club's photo was featured in a national magazine.", year: "2023" }
    ],
    upcomingEvents: [
      { name: "Golden Hour Walk", date: "Oct 20, 2026", venue: "Main Campus Grounds", description: "Practicing natural lighting techniques." }
    ],
    gallery: [
      { url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop", type: 'image' }
    ]
  },
  {
    id: "cultural-club",
    name: "Cultural Club",
    motto: "Celebrating Diversity through Art",
    shortDescription: "Dance, Music, Drama, and Arts.",
    fullDescription: "The heart of campus entertainment and art. The Cultural Club organizes the annual fest and provides a stage for dancers, musicians, and actors.",
    vision: "To keep the artistic spirit alive and thriving on campus.",
    mission: "To nurture talent and provide opportunities for students to showcase their artistic abilities.",
    objectives: [
      "Organize the annual cultural festival.",
      "Form official college dance and music teams.",
      "Host inter-departmental competitions."
    ],
    bannerImage: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop",
    logo: "🎭",
    videoPreview: "https://videos.pexels.com/video-files/2795750/2795750-uhd_2560_1440_25fps.mp4",
    facultyCoordinators: [
      { name: "Mrs. S. Gupta", designation: "Student Affairs", contact: "gupta@sns.edu", photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop" }
    ],
    studentCoordinators: [
      { name: "Karan", position: "Cultural Secretary", contact: "karan@sns.edu", photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop" }
    ],
    activities: ["Dance Battles", "Open Mic Nights", "Theatrical Plays"],
    achievements: [
      { title: "Best Dance Crew", description: "Won the state-level inter-college dance competition.", year: "2025" }
    ],
    upcomingEvents: [
      { name: "Acoustic Evening", date: "Nov 10, 2026", venue: "Open Air Theatre", description: "Unplugged music performances by students." }
    ],
    gallery: [
      { url: "https://images.unsplash.com/photo-1533174000220-400da59ae551?w=500&auto=format&fit=crop", type: 'image' }
    ]
  }
];

// Fallback data for other clubs to avoid errors
export const getClubById = (id: string) => {
  return CLUBS_DATA.find(club => club.id === id) || CLUBS_DATA[0]; // Returns Coding club as fallback if not found
}
