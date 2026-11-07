export const company = {
  name: "Bagatata Technologies Limited",
  brand: "Bagatata",
  registration: "RC 9936491",
  incorporated: "14 October 2026",
  location: "Abuja, Nigeria",
  description:
    "Bagatata Technologies Limited is an Abuja-based technology company building digital products, web and mobile software, SaaS platforms, and intelligent business solutions.",
} as const;

export const aboutCopy = {
  heading: "A technology company.",
  emphasis: "Built to make ideas real.",
  paragraphs: [
    `${company.name} is an independent technology company based in ${company.location}. We bring curiosity, product thinking and hands-on engineering to problems worth solving.`,
    "Our work crosses education, events, commerce and community technology. Alongside developing products and platforms, we build custom software for founders, businesses and organizations.",
  ],
  signature: "Ideas. Products. Real impact.",
} as const;
