export const membershipsData = {
  disclaimer: "Pricing and promotional plans are subject to revision by CUTZ THE GYM management. Promotional offers and seasonal discounts are confirmed upon in-person consultation at the front desk.",
  packages: [
    {
      id: "monthly",
      name: "1 Month Access",
      tagline: "Short-Term Commitment / Trial",
      price: "₹3,499",
      period: "per month",
      isPopular: false,
      badge: "Flexible",
      description: "Ideal for visiting athletes and those looking to experience Pune's premier 10,000 SQFT facility before committing long term.",
      features: [
        "Full access to 10,000 SQFT training floor",
        "Free initial fitness & biomechanical assessment",
        "Air-conditioned premium workout arena",
        "Locker and shower facility access",
        "General trainer floor guidance",
        "Access to basic cardio & strength zones"
      ],
      notIncluded: [
        "Dedicated 1-on-1 personal trainer",
        "Customized diet & nutrition blueprint"
      ],
      terms: "Valid for 30 calendar days from activation date. Non-transferable.",
      ctaText: "Enquire for 1 Month",
      availability: "Open Enrolment"
    },
    {
      id: "quarterly",
      name: "3 Months Transformation",
      tagline: "Build Foundational Momentum",
      price: "₹7,999",
      period: "for 3 months",
      isPopular: false,
      badge: "Standard",
      description: "A disciplined 90-day phase designed to reboot metabolism, correct kinetic mechanics, and establish visible muscle development.",
      features: [
        "All 1 Month Access benefits included",
        "Comprehensive body composition metrics assessment",
        "Quarterly workout adjustment reviews",
        "Entry to group fitness workshops (Zumba / Yoga)",
        "Dedicated locker facility during sessions",
        "Priority guidance on floor biomechanics"
      ],
      notIncluded: [
        "Exclusive personal coach"
      ],
      terms: "Valid for 90 calendar days. 1 freeze window allowed up to 7 days.",
      ctaText: "Enquire for 3 Months",
      availability: "Open Enrolment"
    },
    {
      id: "half-yearly",
      name: "6 Months Evolution",
      tagline: "Serious Physical Restructuring",
      price: "₹11,999",
      period: "for 6 months",
      isPopular: false,
      badge: "Popular Value",
      description: "For athletes and dedicated lifters aiming for profound structural transformation, enhanced stamina, and solid aesthetic definition.",
      features: [
        "Full 10,000 SQFT arena access for 180 days",
        "Bi-weekly body fat and lean mass tracking",
        "Access to specialized group fitness (Dance, Zumba, Yoga)",
        "Complimentary nutrition planning session",
        "Freeze privilege up to 14 days",
        "Two complimentary guest passes for workout partners"
      ],
      notIncluded: [],
      terms: "Valid for 180 calendar days. Flexible renewal terms.",
      ctaText: "Enquire for 6 Months",
      availability: "Open Enrolment"
    },
    {
      id: "yearly",
      name: "12 Months Champion Tier",
      tagline: "The Ultimate Lifestyle Commitment",
      price: "₹12,499*",
      period: "for 1 full year",
      isPopular: true,
      badge: "Most Popular",
      note: "*Promotional placeholder reference (Previous Founder Offer: ₹12,499). Current seasonal rate to be verified at the desk.",
      description: "Our signature tier providing full, unrestricted access to the CUTZ THE GYM ecosystem. Train all year round under the atmosphere fostered by IFBB Pro Krishna Chauhan.",
      features: [
        "Full 365-day access to all 10,000 SQFT zones",
        "Complete personalized initial workout roadmap",
        "Complimentary dietary architecture consultation",
        "Unlimited group activities: Zumba, Dance & Yoga",
        "Full AC, modern sanitation, locker & shower access",
        "Free membership freeze privileges (up to 30 days)",
        "Championship member events & posing clinics",
        "Exclusive CUTZ THE GYM merchandise discount"
      ],
      notIncluded: [],
      terms: "Valid for 365 calendar days. Terms confirmed upon desk registration.",
      ctaText: "Enquire for Yearly Pass",
      availability: "Limited Slots Available"
    },
    {
      id: "personal-training",
      name: "Championship 1-on-1 PT",
      tagline: "Direct Mentorship Under IFBB Pro Standards",
      price: "Custom",
      period: "tailored program",
      isPopular: false,
      badge: "Elite VIP",
      description: "Intensive 1-on-1 personal coaching with customized bio-mechanical programming, continuous form supervision, and dietary tracking.",
      features: [
        "Dedicated certified personal coach by your side",
        "Workout plans formulated to IFBB championship standards",
        "Custom weekly nutrition & supplementation blueprints",
        "Strict posture, joint kinematics & injury-proofing",
        "Regular photographic & biometric progress audits",
        "Direct coach WhatsApp support & daily accountability"
      ],
      notIncluded: [],
      terms: "Package durations available in 12, 24, 36, or 48 personalized sessions.",
      ctaText: "Apply for 1-on-1 PT",
      availability: "By Consultation Only"
    }
  ],
  comparisonFeatures: [
    { name: "10,000 SQFT Arena Access", monthly: true, quarterly: true, halfYearly: true, yearly: true, pt: true },
    { name: "Full Air-Conditioned Training", monthly: true, quarterly: true, halfYearly: true, yearly: true, pt: true },
    { name: "Locker & Shower Facility", monthly: true, quarterly: true, halfYearly: true, yearly: true, pt: true },
    { name: "General Floor Trainer Guidance", monthly: true, quarterly: true, halfYearly: true, yearly: true, pt: true },
    { name: "Body Composition Analysis", monthly: false, quarterly: true, halfYearly: true, yearly: true, pt: true },
    { name: "Zumba, Dance & Yoga Sessions", monthly: false, quarterly: true, halfYearly: true, yearly: true, pt: true },
    { name: "Customized Diet Strategy", monthly: false, quarterly: false, halfYearly: true, yearly: true, pt: true },
    { name: "Membership Freeze Privilege", monthly: false, quarterly: "7 Days", halfYearly: "14 Days", yearly: "30 Days", pt: "Flexible" },
    { name: "Dedicated 1-on-1 Personal Coach", monthly: false, quarterly: false, halfYearly: false, yearly: false, pt: true }
  ]
};

