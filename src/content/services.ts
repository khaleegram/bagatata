export const services = [
  {
    id: "web",
    number: "01",
    title: "Web platforms & internal systems",
    description:
      "Customer portals, business dashboards and web applications built around real processes.",
    tags: "WEB APPLICATIONS / OPERATIONS",
  },
  {
    id: "mobile",
    number: "02",
    title: "Mobile product engineering",
    description:
      "Cross-platform mobile experiences for customers, communities and teams.",
    tags: "MOBILE / PRODUCT DESIGN",
  },
  {
    id: "saas",
    number: "03",
    title: "SaaS & product development",
    description:
      "Multi-user platforms with clear roles, connected workflows and room to evolve.",
    tags: "PLATFORMS / PRODUCT ENGINEERING",
  },
  {
    id: "automation",
    number: "04",
    title: "AI & workflow automation",
    description:
      "Practical intelligent features and automation that reduce repetitive work.",
    tags: "APPLIED AI / AUTOMATION",
  },
  {
    id: "integrations",
    number: "05",
    title: "API & system integration",
    description:
      "Connect the services and data your product depends on, with less manual duplication.",
    tags: "APIS / INTEGRATIONS",
  },
] as const;

export type ServiceId = (typeof services)[number]["id"];

export const servicesCopy = {
  heading: "From idea to",
  emphasis: "Software people can use.",
  description:
    "We build digital systems around business needs. Whether you’re testing a concept or replacing a process, the goal is usable, maintainable software.",
} as const;
