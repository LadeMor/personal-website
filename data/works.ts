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

const defaultRoleItems = [
    "Next.js web application customer and admin views",
    "React Native / Expo mobile application",
    "Node.js backend API and endpoint design",
    "Prisma ORM and PostgreSQL database schema",
    "JWT authentication and role-based access logic",
    "Request creation and management workflows",
    "Real-time chat implementation",
    "Image upload pipeline with AWS S3",
    "Deployment infrastructure and CI configuration",
];

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
        subtitle: "AI-powered UX analysis platform",
        category: "Product / Web",
        description: "AI-powered UX analysis platform helping product teams identify friction across real user flows.",
        role: "Frontend Lead / Product Engineer",
        years: "2024-2026",
        stack: ["Next.js", "TypeScript", "Chrome Extension", "Product UX"],
        image: "/images/works/flamio/cover.png",
        imageAlt: "Flamio work preview",
        overviewTitle: "An AI-powered UX analysis platform built to help product teams understand where users struggle, identify friction patterns, and turn session data into actionable product improvements.",
        overviewText: "Flamio is a product analytics and UX intelligence platform spanning a web dashboard, Chrome extension and session analysis workflows. It helps teams review real user behavior, surface friction points, and translate those insights into clearer product decisions.",
        roleItems: defaultRoleItems,
        interfaceCaptions: defaultInterfaceCaptions,
    },
    {
        number: "02",
        slug: "service-quotation-app",
        title: "SERVICE QUOTATION APP",
        subtitle: "Web and mobile service marketplace",
        category: "Product / Mobile",
        description: "Cross-platform service marketplace connecting customers, businesses and administrators through request and chat workflows.",
        role: "Full-stack Developer",
        years: "2023-2024",
        stack: ["Next.js", "React Native", "Node.js", "PostgreSQL", "AWS"],
        image: "/images/works/service-quotation-app/cover-1.png",
        imageAlt: "Service Quotation App mobile preview",
        interfaceDisplay: "mobile",
        mobileScreens: [
            "/images/works/service-quotation-app/cover-1.png",
            "/images/works/service-quotation-app/cover-2.png",
            "/images/works/service-quotation-app/cover-3.png",
        ],
        overviewTitle: "A cross-platform marketplace built to connect residential customers with vetted service businesses through a structured request, matching, and communication system.",
        overviewText: "Home Service Quotation is a full-stack product spanning a Next.js web application, a React Native mobile app, a Node.js backend, and AWS infrastructure. It manages the full lifecycle from customer request creation through business matching, real-time chat, and service confirmation consistently across both web and mobile.",
        roleItems: defaultRoleItems,
        interfaceCaptions: defaultInterfaceCaptions,
    },
    {
        number: "03",
        slug: "home-service-quotation",
        title: "HOME SERVICE QUOTATION",
        subtitle: "Web and mobile service marketplace",
        category: "Product / Web / Mobile",
        description: "Cross-platform service marketplace connecting customers, businesses and administrators through request and chat workflows.",
        role: "Full-stack Developer",
        years: "2023-2024",
        stack: ["Next.js", "React Native", "Node.js", "PostgreSQL", "AWS"],
        image: "/images/works/service-quotation/cover.png",
        imageAlt: "Home Service Quotation work preview",
        overviewTitle: "A cross-platform marketplace built to connect residential customers with vetted service businesses through a structured request, matching, and communication system.",
        overviewText: "Home Service Quotation is a full-stack product spanning a Next.js web application, a React Native mobile app, a Node.js backend, and AWS infrastructure. It manages the full lifecycle from customer request creation through business matching, real-time chat, and service confirmation consistently across both web and mobile.",
        roleItems: defaultRoleItems,
        interfaceCaptions: defaultInterfaceCaptions,
    },

    {
        number: "04",
        slug: "artist-website",
        title: "ABYSS BLOOM",
        subtitle: "Underwater action roguelite",
        category: "Games / Creative",
        description: "Dark underwater action prototype exploring atmosphere, combat rhythm and responsive top-down movement.",
        role: "Game Developer",
        years: "2026",
        stack: ["Unity", "C#", "2D"],
        image: "/images/works/artist-website/cover.png",
        imageAlt: "Abyss Bloom project preview",
        overviewTitle: "A dark underwater action prototype focused on atmosphere, combat rhythm, and responsive top-down movement in a strange deep-sea world.",
        overviewText: "Abyss Bloom explores a compact roguelite loop with movement, encounters, and environmental mood as the core design pillars. The prototype focuses on feel first: readable combat, visual atmosphere, and systems that can expand over time.",
        roleItems: defaultRoleItems,
        interfaceCaptions: defaultInterfaceCaptions,
    },
    {
        number: "05",
        slug: "gadget-promotion",
        title: "GADGET PROMOTION",
        subtitle: "Mobile product promotion app",
        category: "Mobile / Product",
        description: "Mobile app interface focused on gadget discovery, promotional product flows, and compact commerce-style presentation.",
        role: "Mobile Developer",
        years: "2026",
        stack: ["React Native", "Expo", "TypeScript"],
        image: "/images/works/gadget-promotion/cover-1.png",
        imageAlt: "Gadget Promotion mobile app preview",
        interfaceDisplay: "mobile",
        mobileScreens: [
            "/images/works/gadget-promotion/cover-1.png",
            "/images/works/gadget-promotion/cover-2.png",
            "/images/works/gadget-promotion/cover-3.png",
        ],
        overviewTitle: "A mobile product promotion interface designed to present gadgets clearly, guide users through discovery, and make featured products feel polished and easy to explore.",
        overviewText: "Gadget Promotion is a mobile app interface focused on compact product presentation, promotional hierarchy, and touch-first browsing patterns. The project explores how mobile screens can make product discovery feel focused, visual, and fast.",
        roleItems: defaultRoleItems,
        interfaceCaptions: defaultInterfaceCaptions,
    },
    {
        number: "06",
        slug: "golden-standart-garage-doors",
        title: "GOLDEN STANDART GARAGE DOORS",
        subtitle: "Interactive Three.js mini-game",
        category: "Creative / Games",
        description: "Interactive isometric cooking mini-game focused on playful timing, simple systems and tactile feedback.",
        role: "Creative Developer",
        years: "2026",
        stack: ["React", "Three.js", "Blender"],
        image: "/images/works/golden-standart-garage-doors/cover.png",
        imageAlt: "Golden Standart Garage Doors project preview",
        overviewTitle: "A playful interactive mini-game built around fast kitchen workflows, readable systems, and tactile feedback inside a compact isometric scene.",
        overviewText: "Tiny Kitchen explores how lightweight game loops can feel polished through timing, animation, and responsive interaction. The project combines Three.js rendering, simple order systems, and a stylized visual direction built for fast iteration.",
        roleItems: defaultRoleItems,
        interfaceCaptions: defaultInterfaceCaptions,
    },
];
