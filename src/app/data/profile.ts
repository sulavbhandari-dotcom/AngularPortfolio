// All portfolio content lives here. Edit this file to update the site.

export interface Experience {
  role: string;
  company: string;
  type: string;
  period: string;
  location: string;
  current?: boolean;
  highlights: string[];
}

export interface Service {
  title: string;
  body: string;
  icon: string;
}

export interface Project {
  name: string;
  url: string;
  summary: string;
  role: string;
  tags: string[];
  image?: string;
}

export const PROFILE = {
  name: 'Sulav Bhandari',
  headline: 'UI/UX Designer who codes',
  pitch: 'I design interfaces people love to use — and because I also engineer, every design is built to ship.',
  location: 'Kathmandu, Nepal',
  availability: 'Open to work · On-site · Hybrid · Remote',
  linkedin: 'https://www.linkedin.com/in/sulav-bhandari-395a79184/',
  github: 'https://github.com/sulavbhandari-dotcom',

  roles: ['UI/UX Designer', 'Product Designer', 'Design Engineer', 'Frontend Developer'],

  stats: [
    { value: '10+', label: 'Live products designed — e-commerce & public sector' },
    { value: '3', label: 'Core design tools — Figma, Photoshop & Illustrator' },
    { value: '100%', label: 'Dev-ready designs — built by a designer who codes' },
  ],

  about: [
    "I'm a UI/UX designer who designs with the build in mind.",
    'I turn ideas into clear, usable interfaces — from research and wireframes to polished UI and interactive prototypes in Figma, with Photoshop and Illustrator for visuals.',
    "My background as a software engineer across startups in Nepal and Australia means every design I hand over is realistic to build, easy for developers to pick up, and made to ship.",
  ],

  services: [
    {
      icon: '◆',
      title: 'UX Research & Wireframes',
      body: 'Understanding your users and mapping the flows that matter — so the structure is right before a single pixel is polished.',
    },
    {
      icon: '⌘',
      title: 'UI Design & Design Systems',
      body: 'Clean, consistent interfaces built on reusable components, type and colour — so the product stays coherent as it grows.',
    },
    {
      icon: '◎',
      title: 'Interactive Prototyping',
      body: 'Clickable Figma prototypes to test ideas with real people and align stakeholders before development starts.',
    },
    {
      icon: '✦',
      title: 'Design-to-Dev Handoff',
      body: "Specs, assets and components developers can actually use — I'm an engineer too, so nothing gets lost in translation.",
    },
  ] as Service[],

  projects: [
    {
      name: 'MM Silver',
      url: 'https://www.mmsilver.in',
      summary: 'A storefront for a silver jewellery brand, designed so product browsing feels calm and premium and the craftsmanship stays the focus.',
      role: 'UI/UX Design',
      tags: ['E-commerce', 'Web', 'Figma'],
    },
    {
      name: 'KMC SEEP Mela 2082',
      url: 'https://kmc.seepmela.com/',
      summary: "The event platform for Kathmandu Metropolitan City's SEEP Mela 2082: a clear, accessible interface that helps visitors and participants find what they need fast.",
      role: 'UI/UX Design',
      tags: ['Event Platform', 'Public Sector', 'Web'],
    },
    {
      name: 'DMS Lite',
      url: 'https://dmslite.bnl.com.np',
      summary: 'A lightweight distributor management system that turns orders, stock and dealer tracking into clear, fast dashboards for everyday sales and distribution teams.',
      role: 'UI/UX Design',
      tags: ['Web App', 'Dashboard', 'B2B'],
    },
  ] as Project[],

  experience: [
    {
      role: 'UI/UX Designer',
      company: 'Freelance',
      type: 'Self-employed',
      period: '2021 — Present',
      location: 'Kathmandu, Nepal · Remote',
      current: true,
      highlights: [
        'Designed the MM Silver storefront and the KMC SEEP Mela 2082 event platform, from wireframes to final UI',
        'Build user flows, UI kits and interactive prototypes in Figma, with visuals in Photoshop and Illustrator',
        'Hand off dev-ready designs that developers can build without guesswork',
      ],
    },
    {
      role: 'Designer',
      company: 'GDSC KIIT',
      type: 'Part-time',
      period: 'Oct 2022 — Oct 2024',
      location: 'India',
      highlights: [],
    },
    {
      role: 'Design Domain Lead',
      company: 'National Service Scheme',
      type: 'Part-time',
      period: 'Sep 2022 — Oct 2024',
      location: 'Bhubaneswar, Odisha, India',
      highlights: [],
    },
  ] as Experience[],

  education: {
    school: 'KIIT University',
    location: 'Bhubaneswar, India',
  },

  stack: [
    'Figma', 'Photoshop', 'Illustrator', 'UI / UX', 'Prototyping', 'Design Systems',
    '.NET', 'C#', 'ASP.NET Core', 'REST APIs', 'SQL', 'Cloud',
    'System Design', 'Angular', 'TypeScript', 'AI / ML', 'AR',
  ],

  sideQuest: 'Currently exploring an AR-based tourist guide for Nepal.',
};
