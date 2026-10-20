import { CodeXml, ShoppingCart, Layers3, Smartphone, Database, Wrench, Shapes, ShieldCheck, Users, Award, MessageCircle, BarChart, Store, ToyBrick, Workflow, CreditCard, ShoppingBag, LineChart, Shield, GitBranch, Laptop, Component, Languages, Milestone, Server, Users2, FileText, Activity, AlertCircle, TrendingUp, MapPin, Car, Home, BookOpen, Scale, HeartPulse, Truck, Plane, MessageSquare, ChefHat, Dumbbell, Apple, DraftingCompass, Puzzle, RefreshCw, GraduationCap, Ship, Warehouse, Building2 } from 'lucide-react';

export const services = [
  {
    title: 'E-Commerce Excellence',
    link: '/services/e-commerce-development'
  },
  {
    title: 'Mobile App Innovation',
    link: '/services/mobile-application-development'
  },
  {
    title: 'Enterprise ERP SaaS',
    link: '/services/erp-saas-development'
  },
  {
    title: 'Expert Odoo Customization',
    link: '/services/odoo-development'
  },
  {
    title: 'Technical Support & Ops',
    link: '/services/technical-support'
  },
  {
    title: 'Custom Engineering',
    link: '/services/customized-development'
  }
];

export const serviceDetails = [
    {
        icon: ShoppingCart,
        title: 'E-commerce Website Development',
        link: '/services/e-commerce-development',
        description: 'Drive revenue with conversion-optimized storefronts. We build high-performance e-commerce platforms that combine aesthetic appeal with seamless transactional efficiency, ensuring a frictionless journey for your customers.',
        features: [
            'Secure multi-gateway payment integration',
            'Conversion-driven UI/UX frameworks',
            'Mobile-first responsive architectures',
            'Scalable cloud-ready performance'
        ]
    },
    {
        icon: Smartphone,
        title: 'Mobile Application Development',
        link: '/services/mobile-application-development',
        description: 'Put your brand in your customers\' pockets. Our engineering team builds native and cross-platform mobile apps that prioritize user engagement, reliability, and smooth animations.',
        features: [
            'Native iOS and Android excellence',
            'Fluid, high-performance user interfaces',
            'Future-proofed scalable architecture',
            'Robust API and backend orchestration'
        ]
    },
    {
        icon: Layers3,
        title: 'ERP SaaS Development',
        link: '/services/erp-saas-development',
        description: 'Centralize control and unlock operational clarity. Our custom ERP solutions provide a unified dashboard for your business, automating workflows and surfacing real-time business intelligence.',
        features: [
            'Intelligent real-time analytics',
            'Automated inventory & resource planning',
            'Seamless cross-departmental integration',
            'Enterprise-grade cloud security'
        ]
    },
    {
        icon: Database,
        title: 'Odoo Development & Customization',
        link: '/services/odoo-development',
        description: 'Tailor the world\'s most powerful ERP to your unique needs. We specialize in deep Odoo customizations, ensuring your business logic is perfectly mirrored in your digital workspace.',
        features: [
            'Bespoke Odoo module engineering',
            'Seamless third-party ecosystem syncing',
            'Performance-tuned Odoo frameworks',
            'Expert migration and version upgrades'
        ]
    },
    {
        icon: ShieldCheck,
        title: 'Technical Support & Maintenance',
        link: '/services/technical-support',
        description: 'Ensure 99.9% uptime and peak system performance. Our proactive maintenance teams provide the security and stability your business depends on, 24/7.',
        features: [
          'Proactive infrastructure monitoring',
          'SLA-backed rapid incident response',
          'Automated security patch cycles',
          'End-to-end performance auditing'
        ]
    },
    {
        icon: Shapes,
        title: 'Customized Development Solutions',
        link: '/services/customized-development',
        description: 'Solve complex challenges with surgical precision. When off-the-shelf software fails, we engineer custom solutions designed specifically for your competitive advantage.',
        features: [
            'Surgical alignment with business logic',
            'Expert-led engineering squads',
            'Growth-centric modular designs',
            'Full-lifecycle product management'
        ]
    }
];

export const serviceSegments = [
    {
      title: "Core Engineering Services",
      services: [
        serviceDetails[0],
        serviceDetails[1],
        serviceDetails[2],
        serviceDetails[5],
      ]
    },
    {
      title: "Enterprise & Operations",
      services: [
        serviceDetails[4],
        serviceDetails[3],
      ]
    }
  ];

export const whyPartnerWithUs = [
    {
        icon: Users,
        title: 'Expert Engineering',
        description: 'Our team comprises senior developers with a track record of delivering high-stakes enterprise projects.'
    },
    {
        icon: Award,
        title: 'Outcome-Driven Strategy',
        description: 'We don\'t just write code; we build digital assets designed to meet your specific business objectives.'
    },
    {
        icon: MessageCircle,
        title: 'Radical Transparency',
        description: 'Experience real-time collaboration with open communication channels and frequent progress reporting.'
    },
    {
        icon: BarChart,
        title: 'Scalability Focused',
        description: 'We architect for your future, ensuring your digital foundation supports exponential growth.'
    }
];

export const projects = [
  {
    name: "Radhika Saree - Enterprise Inventory",
    description: "A comprehensive digital transformation for a leading textile retailer, automating stock tracking and reducing operational overhead by 40% through custom inventory logic.",
    category: "Web",
    url: "https://radhika.mamtacollege.in/",
    image: '1',
    icon: Warehouse,
  },
  {
    name: "Hotel Soni Arena - Hospitality Platform",
    description: "A sleek, conversion-optimized booking platform that showcases premium hospitality services with an emphasis on user experience and direct reservations.",
    category: "Web",
    url: "https://soniarenahotel.com/",
    image: '2',
    icon: Building2,
  },
  {
    name: "DVR Global - Career Logistics",
    description: "An industry-leading career management portal specializing in training and placement for the global maritime and industrial sectors.",
    category: "Web",
    url: "https://www.dvrglobalcareer.com/",
    image: '1',
    icon: GraduationCap,
  },
  {
    name: "Bluewhale Marine - Mariner Portal",
    description: "A professional maritime education hub providing critical transparency and resources for merchant navy aspirants and global ship management companies.",
    category: "Web",
    url: "https://bluewhalemarinecareer.in/",
    image: '1',
    icon: Ship,
  },
  {
    name: "DK Appliance Repair Hub",
    description: "A localized service platform designed for high conversion and lead generation within the household appliance maintenance sector.",
    category: "Free Initiative",
    url: "https://dkappliance.vercel.app/",
    image: '2',
    icon: Wrench,
  },
  {
    name: "Akash Safety - E-Catalog",
    description: "Bridging the gap between industrial safety needs and professional netting solutions through a clear, trust-focused informative website.",
    category: "Free Initiative",
    url: "https://akashsaftynet.vercel.app/",
    image: '15',
    icon: ShieldCheck,
  },
  {
    name: "Shri Balaji - Construction Showcase",
    description: "Highlighting architectural excellence and civil engineering expertise for a premier residential and commercial contractor.",
    category: "Free Initiative",
    url: "https://shribalajicontractor.vercel.app/",
    image: '17',
    icon: Home,
  },
  {
    name: "NearMeR - Hyperlocal Services",
    description: "A sophisticated geo-location platform connecting users with local service providers through advanced filtering and real-time mapping.",
    category: "Web",
    url: "https://nearmerv.com/",
    image: '1',
    icon: MapPin,
  },
  {
    name: "TipTop Ride - Mobility SaaS",
    description: "A full-scale ride-hailing ecosystem featuring real-time driver GPS tracking, secure mobile payments, and enterprise-grade dispatch logic.",
    category: "App",
    url: "https://apps.apple.com/in/app/tiptop-ride/id6739037902",
    image: '2',
    icon: Car,
  },
  {
    name: "OmaShram - Social Impact Platform",
    description: "An accessible and dignified platform for senior care, facilitating donations and community engagement for a specialized care facility.",
    category: "Web",
    url: "https://www.omashram.com/",
    image: '13',
    icon: Home,
  },
  {
    name: "PostmortemShala - EdTech LMS",
    description: "A robust learning management system delivering structured courses and automated certification for specialized academic sectors.",
    category: "Web",
    url: "https://www.postmortemshala.co.in/",
    image: '14',
    icon: BookOpen,
  },
  {
    name: "Technique Loss Adjusters - InsurTech",
    description: "Streamlining insurance claims processing through a secure platform built for complex audit documentation and loss assessment workflows.",
    category: "Web",
    url: "https://techniquelossadjusters.com/",
    image: '15',
    icon: Shield,
  },
  {
    name: "Creative Phy - Digital Agency Hub",
    description: "Showcase of digital marketing innovation, featuring data-driven strategies and impactful creative design portfolios.",
    category: "Web",
    url: "https://www.creativephy.com/",
    image: '16',
    icon: Store,
  },
  {
    name: "Pillow Factory UK - E-Commerce",
    description: "A high-conversion retail platform for the UK market, featuring complex shipping logic and multi-currency transaction handling.",
    category: "E-Commerce",
    url: "https://www.pillowfactory.co.uk/",
    image: '3',
    icon: Store,
  },
  {
    name: "Ground of Law - Legal Consultancy",
    description: "A professional legal portal designed to build trust and authority through structured service profiles and lead capture mechanisms.",
    category: "Web",
    url: "https://groundoflaw.qa/",
    image: '17',
    icon: Scale,
  },
  {
    name: "Ainab Home Health - Care Portal",
    description: "Enhancing patient trust through a professional digital presence for a premier personal care provider in Minnesota.",
    category: "Web",
    url: "https://ainabhomehealthcare.com/",
    image: '18',
    icon: HeartPulse,
  },
  {
    name: "FMCO Logistics - Supply Chain",
    description: "A robust transportation and customs clearance platform for a regional leader in supply chain management since 1997.",
    category: "Web",
    url: "https://fmco.com.sa/",
    image: '19',
    icon: Truck,
  },
  {
    name: "Singapore Airport Transfers - Booking App",
    description: "A premium transport booking engine for luxury airport transfers, optimizing logistics and fleet management in Singapore.",
    category: "Web",
    url: "https://www.singaporeairporttransfers.com/",
    image: '21',
    icon: Plane,
  },
  {
    name: "ACGEM Africa - Governance Hub",
    description: "Promoting transparency and sustainable development through a centralized digital resource for African economic governance.",
    category: "Web",
    url: "https://acgemafrica.org/",
    image: '22',
    icon: Home,
  }
];

export const testimonials = [
  {
    id: 't-radhika',
    projectName: 'Radhika Saree',
    quote: "The inventory management system MyBestGuide built for us is a absolute game-changer. Our stock tracking is finally accurate, and the operational overhead has dropped significantly.",
    name: 'Radhika Saree',
    title: 'Enterprise Inventory Solution',
    rating: 4,
    url: 'https://radhika.mamtacollege.in/',
    image: '11'
  },
  {
    id: 't-soni',
    projectName: 'Hotel Soni Arena',
    quote: "Our new booking platform is seamless and visually stunning. We've seen a noticeable jump in direct reservations thanks to the improved user experience and mobile-first design.",
    name: 'Hotel Soni Arena',
    title: 'Hospitality & Booking Platform',
    rating: 4.5,
    url: 'https://soniarenahotel.com/',
    image: '12'
  },
  {
    id: 't-dvr',
    projectName: 'DVR Global',
    quote: "They delivered a robust career portal that handled our global logistics and training requirements perfectly. A truly professional team that understands complex business logic.",
    name: 'DVR Global',
    title: 'Global Career Logistics',
    rating: 4,
    url: 'https://www.dvrglobalcareer.com/',
    image: '11'
  },
  {
    id: 't-dk',
    projectName: 'DK Appliance Hub',
    quote: "Effective and simple lead generation. The website does exactly what we needed—bringing in consistent inquiries for our local appliance maintenance services.",
    name: 'DK Appliance Hub',
    title: 'Service Maintenance Portal',
    rating: 4,
    url: 'https://dkappliance.vercel.app/',
    image: '12'
  },
  {
    id: 't-akash',
    projectName: 'Akash Safety Net',
    quote: "A clean and professional E-catalog that highlights our safety solutions perfectly. It has helped us build immediate trust with our high-value industrial clients.",
    name: 'Akash Safety Net',
    title: 'Industrial E-Catalog',
    rating: 4,
    url: 'https://akashsaftynet.vercel.app/',
    image: '11'
  },
  {
    id: 't-balaji',
    projectName: 'Shri Balaji Contractor',
    quote: "Outstanding work on our construction showcase. The design beautifully highlights our civil engineering expertise and reflects the scale of our projects.",
    name: 'Shri Balaji Contractor',
    title: 'Construction & Civil Engineering',
    rating: 5,
    url: 'https://shribalajicontractor.vercel.app/',
    image: '12'
  },
];

export const ecommerceDevelopmentData = {
  heroTitle: "Expert E-commerce Engineering",
  heroDescription: "Scale your revenue with high-performance, conversion-optimized storefronts. We build secure, resilient, and user-centric digital marketplaces that turn browsers into brand advocates.",
  ctaText: "Launch Your Global Store",
  services: [
    {
      icon: Store,
      title: "Custom Marketplace Development",
      description: "We engineer bespoke e-commerce platforms from the ground up, tailored precisely to your brand logic and customer journey for maximum differentiation.",
    },
    {
      icon: ShoppingBag,
      title: "Shopify & Headless Commerce",
      description: "Leverage the agility of Shopify or the flexibility of Headless commerce. We build robust, scalable architectures that grow alongside your business.",
    },
    {
      icon: CreditCard,
      title: "Secure Payment Orchestration",
      description: "Minimize friction at checkout with multi-gateway payment integrations, ensuring secure and seamless transaction handling for a global audience.",
    },
    {
      icon: ShoppingCart,
      title: "Intelligent Order Management",
      description: "Streamline your fulfillment operations with integrated cart, checkout, and inventory management systems designed for backend efficiency.",
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Speed is a feature. We tune every aspect of your site to ensure millisecond load times, direct impacts on SEO, and improved conversion rates.",
    },
  ]
};

export const mobileAppDevelopmentData = {
  heroTitle: "High-Impact Mobile Innovation",
  heroDescription: "Engage your audience with intuitive, high-performance mobile experiences. We craft native and cross-platform applications that deliver value and drive customer loyalty.",
  services: [
    {
      icon: Apple,
      title: "iOS Engineering Excellence",
      description: "We leverage the full power of the Apple ecosystem to build premium, high-performance applications that resonate with iOS users globally.",
    },
    {
      icon: Smartphone,
      title: "Android Native Development",
      description: "Build robust, scalable apps optimized for the diverse Android market, adhering to Material Design standards for a familiar and engaging UX.",
    },
    {
      icon: Component,
      title: "Agile Cross-Platform Solutions",
      description: "Optimize your time-to-market with Flutter or React Native. We deliver unified experiences across iOS and Android from a single, efficient codebase.",
    },
    {
        icon: DraftingCompass,
        title: "User-Centric UI/UX Design",
        description: "Great apps start with empathy. Our designers craft intuitive interfaces that simplify complexity and make your app a pleasure to use.",
    },
    {
      icon: TrendingUp,
      title: "App Lifecycle Management",
      description: "From performance tuning to feature scaling, we manage the technical evolution of your app to ensure it stays relevant and reliable.",
    }
  ]
};

export const erpSaaSDevelopmentData = {
  heroTitle: "Enterprise ERP & SaaS Solutions",
  heroDescription: "Streamline complexity with scalable, cloud-native enterprise software. We build the digital backbone your organization needs to automate workflows and drive intelligence.",
  services: [
    {
      icon: Layers3,
      title: "Bespoke ERP Engineering",
      description: "Move beyond rigid software. We build custom ERP systems that mirror your unique business logic, integrating finance, HR, and supply chain into one source of truth.",
    },
    {
      icon: Server,
      title: "Cloud-Native SaaS Architecture",
      description: "Launch your product on a resilient, multi-tenant foundation. We architect for high availability, security, and effortless scaling as your user base grows.",
    },
    {
      icon: GitBranch,
      title: "Enterprise Ecosystem Integration",
      description: "Unify your digital landscape. We connect your ERP with third-party tools, payment gateways, and CRM systems for a frictionless data flow.",
    },
    {
      icon: Workflow,
      title: "Intelligent Process Automation",
      description: "Eliminate manual overhead. We leverage powerful automation engines to streamline repetitive tasks across sales, manufacturing, and HR.",
    },
    {
        icon: TrendingUp,
        title: "Business Intelligence & Analytics",
        description: "Turn data into decisions. We build advanced reporting dashboards that surface real-time insights, helping you lead with confidence.",
    }
  ]
};

export const customizedDevelopmentData = {
  heroTitle: "Precision-Engineered Custom Solutions",
  heroDescription: "When off-the-shelf software isn't enough, we engineer a competitive edge. Our custom solutions are built to solve your unique operational challenges with surgical precision.",
  ctaText: "Engineer Your Edge",
  services: [
    {
      icon: CodeXml,
      title: "Full-Stack Custom Software",
      description: "From initial concept to final deployment, we build end-to-end applications designed to solve specific business problems and drive growth.",
    },
    {
      icon: GitBranch,
      title: "Custom API & Microservices",
      description: "Enable seamless communication between your systems. We build secure, high-concurrency APIs that serve as the glue for your digital infrastructure.",
    },
    {
      icon: RefreshCw,
      title: "Legacy System Modernization",
      description: "Future-proof your operations. We help you migrate from aging legacy systems to modern, maintainable stacks without disrupting your business.",
    },
    {
      icon: Puzzle,
      title: "Specialized Integrations",
      description: "Expand your capabilities. We integrate specialized third-party services into your custom ecosystem for a unified and powerful workflow.",
    },
    {
      icon: DraftingCompass,
      title: "Strategic Architectural Design",
      description: "We architect for the long term. Our forward-thinking designs ensure your software is maintainable, secure, and ready for whatever comes next.",
    }
  ]
};

export const odooDevelopmentData = {
  heroTitle: "Elite Odoo ERP Customization",
  heroDescription: "Unlock the full potential of Odoo for your enterprise. We provide expert implementation and customization services that align Odoo perfectly with your operational reality.",
  ctaText: "Optimize with Odoo",
  services: [
    {
      icon: ToyBrick,
      title: "Odoo Module Engineering",
      description: "Tailor Odoo's modules for accounting, CRM, or inventory to fit your specific business processes, ensuring a perfect fit for your team.",
    },
    {
      icon: Milestone,
      title: "Odoo Implementation & Strategy",
      description: "Get Odoo right from day one. We manage the entire implementation roadmap, from setup to data migration, with zero business disruption.",
    },
    {
      icon: Workflow,
      title: "Enterprise Odoo Automation",
      description: "Streamline your business cycles. We leverage Odoo's internal logic to automate your sales, HR, and production workflows for peak efficiency.",
    },
    {
      icon: GitBranch,
      title: "Odoo Ecosystem Syncing",
      description: "Connect Odoo to the tools you already love. We develop secure integrations for payment providers, shipping hubs, and e-commerce stores.",
    }
  ]
};

export const technicalSupportData = {
  heroTitle: "Mission-Critical Technical Support",
  heroDescription: "Protect your digital investments with proactive maintenance and expert support. We ensure system reliability and security so you can focus on leading your business.",
  ctaText: "Secure Your Operations",
  services: [
    {
      icon: FileText,
      title: "Structured Ticket Management",
      description: "Our systematic approach ensures every issue is tracked, prioritized, and resolved with radical transparency and clear communication.",
    },
    {
      icon: Shield,
      title: "SLA-Backed Reliability",
      description: "We commit to your success with guaranteed response and resolution times, providing the predictable support your enterprise demands.",
    },
    {
      icon: AlertCircle,
      title: "24/7 Proactive Monitoring",
      description: "We stop issues before they start. Our automated monitoring systems detect performance dips and downtime instantly, triggering immediate action.",
    },
    {
      icon: Activity,
      title: "Standard Operating Excellence",
      description: "We develop rigorous SOPs for your infrastructure, ensuring consistent maintenance and rapid recovery during any technical incident.",
    },
    {
      icon: FileText,
      title: "Comprehensive Documentation",
      description: "Knowledge is power. We maintain detailed technical documentation for your systems, ensuring your team is always informed and capable.",
    },
    {
      icon: TrendingUp,
      title: "Continuous Optimization",
      description: "We don't just maintain; we improve. We track system health and KPIs to suggest optimizations that keep your platform fast and responsive.",
    },
    {
      icon: ShieldCheck,
      title: "Security & Compliance Operations",
      description: "Stay ahead of threats. We manage your security patch cycles and compliance updates to keep your data safe and your business protected.",
    },
    {
      icon: Wrench,
      title: "Surgical Incident Resolution",
      description: "When the unexpected happens, our expert engineers resolve root causes quickly, providing detailed analysis to prevent future recurrence.",
    },
  ]
};