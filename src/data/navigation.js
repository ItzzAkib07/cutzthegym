export const navLinks = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/about" },
  { name: "FACILITIES", path: "/facilities" },
  { 
    name: "PROGRAMS", 
    path: "/programs",
    submenu: [
      { name: "Muscle Building", path: "/programs/muscle-building", desc: "Hypertrophy & anatomical muscle shaping" },
      { name: "Fat Loss & Conditioning", path: "/programs/fat-loss", desc: "High metabolic burn & shredded definition" },
      { name: "Strength Training", path: "/programs/strength-training", desc: "Power, endurance & foundational loading" },
      { name: "Body Composition", path: "/programs/body-composition", desc: "Lean mass optimization & re-composition" },
      { name: "Personal Training", path: "/programs/personal-training", desc: "1-on-1 IFBB championship methodology" },
      { name: "Personalized Diet Plans", path: "/programs/diet-plans", desc: "Customized macronutrient fueling" },
      { name: "Kids Activities", path: "/programs/kids-activities", desc: "Agility, coordination & motor skill fitness" },
      { name: "Dance & Aerobics", path: "/programs/dance", desc: "Rhythmic cardio & expressive movement" },
      { name: "Zumba Fitness", path: "/programs/zumba", desc: "Energetic group dance workout" },
      { name: "Yoga & Mindfulness", path: "/programs/yoga", desc: "Mobility, core balance & recovery" }
    ]
  },
  { name: "TRAINERS", path: "/trainers" },
  { name: "MEDIA", path: "/media" },
  { name: "GALLERY", path: "/gallery" },
  { name: "MEMBERSHIPS", path: "/memberships" },
  { name: "CONTACT", path: "/contact" }
];

export const secondaryNavLinks = [
  { name: "VIDEOS", path: "/videos" },
  { name: "TRANSFORMATIONS", path: "/transformations" },
  { name: "FAQ", path: "/faq" }
];

export const legalLinks = [
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Terms & Conditions", path: "/terms-and-conditions" }
];
