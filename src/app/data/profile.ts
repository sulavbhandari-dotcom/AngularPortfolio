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

export const PROFILE = {
  name: 'Sulav Bhandari',
  headline: 'Technical Build Partner',
  pitch: 'I help startups & SMEs ship scalable products — without the full-time cost.',
  location: 'Kathmandu, Nepal',
  availability: 'Open to work · On-site · Hybrid · Remote',
  linkedin: 'https://www.linkedin.com/in/sulav-bhandari-395a79184/',
  github: 'https://github.com/sulavbhandari-dotcom',

  roles: ['Fractional CTO', 'Technical Build Partner', 'AI Development Partner', '.NET Engineer'],

  stats: [
    { value: '10+', label: 'Business clients on POS & ERP modules' },
    { value: '−20%', label: 'System latency through API & schema design' },
    { value: '2', label: 'Countries of startups shipped — Nepal & Australia' },
  ],

  about: [
    'Founders hire me when they need a senior technical mind, but not a full-time CTO salary.',
    "Whether you're a non-technical founder trying to ship your first MVP, a growing startup that needs architectural decisions made right, or an established business needing a tech upgrade — I step in as your Fractional CTO or hands-on technical build partner.",
    "I've worked with early-stage startups across Nepal and Australia, delivered real products, and understand what it actually takes to go from idea to production.",
  ],

  services: [
    {
      icon: '◆',
      title: 'Product & Architecture Strategy',
      body: 'Getting the foundations right from day one — system design, data models and a roadmap that scales with the business.',
    },
    {
      icon: '⌘',
      title: 'Full-Stack Leadership',
      body: 'Hands-on development leadership across .NET, cloud and APIs. I write the code and set the bar for the team.',
    },
    {
      icon: '◎',
      title: 'Vendors, Hiring & Team Structure',
      body: 'Choosing the right partners, hiring the right engineers and shaping a team that ships without you babysitting it.',
    },
    {
      icon: '✦',
      title: 'Honest Technical Advice',
      body: 'Tech decisions aligned with your business goals — no buzzwords, no over-engineering, no vendor lock-in surprises.',
    },
  ] as Service[],

  experience: [
    {
      role: 'Co-Founder',
      company: 'Yeti Code Crew',
      type: 'Full-time',
      period: 'Jun 2025 — Present',
      location: 'Kathmandu, Nepal · On-site',
      current: true,
      highlights: [
        'Led backend architecture decisions for enterprise-grade POS and ERP modules serving 10+ business clients',
        'Designed scalable APIs and database schemas, reducing system latency by 20%',
        'Primary technical decision-maker for sprint planning and system design reviews',
      ],
    },
    {
      role: 'Software Engineer',
      company: 'Uranus Tech Nepal Pvt. Ltd.',
      type: 'Full-time',
      period: 'Apr 2025 — Present',
      location: 'Kathmandu, Nepal · On-site',
      current: true,
      highlights: [],
    },
    {
      role: 'Member',
      company: 'GDSC KIIT',
      type: 'Part-time',
      period: 'Oct 2022 — Oct 2024',
      location: 'India',
      highlights: [],
    },
    {
      role: 'Domain Lead',
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
    '.NET', 'C#', 'ASP.NET Core', 'REST APIs', 'SQL', 'Cloud',
    'System Design', 'Angular', 'TypeScript', 'AI / ML', 'AR', 'UI / UX',
  ],

  sideQuest: 'Currently exploring an AR-based tourist guide for Nepal.',
};
