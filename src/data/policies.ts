export type PolicySubsection = {
  subheading?: string;
  paragraphs?: readonly string[];
  listItems?: readonly string[];
};

export type PolicySection = {
  heading: string;
  paragraphs?: readonly string[];
  subsections?: readonly PolicySubsection[];
};

export type PolicyPageData = {
  slug: string;
  heroTitle: string;
  breadcrumbLabel: string;
  sidebarLabel: string;
  pageHeading: string;
  companyLine: string;
  effectiveDate: string;
  intro: readonly string[];
  sections: readonly PolicySection[];
};

export const policyNav = [
  {
    slug: "privacy-policy",
    label: "PRIVACY & POLICY",
    href: "/policies/privacy-policy",
  },
  {
    slug: "terms-of-service",
    label: "TERMS OF SERVICE",
    href: "/policies/terms-of-service",
  },
  {
    slug: "refund-cancellation",
    label: "REFUND & CANCELLATION POLICY",
    href: "/policies/refund-cancellation",
  },
] as const;

export type PolicySlug = (typeof policyNav)[number]["slug"];

const companyLine =
  "Eberths Enterprises LLC DBA EPoint Solution LLC";
const effectiveDate = "01/01/2026";

export const policyPages: Record<PolicySlug, PolicyPageData> = {
  "terms-of-service": {
    slug: "terms-of-service",
    heroTitle: "TERMS OF SERVICE",
    breadcrumbLabel: "TERMS OF SERVICE",
    sidebarLabel: "TERMS OF SERVICE",
    pageHeading: "TERMS OF SERVICE",
    companyLine,
    effectiveDate,
    intro: [
      "Welcome to EPoint Solution. These Terms of Service govern your access to and use of our website, digital programs, consulting services, and related materials offered by Eberths Enterprises LLC DBA EPoint Solution LLC.",
      "By accessing our website, purchasing a program, or engaging our services, you agree to be bound by these Terms. If you do not agree, please do not use our services.",
    ],
    sections: [
      {
        heading: "Term of Agreement",
        paragraphs: [
          "These Terms constitute a binding agreement between you and Eberths Enterprises LLC DBA EPoint Solution LLC. Your continued use of our website and services after the effective date constitutes acceptance of these Terms.",
          "We may update these Terms from time to time. Material changes will be reflected on this page with an updated effective date. Your continued use after changes are posted constitutes acceptance of the revised Terms.",
        ],
      },
      {
        heading: "Services & Programs",
        paragraphs: [
          "EPoint Solution provides educational digital resources, marketing and business consulting programs, and related professional services. Program descriptions, pricing, and deliverables are outlined on our website and at the time of purchase.",
          "Results may vary based on individual effort, market conditions, and implementation. We do not guarantee specific financial, marketing, or business outcomes unless expressly stated in writing for a particular engagement.",
        ],
      },
      {
        heading: "Payments & Access",
        paragraphs: [
          "Fees for programs and services are due as stated at checkout or in your service agreement. Access to digital materials and scheduled consulting sessions is granted upon confirmed payment, subject to any eligibility requirements stated for the program.",
          "You are responsible for providing accurate contact and billing information. Failure to complete payment may result in suspension or cancellation of access.",
        ],
      },
      {
        heading: "Intellectual Property",
        paragraphs: [
          "All content on this website—including text, graphics, logos, frameworks, guides, and program materials—is owned by EPoint Solution or its licensors and is protected by applicable intellectual property laws.",
          "You may not copy, distribute, resell, or create derivative works from our materials without prior written consent, except for personal use as permitted within your purchased program.",
        ],
      },
      {
        heading: "Limitation of Liability",
        paragraphs: [
          "To the fullest extent permitted by law, EPoint Solution shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services or materials.",
          "Our total liability for any claim related to these Terms or our services shall not exceed the amount you paid for the specific program giving rise to the claim.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: [
          "For questions regarding these Terms of Service, contact us at support@epointsolution.com or by mail at 5750 S Semoran Blvd, Orlando FL 32822.",
        ],
      },
    ],
  },
  "privacy-policy": {
    slug: "privacy-policy",
    heroTitle: "PRIVACY & POLICY",
    breadcrumbLabel: "PRIVACY & POLICY",
    sidebarLabel: "PRIVACY & POLICY",
    pageHeading: "PRIVACY & POLICY",
    companyLine,
    effectiveDate,
    intro: [
      'Eberths Enterprises LLC DBA EPoint Solution LLC ("Company," "we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit https://epointsolution.com and use our consulting services, digital products, workshops, and related services within the United States. By accessing or using our website or services, you agree to this Privacy Policy.',
    ],
    sections: [
      {
        heading: "1. Information We Collect",
        subsections: [
          {
            subheading: "A. Personal Information You Provide",
            paragraphs: [
              "We may collect personal information that you voluntarily provide, including:",
            ],
            listItems: [
              "Full name",
              "Email address",
              "Phone number",
              "Business information",
              "Billing and payment information",
              "Information submitted through forms, consultations, or purchases",
            ],
          },
          {
            subheading: "B. Automatically Collected Information",
            paragraphs: [
              "When you visit our website, we may automatically collect:",
            ],
            listItems: [
              "IP address",
              "Browser type",
              "Device type",
              "Operating system",
              "Pages visited",
              "Time spent on site",
              "Referral source",
              "Cookies and tracking data",
            ],
          },
        ],
      },
      {
        heading: "2. How We Use Your Information",
        paragraphs: ["We use collected information to:"],
        subsections: [
          {
            listItems: [
              "Provide consulting and digital services",
              "Process payments and transactions",
              "Deliver purchased programs and workshops",
              "Respond to inquiries",
              "Provide customer support",
              "Send newsletters and marketing emails",
              "Improve website functionality",
              "Analyze traffic and performance",
              "Prevent fraud and protect our business",
              "Comply with U.S. legal obligations",
            ],
          },
        ],
      },
      {
        heading: "3. Advertising & Tracking Disclosure",
        paragraphs: [
          "We may use third-party advertising and analytics platforms, including:",
        ],
        subsections: [
          {
            listItems: [
              "Meta (Facebook & Instagram Ads)",
              "Google Ads",
              "Google Analytics",
            ],
          },
          {
            paragraphs: [
              "These services may use cookies, pixels, and tracking technologies to:",
            ],
            listItems: [
              "Deliver personalized advertisements",
              "Run retargeting campaigns",
              "Measure marketing performance",
              "Analyze website usage",
            ],
          },
          {
            paragraphs: [
              "This may be considered sharing under certain U.S. state privacy laws. You may adjust your browser settings to refuse cookies or opt out of targeted advertising through advertising platform settings.",
            ],
          },
        ],
      },
      {
        heading: "4. Cookies & Tracking Technologies",
        paragraphs: ["Our website uses:"],
        subsections: [
          {
            listItems: [
              "Cookies",
              "Tracking pixels",
              "Web beacons",
              "Similar technologies",
            ],
          },
          {
            paragraphs: ["These technologies help us:"],
            listItems: [
              "Improve user experience",
              "Analyze traffic",
              "Provide relevant advertisements",
            ],
          },
          {
            paragraphs: [
              "You can disable cookies in your browser settings; however, some features may not function properly.",
            ],
          },
        ],
      },
      {
        heading: "5. Data Security",
        paragraphs: [
          "We implement reasonable security measures including:",
        ],
        subsections: [
          {
            listItems: [
              "SSL encryption",
              "Secure payment processing",
              "Restricted internal access",
              "Monitoring systems",
            ],
          },
          {
            paragraphs: [
              "However, no internet transmission is 100% secure, and we cannot guarantee absolute security.",
            ],
          },
        ],
      },
      {
        heading: "6. Children's Privacy",
        paragraphs: [
          "Our services are not intended for individuals under the age of 18.",
          "We do not knowingly collect personal information from minors. If such information is discovered, we will delete it promptly.",
        ],
      },
      {
        heading: "7. How We Share Information",
        paragraphs: [
          "We may share information with trusted third-party service providers for:",
        ],
        subsections: [
          {
            listItems: [
              "Payment processing",
              "Email marketing",
              "Advertising",
              "Analytics",
              "Website hosting",
              "CRM systems",
            ],
          },
          {
            paragraphs: [
              "These providers are required to maintain confidentiality and use information only for service purposes.",
              "We do not sell personal information for monetary compensation.",
            ],
          },
        ],
      },
      {
        heading: "8. Your U.S. Privacy Rights",
        paragraphs: [
          "Depending on your state of residence (including California), you may have rights such as:",
        ],
        subsections: [
          {
            listItems: [
              "Right to access personal information",
              "Right to request correction",
              "Right to request deletion",
              "Right to opt out of targeted advertising",
              "Right to limit use of sensitive personal information",
            ],
          },
          {
            paragraphs: [
              "To exercise your rights, contact:",
              "support@epointsolution.com",
              "We will respond within the time required by applicable law.",
            ],
          },
        ],
      },
      {
        heading: "9. California Residents (CCPA/CPRA Notice)",
        paragraphs: [
          "If you are a California resident, you have the right to:",
        ],
        subsections: [
          {
            listItems: [
              "Know what personal information we collect",
              "Request deletion of your information",
              "Correct inaccurate personal information",
              "Opt out of sale or sharing of personal information",
              "Non-discrimination for exercising privacy rights",
            ],
          },
          {
            paragraphs: [
              "To submit a request, email: support@epointsolution.com",
              "We may verify your identity before processing requests.",
              "We do not knowingly sell personal information for money. However, certain advertising practices may qualify as sharing under California law.",
            ],
          },
        ],
      },
      {
        heading: "10. Data Retention",
        paragraphs: [
          "We retain personal information only as long as necessary to:",
        ],
        subsections: [
          {
            listItems: [
              "Provide services",
              "Fulfill legal obligations",
              "Resolve disputes",
              "Enforce agreements",
            ],
          },
          {
            paragraphs: [
              "After retention periods expire, data is securely deleted or anonymized.",
            ],
          },
        ],
      },
      {
        heading: "11. Changes to This Privacy Policy",
        paragraphs: [
          "We may update this Privacy Policy at any time. Changes will be posted on this page with an updated Effective Date. Continued use of our website constitutes acceptance of updated policies.",
        ],
      },
      {
        heading: "12. Contact Information",
        subsections: [
          {
            listItems: [
              "Eberths Enterprises LLC DBA EPoint Solution LLC",
              "6663 Narcoossee Rd, Suite 166",
              "Orlando, FL 32822",
              "United States",
              "+1 (689) 219-3665",
              "support@epointsolution.com",
              "eberths@epointsolution.com",
              "https://epointsolution.com",
            ],
          },
        ],
      },
    ],
  },
  "refund-cancellation": {
    slug: "refund-cancellation",
    heroTitle: "REFUND & CANCELLATION POLICY",
    breadcrumbLabel: "REFUND & CANCELLATION POLICY",
    sidebarLabel: "REFUND & CANCELLATION POLICY",
    pageHeading: "REFUND & CANCELLATION POLICY",
    companyLine,
    effectiveDate,
    intro: [
      "Website: https://epointsolution.com",
      "At EPoint Solution LLC, we provide educational, digital, and consultative services related to business growth, productivity systems, AI solutions, and strategic development.",
      "Please read this Refund & Cancellation Policy carefully before purchasing any service.",
    ],
    sections: [
      {
        heading: "1. Right to Cancel – 3-Day Cooling-Off Period",
        paragraphs: [
          "You may request a cancellation and refund within three (3) days of signing an agreement or completing your purchase.",
          "To submit a cancellation request, email:",
          "support@epointsolution.com",
        ],
        subsections: [
          {
            subheading: "Eligibility Requirements",
            paragraphs: [
              "To qualify for a refund under the 3-day cancellation period:",
            ],
            listItems: [
              "Your request must be submitted within 72 hours (3 days) of signing or purchase.",
              "You must not have accessed, downloaded, or used any proprietary digital content.",
              "You must not have scheduled or attended any coaching, consultation, or strategy session.",
            ],
          },
          {
            paragraphs: [
              "If all conditions are met, your refund request will be reviewed and processed accordingly.",
            ],
          },
        ],
      },
      {
        heading: "2. Non-Refundable Services",
        paragraphs: [
          "After the 3-day cancellation period expires, all sales are final and non-refundable, including but not limited to:",
        ],
        subsections: [
          {
            listItems: [
              "Digital guidebooks, courses, downloads, or educational materials",
              "Coaching, consulting, or strategy sessions (scheduled or completed)",
              "Growth programs, workshops, or structured development plans",
              "Memberships, portals, or proprietary content access",
            ],
          },
          {
            paragraphs: [
              "Once services have been accessed, delivered, or initiated, refunds will not be issued.",
            ],
          },
        ],
      },
      {
        heading: "3. Exceptions & Company Discretion",
        paragraphs: [
          "Refunds may be considered at the company's sole discretion in limited situations, including:",
        ],
        subsections: [
          {
            listItems: [
              "Services were clearly not delivered as described",
              "A technical or administrative error occurred",
            ],
          },
          {
            subheading: "Approved refunds:",
            listItems: [
              "May be subject to a reasonable administrative or processing fee",
              "May take 5–10 business days to process",
            ],
          },
        ],
      },
      {
        heading: "4. Cancellation of Scheduled Sessions",
        paragraphs: [
          "Strategy sessions may be cancelled or rescheduled with at least 24 hours' notice.",
          "Cancellations made within 24 hours of the scheduled session, or no-shows, are non-refundable.",
          "Late arrivals may result in reduced session time without refund.",
        ],
      },
      {
        heading: "5. No Guarantees Disclaimer",
        paragraphs: [
          "Eberths Enterprises LLC DBA EPoint Solution LLC provides educational and strategic consulting services.",
          "We do not guarantee:",
        ],
        subsections: [
          {
            listItems: [
              "Specific revenue results",
              "Business growth metrics",
              "Performance outcomes",
              "Market results",
              "Any guaranteed return on investment",
            ],
          },
          {
            paragraphs: [
              "Results vary based on implementation, effort, and market conditions.",
              "Lack of desired results does not qualify for a refund.",
            ],
          },
        ],
      },
      {
        heading: "6. How to Request a Refund or Cancellation",
        paragraphs: [
          "To submit a request, email:",
          "support@epointsolution.com",
          "Please include:",
        ],
        subsections: [
          {
            listItems: [
              "Full Name",
              "Email used for purchase",
              "Date of purchase or agreement",
              "Service purchased",
              "Reason for cancellation or refund request",
            ],
          },
        ],
      },
      {
        heading: "7. Policy Updates",
        paragraphs: [
          "We reserve the right to update or modify this policy at any time.",
          "Continued use of our website or services constitutes acceptance of any revised policy.",
        ],
      },
      {
        heading: "8. Contact Information",
        subsections: [
          {
            paragraphs: ["Eberths Enterprises LLC DBA EPoint Solution LLC"],
          },
          {
            subheading: "Email:",
            listItems: [
              "support@epointsolution.com",
              "eberths@epointsolution.com",
            ],
          },
          {
            paragraphs: ["Phone: +1 689 219 3665"],
          },
          {
            subheading: "Address:",
            listItems: [
              "6663 Narcoossee RD",
              "Suite 166",
              "Orlando, FL 32822",
            ],
          },
        ],
      },
    ],
  },
};

export const policySlugs = Object.keys(policyPages) as PolicySlug[];

export function getPolicyBySlug(slug: string): PolicyPageData | undefined {
  return policyPages[slug as PolicySlug];
}
