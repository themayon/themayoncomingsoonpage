import { ContactPoint, InsightCard, Metric, NavigationLink, PageContent, Testimonial } from '../models/site-content.model';

export const navigationLinks: NavigationLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Products', path: '/products' },
  { label: 'Industries', path: '/industries' },
  { label: 'Technology', path: '/technology' },
  { label: 'Contact', path: '/contact' }
];

export const heroMetrics: Metric[] = [
  { value: '24/7', label: 'enterprise-ready support mindset' },
  { value: 'AI First', label: 'solutions embedded into every engagement' },
  { value: '7+', label: 'industries served with domain-aware delivery' },
  { value: '1', label: 'live product already in production' }
];

export const serviceCards: InsightCard[] = [
  {
    title: 'AI Development',
    description: 'Design and integrate AI workflows that automate repetitive work, surface insights, and improve business decisions.',
    bullets: ['LLM integrations', 'RAG pipelines', 'AI agents', 'Predictive analytics']
  },
  {
    title: 'Custom Software Development',
    description: 'Build tailored software platforms for enterprise operations, customer experiences, and internal productivity.',
    bullets: ['Web portals', 'Business apps', 'Process tools', 'API-first systems']
  },
  {
    title: 'Enterprise Application Development',
    description: 'Deliver secure, scalable platforms with maintainable architecture and clean deployment patterns.',
    bullets: ['Role-based access', 'Auditability', 'Performance tuning', 'Secure architecture']
  },
  {
    title: 'SaaS Product Development',
    description: 'Create subscription-ready products with onboarding flows, analytics, and growth-friendly architecture.',
    bullets: ['Multi-tenant readiness', 'Product analytics', 'Subscription flows', 'Feature flags']
  },
  {
    title: 'Cloud Solutions',
    description: 'Modernize infrastructure for reliability, speed, and cost-efficient scaling across Azure and AWS.',
    bullets: ['Cloud migration', 'DevOps pipelines', 'Observability', 'High availability']
  },
  {
    title: 'Business Automation',
    description: 'Remove manual bottlenecks and automate the workflows that slow teams down every day.',
    bullets: ['Approvals', 'Notifications', 'Document flows', 'Operational dashboards']
  }
];

export const productCards: InsightCard[] = [
  {
    title: 'AI HMS',
    badge: 'Live Product',
    badgeTone: 'success',
    description: 'A production-ready hospital management platform already operating in real-world healthcare environments.',
    bullets: ['Patient registration', 'Appointments', 'Billing', 'EMR', 'Reports & analytics'],
    href: 'https://hms.modernmedikal.in/',
    external: true
  },
  {
    title: 'AI CRM',
    badge: 'Coming Soon',
    badgeTone: 'warning',
    description: 'A sales and customer management platform with AI-powered forecasting and workflow automation.',
    bullets: ['Lead management', 'Pipeline visibility', 'WhatsApp integration', 'Customer insights']
  },
  {
    title: 'AI HRM',
    badge: 'Coming Soon',
    badgeTone: 'warning',
    description: 'An AI-enabled HR platform for employee lifecycle management, attendance, leave, payroll, and performance.',
    bullets: ['Attendance', 'Leave workflows', 'Payroll', 'Performance analytics']
  },
  {
    title: 'AI ERP',
    badge: 'Coming Soon',
    badgeTone: 'warning',
    description: 'An enterprise ERP foundation for finance, inventory, procurement, and business intelligence.',
    bullets: ['Inventory', 'Finance', 'Supply chain', 'AI analytics']
  }
];

export const industryCards: InsightCard[] = [
  {
    title: 'Healthcare',
    description: 'Digitize patient journeys, clinical operations, and reporting while reducing paperwork.',
    bullets: ['Long queues', 'Fragmented records', 'Manual billing', 'Compliance pressure']
  },
  {
    title: 'Manufacturing',
    description: 'Improve production visibility, asset uptime, and planning across complex operations.',
    bullets: ['Downtime tracking', 'Inventory mismatch', 'Limited traceability', 'Planning gaps']
  },
  {
    title: 'Retail',
    description: 'Connect inventory, customers, and sales into one data-informed operating model.',
    bullets: ['Stock control', 'Multi-channel sales', 'Demand shifts', 'Customer retention']
  },
  {
    title: 'Education',
    description: 'Modernize admin operations and student experiences with connected digital workflows.',
    bullets: ['Enrollment', 'Scheduling', 'Communication gaps', 'Outcome tracking']
  },
  {
    title: 'Logistics',
    description: 'Create control over fleets, routes, dispatch, and delivery performance.',
    bullets: ['Dispatch delays', 'Route visibility', 'Manual updates', 'Proof of delivery']
  },
  {
    title: 'Finance',
    description: 'Support approvals, compliance, and reporting with secure, auditable software.',
    bullets: ['Manual approvals', 'Risk visibility', 'Regulatory pressure', 'Reporting latency']
  },
  {
    title: 'Real Estate',
    description: 'Accelerate lead qualification, site visits, follow-ups, and document handling.',
    bullets: ['Lead leakage', 'Follow-up delays', 'Document friction', 'Sales pipeline visibility']
  },
  {
    title: 'Government',
    description: 'Deliver citizen-focused systems with accessibility, security, and accountability.',
    bullets: ['Legacy workflows', 'Service delays', 'Fragmented records', 'Public transparency']
  }
];

export const whyChooseCards: InsightCard[] = [
  {
    title: 'AI embedded in delivery',
    description: 'We do not bolt AI on top. We design automation, intelligence, and decision support into the core system architecture.',
    bullets: ['Operational intelligence', 'Workflow automation', 'Predictive insight']
  },
  {
    title: 'Enterprise-grade discipline',
    description: 'Architecture, security, testing, and maintainability are handled with the rigor enterprise teams expect.',
    bullets: ['Clean architecture', 'Secure defaults', 'Scalable components']
  },
  {
    title: 'Product and platform thinking',
    description: 'We build systems that can evolve from a single deployment into a portfolio of connected products.',
    bullets: ['Reusable modules', 'Composable APIs', 'Roadmap readiness']
  },
  {
    title: 'Partnership over transactions',
    description: 'We align with outcomes, lead generation, and long-term value rather than one-off delivery.',
    bullets: ['Discovery support', 'Continuous improvement', 'Delivery ownership']
  }
];

export const techStackCards: InsightCard[] = [
  {
    title: 'Frontend',
    description: 'Angular, modern TypeScript, and responsive UI patterns for fast and maintainable interfaces.',
    bullets: ['Angular', 'Standalone components', 'Signals', 'SCSS architecture']
  },
  {
    title: 'Backend',
    description: '.NET Core and ASP.NET Core for secure, robust business logic and API delivery.',
    bullets: ['.NET Core', 'ASP.NET Core', 'REST APIs', 'Enterprise services']
  },
  {
    title: 'Database',
    description: 'SQL Server and PostgreSQL designs that balance reporting, transactional integrity, and scale.',
    bullets: ['SQL Server', 'PostgreSQL', 'Schema design', 'Performance tuning']
  },
  {
    title: 'Cloud',
    description: 'Azure and AWS architectures that support reliability, deployment automation, and growth.',
    bullets: ['Microsoft Azure', 'Amazon AWS', 'DevOps', 'Observability']
  },
  {
    title: 'AI',
    description: 'OpenAI integration, LLM applications, AI agents, and retrieval-augmented generation workflows.',
    bullets: ['OpenAI integration', 'RAG', 'AI agents', 'Predictive analytics']
  }
];

export const testimonials: Testimonial[] = [
  {
    quote: 'The Mayon helped us see AI as a practical operating advantage, not just a feature set.',
    author: 'Operations Director',
    role: 'Healthcare Delivery',
    company: 'Regional Hospital Network'
  },
  {
    quote: 'Their enterprise mindset made the platform feel like it was built for scale from day one.',
    author: 'Product Lead',
    role: 'SaaS Modernization',
    company: 'Growth-stage Technology Firm'
  },
  {
    quote: 'The team combined speed, clarity, and thoughtful architecture in a way that was easy to trust.',
    author: 'Founder',
    role: 'Digital Transformation',
    company: 'Service Business Group'
  }
];

export const contactPoints: ContactPoint[] = [
  {
    label: 'Email',
    value: 'themayon7@gmail.com',
    href: 'mailto:themayon7@gmail.com'
  },
  {
    label: 'Phone',
    value: '+91 9150166247',
    href: 'tel:+919150166247'
  },
  {
    label: 'Website',
    value: 'www.themayon.in',
    href: 'https://www.themayon.in',
    external: true
  },
  {
    label: 'WhatsApp',
    value: 'Chat with our team',
    href: 'https://wa.me/919150166247?text=Hello%20The%20Mayon%2C%20I%20would%20like%20to%20schedule%20a%20consultation.',
    external: true
  }
];

export const homeSeo = {
  title: 'The Mayon | AI-Powered Software Development Company',
  description:
    'The Mayon builds AI-powered software, enterprise platforms, and digital products that accelerate growth and automation.',
  structuredData: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: 'The Mayon',
        url: 'https://www.themayon.in',
        email: 'themayon7@gmail.com',
        telephone: '+91 9150166247',
        sameAs: ['https://hms.modernmedikal.in/']
      },
      {
        '@type': 'WebSite',
        name: 'The Mayon',
        url: 'https://www.themayon.in',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://www.themayon.in/search?q={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      }
    ]
  }
};

export const aboutPage: PageContent = {
  slug: 'about',
  eyebrow: 'About The Mayon',
  title: 'A trusted AI software partner built for serious business outcomes.',
  summary:
    'The Mayon combines design thinking, enterprise engineering, and practical AI to create software that is fast to adopt and built to last.',
  intro:
    'We started with a simple belief: modern companies need software that not only works, but also amplifies how teams think, decide, and operate. Our approach is grounded in delivery discipline, human-centered design, and long-term maintainability.',
  primaryCta: { label: 'Book Discovery Call', href: '/contact' },
  secondaryCta: { label: 'Explore Services', href: '/services' },
  sections: [
    {
      title: 'Our story',
      description: 'We are building The Mayon as a premium AI-first software partner for organizations that want clarity and speed without sacrificing quality.',
      items: ['Enterprise-grade mindset', 'High-trust collaboration', 'Outcome-focused delivery']
    },
    {
      title: 'Mission',
      description: 'Empower businesses through intelligent technology solutions that create measurable operational and commercial impact.',
      items: ['Automation that saves time', 'Systems that scale cleanly', 'Insight that improves decisions']
    },
    {
      title: 'Vision',
      description: 'Become a trusted global AI software innovation partner for organizations modernizing how they work and grow.',
      items: ['Global delivery readiness', 'Long-term partnerships', 'Product-led innovation']
    },
    {
      title: 'Core values',
      description: 'Our delivery culture is anchored in the values that shape dependable software teams.',
      items: ['Innovation', 'Excellence', 'Customer success', 'Integrity', 'Continuous learning']
    },
    {
      title: 'AI-first philosophy',
      description: 'We embed AI into each layer of the system so the product becomes more intelligent over time.',
      items: ['Automation by design', 'Assistive decision flows', 'Knowledge retrieval', 'Predictive surfaces']
    }
  ]
};

export const servicesPage: PageContent = {
  slug: 'services',
  eyebrow: 'Services',
  title: 'Premium software services for organizations modernizing with AI.',
  summary:
    'From product engineering to automation and cloud modernization, our services are built around enterprise reliability and measurable outcomes.',
  intro:
    'We design services to be modular, reusable, and easy to scale as your business grows. Every engagement is shaped around business value, technical excellence, and long-term maintainability.',
  primaryCta: { label: 'Talk to an Expert', href: '/contact' },
  secondaryCta: { label: 'View Products', href: '/products' },
  sections: [
    {
      title: 'AI Development',
      description: 'Practical AI systems that improve workflows and unlock better decisions.',
      items: ['LLM applications', 'RAG experiences', 'AI copilots', 'Workflow automation']
    },
    {
      title: 'Custom Software Development',
      description: 'Tailored business applications for operations, customer engagement, and internal productivity.',
      items: ['Custom portals', 'Business applications', 'API design', 'Admin experiences']
    },
    {
      title: 'Enterprise Solutions',
      description: 'Platforms that support complex organizations with security, auditability, and scale.',
      items: ['Role-based access', 'Reporting layers', 'Operational dashboards', 'Security controls']
    },
    {
      title: 'Cloud Applications',
      description: 'Cloud-first implementations that are ready for deployment, monitoring, and growth.',
      items: ['Azure hosting', 'AWS hosting', 'CI/CD pipelines', 'Scalable architecture']
    },
    {
      title: 'SaaS Development',
      description: 'Subscription-ready products with onboarding, analytics, and product-market fit signals.',
      items: ['Multi-tenant design', 'Usage analytics', 'Feature planning', 'Growth loops']
    },
    {
      title: 'Business Automation',
      description: 'Reduce manual work with connected workflows and smart operational rules.',
      items: ['Approvals', 'Alerts', 'Document flows', 'Task orchestration']
    }
  ]
};

export const productsPage: PageContent = {
  slug: 'products',
  eyebrow: 'Products',
  title: 'Live and upcoming AI products designed for real-world operations.',
  summary:
    'We are building a product portfolio that shows how AI can become useful in day-to-day enterprise workflows, starting with a live hospital management platform.',
  intro:
    'The product strategy is intentionally focused on practical value. AI HMS is already live and production-ready, while AI CRM, HRM, and ERP are being shaped to support future expansion.',
  primaryCta: { label: 'View Live Demo', href: 'https://hms.modernmedikal.in/', external: true },
  secondaryCta: { label: 'Request Demo', href: '/contact' },
  sections: [
    {
      title: 'AI HMS',
      description: 'A live hospital management system built for healthcare operations and reporting.',
      items: ['Patient registration', 'Appointments', 'Billing', 'EMR', 'Reports & analytics']
    },
    {
      title: 'AI CRM',
      description: 'Coming soon with AI sales forecasting and lead management at the center.',
      items: ['Lead management', 'Sales pipeline', 'Customer insights', 'WhatsApp integration']
    },
    {
      title: 'AI HRM',
      description: 'Coming soon with workforce operations, attendance, leave, payroll, and performance analytics.',
      items: ['Employee records', 'Attendance', 'Leave workflows', 'Payroll']
    },
    {
      title: 'AI ERP',
      description: 'Coming soon as the backbone for finance, inventory, procurement, and business intelligence.',
      items: ['Finance', 'Inventory', 'Procurement', 'Supply chain']
    }
  ]
};

export const industriesPage: PageContent = {
  slug: 'industries',
  eyebrow: 'Industries',
  title: 'Industry-specific software thinking that respects real operating constraints.',
  summary:
    'Each industry has different pains, workflows, and compliance needs. We map solutions to those realities instead of forcing generic templates.',
  intro:
    'The goal is not just digitization. It is operational clarity, better customer and employee experiences, and better business decisions through software.',
  primaryCta: { label: 'Discuss Your Industry', href: '/contact' },
  secondaryCta: { label: 'See Technology', href: '/technology' },
  sections: [
    {
      title: 'Healthcare',
      description: 'Reduce paperwork and improve patient operations.',
      items: ['Long queues', 'Fragmented records', 'Manual billing', 'Centralized reporting']
    },
    {
      title: 'Manufacturing',
      description: 'Increase visibility across production and planning.',
      items: ['Downtime tracking', 'Inventory mismatch', 'Traceability', 'Production control']
    },
    {
      title: 'Retail',
      description: 'Connect sales, stock, and customer intelligence.',
      items: ['Demand fluctuations', 'Stock accuracy', 'Multi-channel commerce', 'Retention analytics']
    },
    {
      title: 'Education',
      description: 'Improve admin workflows and student experiences.',
      items: ['Enrollment', 'Communication gaps', 'Scheduling', 'Outcome tracking']
    },
    {
      title: 'Logistics',
      description: 'Track fleets, routes, dispatch, and delivery performance.',
      items: ['Dispatch delays', 'Route visibility', 'Proof of delivery', 'Customer updates']
    },
    {
      title: 'Finance',
      description: 'Support approvals and reporting with secure systems.',
      items: ['Risk visibility', 'Approval bottlenecks', 'Compliance pressure', 'Auditable records']
    },
    {
      title: 'Real Estate',
      description: 'Accelerate lead qualification and sales follow-up.',
      items: ['Lead leakage', 'Document friction', 'Site visit planning', 'Pipeline visibility']
    },
    {
      title: 'Government',
      description: 'Citizen-focused services with accessibility and accountability.',
      items: ['Legacy processes', 'Service delays', 'Transparency', 'Security controls']
    }
  ]
};

export const technologyPage: PageContent = {
  slug: 'technology',
  eyebrow: 'Technology',
  title: 'Modern Angular, .NET, cloud, and AI foundations that scale with the business.',
  summary:
    'We use a practical technology stack that balances speed, maintainability, security, and enterprise readiness.',
  intro:
    'The stack is chosen to support product evolution, not just initial delivery. That means reusable components, reliable services, and a clean path for future product expansion.',
  primaryCta: { label: 'Start a Technical Discovery', href: '/contact' },
  secondaryCta: { label: 'Browse Services', href: '/services' },
  sections: [
    {
      title: 'Frontend',
      description: 'Angular and TypeScript power a responsive and modular user experience.',
      items: ['Standalone components', 'Signals', 'Lazy loading', 'SCSS architecture']
    },
    {
      title: 'Backend',
      description: '.NET Core and ASP.NET Core provide secure business logic and APIs.',
      items: ['REST APIs', 'Service layers', 'Authentication', 'Audit trails']
    },
    {
      title: 'Database',
      description: 'SQL Server and PostgreSQL support both transactional and reporting needs.',
      items: ['Schema design', 'Performance tuning', 'Reporting queries', 'Migrations']
    },
    {
      title: 'Cloud',
      description: 'Azure and AWS allow the right deployment shape for each client environment.',
      items: ['Hosting', 'Automation', 'Monitoring', 'Scaling']
    },
    {
      title: 'Artificial Intelligence',
      description: 'OpenAI integration, LLM applications, AI agents, and RAG workflows.',
      items: ['OpenAI integration', 'LLM applications', 'AI agents', 'Predictive analytics']
    }
  ]
};

export const contactPage: PageContent = {
  slug: 'contact',
  eyebrow: 'Contact',
  title: "Let's talk about your next product, platform, or AI transformation.",
  summary:
    'Whether you want a live demo, a discovery call, or a custom software engagement, we are ready to help you move forward confidently.',
  intro:
    'Use the contact options below to reach us directly. We also recommend scheduling a consultation so we can understand your goals, current systems, and timeline.',
  primaryCta: { label: 'Schedule Consultation', href: 'mailto:themayon7@gmail.com', external: true },
  secondaryCta: { label: 'Chat on WhatsApp', href: 'https://wa.me/919150166247?text=Hello%20The%20Mayon%2C%20I%20would%20like%20to%20book%20a%20consultation.', external: true },
  sections: [
    {
      title: 'Contact information',
      description: 'Reach us directly using the details below.',
      items: ['themayon7@gmail.com', '+91 9150166247', 'www.themayon.in']
    },
    {
      title: 'What we can help with',
      description: 'We can support new builds, AI enhancements, modernization, and product strategy.',
      items: ['Discovery workshops', 'Product design', 'AI enablement', 'Enterprise software']
    },
    {
      title: 'What to expect next',
      description: "We'll review your request, clarify scope, and recommend the fastest path to a useful solution.",
      items: ['Prompt response', 'Clear next steps', 'Practical roadmap', 'Optional live demo']
    }
  ],
  contactPoints
};
