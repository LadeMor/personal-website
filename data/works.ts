export type Work = {
  number: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  role: string;
  years: string;
  stack: string[];
  image: string;
  imageAlt: string;
  interfaceImages?: string[];
  interfaceDisplay?: "desktop" | "mobile";
  mobileScreens?: string[];
  overviewTitle: string;
  overviewText: string;
  roleItems: string[];
  interfaceCaptions: {
    title: string;
    description: string;
  }[];
};

export const workFilters = ["All", "Product", "Web", "Mobile", "Creative", "Games"];

const defaultInterfaceCaptions = [
  {
    title: "Request Creation",
    description: "Primary product interface for creating and submitting structured service requests.",
  },
  {
    title: "Mobile App",
    description: "Mobile experience for tracking requests, statuses, messages, and key updates.",
  },
  {
    title: "Chat Interface",
    description: "Conversation workflow between users, administrators, and service providers.",
  },
  {
    title: "Admin Panel",
    description: "Management dashboard for filtering requests, status updates, and operational review.",
  },
];

export const works: Work[] = [
  {
    number: "01",
    slug: "flamio",
    title: "FLAMIO",
    subtitle: "AI-powered UX testing and analysis platform",
    category: "Product / Web / Browser Extension",
    description:
      "AI-powered UX platform that identifies where digital products lose users, backs findings with evidence, and recommends what to fix next.",
    role: "Co-founder / Head of Frontend",
    years: "2024-2026",
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Chrome Extension",
      "AWS",
    ],
    image: "/images/works/flamio/cover.webp",
    imageAlt: "Flamio UX analysis dashboard and testing interface",
    interfaceImages: [
      "/images/works/flamio/cover.webp",
      "/images/works/flamio/interface-1.webp",
      "/images/works/flamio/interface-2.webp",
      "/images/works/flamio/interface-3.webp",
    ],

    overviewTitle:
      "An AI-powered UX testing and analysis platform built to identify where digital products lose users, prove why it happens, and turn those findings into actionable improvements.",

    overviewText:
      "Flamio combines multiple sources of user behaviour under one analysis engine. Teams can run autonomous AI testing with Scout, recruit human testers and analyse recorded sessions with Vision, monitor real production traffic with OnLive, and explore their project data through FlamiAI. Across every source, Flamio produces the same reporting language: evidence-backed findings that explain the problem, show where it occurs, provide proof, and suggest what to fix. I lead the frontend side of the product, including the main web interfaces, browser extension, analytics and administration experiences, and company website.",

    roleItems: [
      "Frontend architecture across Flamio web products",
      "UX testing and analytics dashboard interfaces",
      "Chrome extension for user session recording",
      "Flamio Vision testing and session review flows",
      "Flamio Scout AI testing interface",
      "OnLive analytics and monitoring experience",
      "FlamiAI dashboard interaction and data views",
      "Responsive product UI and reusable component system",
      "Company website and frontend deployment workflows",
    ],
    interfaceCaptions: defaultInterfaceCaptions,
  },

  {
    number: "02",
    slug: "service-quotation-app",
    title: "SERVICE QUOTATION APP",
    subtitle: "Mobile platform for home-service requests and estimates",
    category: "Product / Mobile / Full-stack",
    description:
      "A mobile platform where users can submit repair and renovation requests, estimate the scope of work, communicate with support, and get matched with service professionals.",

    role: "Full-stack / Mobile Developer",
    years: "2026",

    stack: [
      "React Native",
      "Expo",
      "TypeScript",
      "Node.js",
      "Prisma",
      "PostgreSQL",
      "AWS",
    ],

    image: "/images/works/service-quotation-app/cover-1.webp",
    imageAlt:
      "Service Quotation mobile application request, profile and communication screens",

    interfaceDisplay: "mobile",

    mobileScreens: [
      "/images/works/service-quotation-app/cover-1.webp",
      "/images/works/service-quotation-app/cover-2.webp",
      "/images/works/service-quotation-app/cover-3.webp",
    ],

    overviewTitle:
      "A full-service mobile platform that helps users turn a repair or renovation need into a structured request, estimated job scope, and connection with the right specialist.",

    overviewText:
      "Service Quotation App allows users to register, create detailed repair or renovation requests, go through a multi-step submission flow, attach relevant information, manage their profile, and communicate directly with administrators through in-app chat. The platform is designed to help customers describe the work they need, receive assistance with estimating the job, and connect with suitable service professionals. I was responsible for the full development lifecycle — from product and technical planning through implementation of the mobile application, backend, database and supporting web services, to production deployment, App Store and Google Play releases, and ongoing maintenance.",

    roleItems: [
      "Product and technical architecture from initial planning to production",
      "React Native / Expo mobile application development",
      "Authentication, onboarding and user account flows",
      "Multi-step repair and renovation request submission",
      "User profile and account settings",
      "In-app chat with administration",
      "Node.js backend API and business logic",
      "Prisma ORM and PostgreSQL database architecture",
      "Production deployment, App Store / Google Play release and ongoing maintenance",
    ],

    interfaceCaptions: defaultInterfaceCaptions,
  },

  {
    number: "03",
    slug: "home-service-quotation",
    title: "HOME SERVICE QUOTATION",
    subtitle: "Web platform, admin panel and product website",
    category: "Product / Web / Full-stack",

    description:
      "A web platform for creating and managing home-service requests, supported by an administration panel and a public-facing product website.",

    role: "Full-stack Developer",
    years: "2026",

    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Prisma",
      "PostgreSQL",
      "AWS",
      "WebSockets",
    ],

    image: "/images/works/service-quotation/cover.webp",
    interfaceImages: [
       "/images/works/service-quotation/cover.webp",
      "/images/works/service-quotation/interface-1.webp",
      "/images/works/service-quotation/interface-2.webp",
      "/images/works/service-quotation/interface-3.webp",
    ],
    imageAlt:
      "Home Service Quotation web platform, administration panel and marketing website",

    overviewTitle:
      "A complete web experience built around the same service-request platform as the mobile application, including customer flows, administration tools, and a public product website.",

    overviewText:
      "Home Service Quotation extends the service platform into the browser with a customer-facing web application, an administration panel, and a promotional website. Users can create and manage service requests through structured web flows, while administrators can review requests, users, conversations, and platform activity from a dedicated dashboard. The project shares the same backend and database foundation as the mobile application, while introducing a separate web interface and deployment flow. I was responsible for the web architecture, implementation of customer and admin interfaces, backend integration, deployment, and ongoing maintenance.",

    roleItems: [
      "Next.js customer-facing web application",
      "Administration dashboard and management tools",
      "Responsive service-request workflows",
      "Authentication and account management flows",
      "Shared backend and database integration",
      "Real-time messaging integration",
      "Public-facing promotional website",
      "Responsive UI and reusable component architecture",
      "Production deployment and ongoing maintenance",
    ],

    interfaceCaptions: defaultInterfaceCaptions,
  },

  {
    number: "04",
    slug: "gadget-promotion",
    title: "GADGET PROMOTION",
    subtitle: "Mobile giveaway platform for gadget promotions",
    category: "Product / Mobile / Full-stack",

    description:
      "A mobile platform where users can join free gadget giveaways, choose the campaigns they want to participate in, and follow participant lists and winner results.",

    role: "Full-stack / Mobile Product Developer",
    years: "2026",

    stack: [
      "React Native",
      "Expo",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
    ],

    image: "/images/works/gadget-promotion/cover-1.webp",
    imageAlt: "Gadget Promotion mobile giveaway application screens",

    interfaceDisplay: "mobile",

    mobileScreens: [
      "/images/works/gadget-promotion/cover-1.webp",
      "/images/works/gadget-promotion/cover-2.webp",
      "/images/works/gadget-promotion/cover-3.webp",
    ],

    overviewTitle:
      "A mobile giveaway platform built around simple participation flows, transparent campaign management, and automated winner selection.",

    overviewText:
      "Gadget Promotion allows users to browse active gadget giveaways, choose which promotions they want to join, view participant lists, and follow the results once a winner is selected. The platform also includes an administration panel for managing giveaways, participants, campaign state, and winner selection. I was responsible for the full development lifecycle, including product and technical planning, mobile application implementation, backend and database development, administration tools, deployment, and ongoing maintenance.",

    roleItems: [
      "Product and technical architecture from planning to production",
      "React Native / Expo mobile application development",
      "Giveaway discovery and participation flows",
      "Participant lists and campaign status views",
      "Automated winner selection logic",
      "Administration panel for giveaway management",
      "Backend API and application business logic",
      "Database architecture and data management",
      "Production deployment and ongoing maintenance",
    ],

    interfaceCaptions: defaultInterfaceCaptions,
  },

  {
    number: "05",
    slug: "artist-website",
    title: "ARTIST WEBSITE",
    subtitle: "CMS-powered portfolio for a visual artist",
    category: "Web / Creative / CMS",

    description:
      "A responsive multi-page portfolio website for a visual artist, featuring a CMS-managed body of work, project pages, and light and dark visual themes.",

    role: "Frontend Developer",
    years: "2026",

    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "CMS",
    ],

    image: "/images/works/artist-website/cover.webp",
    imageAlt: "Artist portfolio website with artwork gallery and editorial layout",
    interfaceImages: [
      "/images/works/artist-website/cover.webp",
      "/images/works/artist-website/interface-1.webp",
      "/images/works/artist-website/interface-2.webp",
    ],
    overviewTitle:
      "A flexible portfolio website built to let a visual artist present and manage her work through a clean editorial experience.",

    overviewText:
      "The website was designed as a multi-page portfolio for a visual artist, with a CMS powering the artwork and project content. Visitors can browse selected works, open dedicated project pages, and explore the portfolio across responsive desktop and mobile layouts. The interface also supports light and dark themes while preserving the same restrained editorial direction. I implemented the frontend architecture, CMS integration, reusable content components, responsive layouts, and theme switching.",

    roleItems: [
      "Next.js multi-page portfolio website",
      "CMS integration for artwork and project content",
      "Artwork listing and individual project pages",
      "Responsive desktop and mobile layouts",
      "Light and dark theme implementation",
      "Reusable editorial content components",
      "Dynamic content rendering from CMS data",
      "Image-focused gallery and portfolio presentation",
      "Production deployment and frontend maintenance",
    ],

    interfaceCaptions: defaultInterfaceCaptions,
  },

  // {
  //   number: "06",
  //   slug: "golden-standart-garage-doors",
  //   title: "GOLDEN STANDARD GARAGE DOORS",
  //   subtitle: "Service website for a California garage-door company",
  //   category: "Web / Business",
  //   description:
  //     "A responsive service website for a California garage-door company, designed to present its services clearly and convert local visitors into customer inquiries.",
  //   role: "Frontend Developer",
  //   years: "2026",
  //   stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  //   image: "/images/works/golden-standart-garage-doors/cover.png",
  //   imageAlt:
  //     "Golden Standard Garage Doors service website preview",

  //   overviewTitle:
  //     "A business website built to help California homeowners quickly understand available garage-door services and request professional assistance.",

  //   overviewText:
  //     "Golden Standard Garage Doors is a responsive marketing website for a garage-door installation and repair company operating in California. The site presents the company’s main services, service area, business advantages, and contact actions in a clear conversion-focused structure. I implemented the responsive frontend, reusable service sections, navigation, and customer inquiry flows.",

  //   roleItems: [
  //     "Next.js web application customer and admin views",
  //     "React Native / Expo mobile application",
  //     "Node.js backend API and endpoint design",
  //     "Prisma ORM and PostgreSQL database schema",
  //     "JWT authentication and role-based access logic",
  //     "Request creation and management workflows",
  //     "Real-time chat implementation",
  //     "Image upload pipeline with AWS S3",
  //     "Deployment infrastructure and CI configuration",
  //   ],
  //   interfaceCaptions: defaultInterfaceCaptions,
  // },
];
