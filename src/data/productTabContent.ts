export type ProductIncludedItem = {
  title: string;
  description: string;
};

export type ProductSummary = {
  tagline: string;
  paragraphs: readonly string[];
};

export type ProductTabDescription = {
  tagline: string;
  paragraphs: readonly string[];
  whatsIncludedHeading?: string;
  whatsIncluded?: readonly ProductIncludedItem[];
  whoItsFor?: readonly string[];
  expectedOutcomesHeading?: string;
  expectedOutcomes?: readonly string[];
  closing?: string;
};

export const productTabContent = {
  "digital-education": {
    reviewCount: 0,
    summary: {
      tagline: "Learn. Implement. Accelerate.",
      paragraphs: [
        "The Accelerated Digital Marketing Education Platform by Epoint Solution is a comprehensive roadmap designed to help entrepreneurs and business owners achieve structured, sustainable expansion. This platform delivers specialized digital marketing resources, modern frameworks, and live, interactive consulting sessions to increase revenue, strengthen operations, and build a scalable business foundation.",
        "Whether you're launching, stabilizing, or scaling, this program provides the clarity and direction needed to drive consistent growth.",
      ],
    },
    tabDescription: {
      tagline: "Build Skills. Optimize Infrastructure. Maximize Growth.",
      paragraphs: [
        "The Accelerated Digital Marketing Education Platform by Epoint Solution is an elite, digital-first training ecosystem designed to help entrepreneurs and small business owners achieve rapid, sustainable growth. Delivered through live, interactive consulting sessions, private online meetings, and direct resources, this comprehensive platform combines professional marketing strategies, targeted advertising frameworks, and one-on-one mentorship to fully optimize your digital infrastructure and maximize operational performance from day one.",
        "Whether you are launching your brand or modernizing your entire marketing framework, this professional program provides the immediate clarity, technical direction, and mentorship needed to scale your business with absolute confidence.",
      ],
      whatsIncludedHeading: "What You'll Learn:",
      whatsIncluded: [
        {
          title: "Digital Infrastructure Optimization",
          description:
            "Structuring backend ecosystems and modern tools to automate your workflow.",
        },
        {
          title: "Specialized Marketing Frameworks",
          description:
            "Deploying strategic campaign architectures designed for small businesses and founders.",
        },
        {
          title: "Interactive Live Consulting",
          description:
            "Solving complex technical blockages and execution bottlenecks in real time.",
        },
        {
          title: "Rapid Skill Acquisition",
          description:
            "Mastering current digital advertising, tracking pixels, and conversion metrics without filler content.",
        },
        {
          title: "Comprehensive Digital Resources",
          description:
            "Gaining immediate access to deployment roadmaps, documentation, and asset packages.",
        },
      ],
      whoItsFor: [
        "Entrepreneurs seeking rapid, data-driven skill acquisition in digital marketing.",
        "Small business owners ready to transform their technical infrastructure and scale smarter.",
        "Founders and leaders aiming to maximize conversion consistency and operational efficiency.",
        "Driven business minds looking for direct, structured mentorship and professional consulting sessions.",
      ],
      expectedOutcomesHeading: "Key Benefits:",
      expectedOutcomes: [
        "Immediate digital access to specialized resources and frameworks.",
        "Live, interactive consulting sessions for real-time strategic adjustment.",
        "Structured marketing modules paired with personalized, expert mentorship.",
        "Complete optimization of your brand's digital infrastructure from day one.",
        "Sustainable long-term expansion powered by modern marketing education.",
      ],
    },
  },
  "strategic-marketing": {
    reviewCount: 0,
    tabDescription: {
      tagline: "Break Barriers. Unlock Potential. Achieve Scalable Success.",
      paragraphs: [
        "The Strategic Marketing & Branding Blueprint by Epoint Solution is a powerful, strategy-driven resource designed to help entrepreneurs, professionals, and business owners unlock sustainable growth. This program focuses on comprehensive, data-driven marketing strategy development, elite branding assistance, and clear campaign deployment maps that remove limitations, enhance brand identity, and accelerate measurable results with total confidence.",
        "Built for individuals and businesses ready to level up, this blueprint provides a clear framework to overcome stagnation, build a powerful market position, and achieve long-term expansion.",
      ],
      whatsIncludedHeading: "What You'll Discover:",
      whatsIncluded: [
        {
          title: "Data-Driven Marketing Strategy",
          description:
            "Create a comprehensive, analytical plan tailored specifically to your core business goals.",
        },
        {
          title: "Elite Branding Frameworks",
          description:
            "Develop a powerful brand identity that enhances market positioning and builds credibility.",
        },
        {
          title: "Campaign Deployment Mapping",
          description:
            "Outline clear, step-by-step execution maps to launch your marketing campaigns seamlessly.",
        },
        {
          title: "Market Positioning Techniques",
          description:
            "Differentiate your small business or startup to strengthen competitive advantage.",
        },
        {
          title: "Scalable Distribution Guidance",
          description:
            "Implement predictable marketing systems to reach your ideal audience and drive results.",
        },
        {
          title: "Performance Optimization Models",
          description:
            "Review campaign metrics consistently to streamline workflows and improve execution.",
        },
      ],
      whoItsFor: [
        "Entrepreneurs ready to build a strong, professional market presence.",
        "Small business owners determined to elevate their brand identity and expand.",
        "Leaders seeking structured, data-driven marketing guidance and execution maps.",
        "Individuals focused on scaling their business infrastructure with total confidence.",
      ],
      expectedOutcomesHeading: "Key Benefits:",
      expectedOutcomes: [
        "Clear direction and structured marketing planning.",
        "Improved market position and stronger brand authority.",
        "Elite campaign maps designed for scalable execution.",
        "Sustainable long-term business expansion and visibility.",
        "Immediate strategic clarity to scale your brand without limits.",
      ],
      closing:
        "The Strategic Marketing & Branding Blueprint equips you with the strategy, structure, and identity needed to achieve growth without limits.",
    },
  },
  "advertising-leads": {
    reviewCount: 0,
    summary: {
      tagline:
        "Master Your Acquisition. Maximize Your Pipeline. Achieve More with Consistent Leads.",
      paragraphs: [
        "The High-Conversion Advertising & Lead Generation Guidance by Epoint Solution is a practical, action-oriented resource designed to help professionals, entrepreneurs, and teams improve conversion, manage campaigns effectively, and consistently achieve high-performance results.",
        "This guidance provides proven systems, tools, and strategies to eliminate ad waste, prioritize high-intent audiences, and build campaign assets that drive measurable productivity.",
      ],
    },
    tabDescription: {
      tagline:
        "Master Your Acquisition. Maximize Your Pipeline. Achieve More with Consistent Leads.",
      paragraphs: [
        "The High-Conversion Advertising & Lead Generation Guidance by Epoint Solution is a practical, action-oriented resource designed to help professionals, entrepreneurs, and teams improve conversion, manage campaigns effectively, and consistently achieve high-performance results.",
        "This guidance provides proven systems, tools, and strategies to eliminate ad waste, prioritize high-intent audiences, and build campaign assets that drive measurable productivity.",
      ],
      whatsIncludedHeading: "What You'll Learn:",
      whatsIncluded: [
        {
          title: "Advertising Management Frameworks",
          description:
            "Proven methods to structure your campaigns for maximum efficiency.",
        },
        {
          title: "Audience Targeting & Planning Systems",
          description:
            "Step-by-step strategies to set clear target profiles and execute with focus.",
        },
        {
          title: "Lead Management Techniques",
          description:
            "Identify high-impact prospects and eliminate low-value activities.",
        },
        {
          title: "Conversion & Asset Development Strategies",
          description:
            "Techniques to reduce friction and increase landing page concentration.",
        },
        {
          title: "Distribution Optimization Tools",
          description:
            "Systems to streamline processes and improve daily pipeline performance.",
        },
        {
          title: "Funnel-Building Strategies",
          description:
            "Practical methods to create tactical lead generation routines that stick.",
        },
        {
          title: "Campaign Tracking Templates",
          description:
            "Easy-to-use tools to monitor progress, track spend, and stay accountable.",
        },
      ],
      whoItsFor: [
        "Entrepreneurs managing multiple advertising responsibilities",
        "Professionals seeking better client acquisition and balance",
        "Team leaders improving marketing productivity standards",
        "Anyone looking to achieve more sales in less time",
      ],
      expectedOutcomesHeading: "Benefits:",
      expectedOutcomes: [
        "Increased distribution efficiency and lead output",
        "Reduced stress and overwhelm in campaign asset management",
        "Clear tactical structure and strategic direction",
        "Improved consistency and accountability in your pipeline",
        "Stronger focus and data-driven decision-making",
      ],
      closing:
        "Take control of your customer acquisition and unlock your full potential with the High-Conversion Advertising & Lead Generation Guidance by Epoint Solution.",
    },
  },
  "elite-mentorship": {
    reviewCount: 0,
    summary: {
      tagline:
        "Transform Your Business in Just 12 Months with a Structured, Results-Driven Growth Strategy",
      paragraphs: [
        "The 12-Month Elite Mentorship & Business Consulting Program by Epoint Solution is a comprehensive business acceleration plan designed to help you scale sustainably, increase revenue, and build long-term success. This flagship program provides a clear roadmap, expert guidance, and measurable milestones to ensure consistent progress every month through private video calls, online meetings, and direct communications.",
        "Whether you're a startup looking to establish your market presence or an established business aiming to scale, this premium partnership delivers continuous execution support, scalable operations advice, and executive accountability at every stage.",
      ],
    },
    tabDescription: {
      tagline:
        "Transform Your Business in Just 12 Months with a Structured, Results-Driven Growth Strategy",
      paragraphs: [
        "The 12-Month Elite Mentorship & Business Consulting Program by Epoint Solution is a comprehensive business acceleration plan designed to help you scale sustainably, increase revenue, and build long-term success. This flagship program provides a clear roadmap, expert guidance, and measurable milestones to ensure consistent progress every month through private video calls, online meetings, and direct communications.",
        "Whether you're a startup looking to establish your market presence or an established business aiming to scale, this premium partnership delivers continuous execution support, scalable operations advice, and executive accountability at every stage.",
      ],
      whatsIncluded: [
        {
          title: "Strategic Business Planning",
          description:
            "Customized 12-month roadmap aligned with your goals and market positioning through monthly business consulting.",
        },
        {
          title: "Monthly Growth Milestones",
          description:
            "Clear, actionable targets and executive accountability to track and measure progress.",
        },
        {
          title: "Marketing & Lead Generation Strategy",
          description:
            "One-on-one coaching to deploy data-driven campaigns that attract high-quality leads.",
        },
        {
          title: "Brand Positioning & Optimization",
          description:
            "Dedicated mentorship sessions to strengthen your brand identity and improve market visibility.",
        },
        {
          title: "Sales Funnel Development",
          description:
            "Optimized customer journey and scalable operations advice designed to maximize revenue.",
        },
        {
          title: "Performance Tracking & Reporting",
          description:
            "Regular performance analysis with data-backed insights, continuous execution support, and improvements.",
        },
        {
          title: "Dedicated Expert Support",
          description:
            "Ongoing guidance from experienced professionals to ensure steady growth and elite corporate mentorship.",
        },
      ],
      whoItsFor: [
        "Driven business founders ready to scale their operations",
        "Small to mid-sized businesses aiming for consistent, high-level growth",
        "Entrepreneurs looking for structured expansion strategies and executive accountability",
        "Companies struggling with stagnant revenue seeking continuous execution support",
      ],
      expectedOutcomes: [
        "Increased revenue and profitability through premium partnership",
        "Improved brand authority and market leadership",
        "Higher lead conversion rates and automated systems",
        "Scalable business systems and optimized infrastructure",
        "Sustainable long-term growth with dedicated one-on-one mentorship",
      ],
      closing:
        "Ready to accelerate your business growth? Let Epoint Solution guide you every step of the way.",
    },
  },
} as const satisfies Record<
  string,
  {
    reviewCount: number;
    summary?: ProductSummary;
    tabDescription: ProductTabDescription;
  }
>;
