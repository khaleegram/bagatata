export type ProductSlug =
  "loomis" | "eventticketsng" | "chatcart" | "arewavanta";

export interface Product {
  slug: ProductSlug;
  name: string;
  number: string;
  category: string;
  shortCategory: string;
  summary: string;
  problem: string;
  solution: string;
  highlights: readonly string[];
  knownDomain: string | null;
  externalLinkEnabled: boolean;
  visualIsIllustrative: true;
}

// Public-safe records only. Internal legal notes and availability flags stay out
// of the client bundle. Known domains are not proof of approved public availability.
export const products: readonly Product[] = [
  {
    slug: "loomis",
    name: "Loomis",
    number: "01",
    category: "Education technology",
    shortCategory: "Education",
    summary:
      "A connected school management platform bringing academic records, attendance, fees and communication into one clearer workflow.",
    problem:
      "Schools juggle records, grades, attendance, fees and communication across paper processes and disconnected tools.",
    solution:
      "Loomis brings everyday academic and administrative work into a connected workspace, with distinct roles for the people running a school and the families it serves.",
    highlights: [
      "Student management",
      "Attendance & gradebook",
      "School finance",
      "Parent communication",
    ],
    knownDomain: "https://loomis.digital",
    externalLinkEnabled: false,
    visualIsIllustrative: true,
  },
  {
    slug: "eventticketsng",
    name: "EventTicketsNG",
    number: "02",
    category: "Events & operations",
    shortCategory: "Events",
    summary:
      "A ticketing platform that helps organizers create events, sell tickets, track activity and manage event entry.",
    problem:
      "Organizers need a connected way to manage ticket inventory, sales activity and the practical work of checking guests in.",
    solution:
      "EventTicketsNG connects ticketing and access operations, bringing event configuration, sales tracking and QR check-in into an organizer-focused workflow.",
    highlights: [
      "Ticket sales",
      "QR check-in",
      "Organizer tools",
      "Ticket inventory",
      "Agent workflows",
    ],
    knownDomain: "https://eventticketsng.com",
    externalLinkEnabled: false,
    visualIsIllustrative: true,
  },
  {
    slug: "chatcart",
    name: "ChatCart",
    number: "03",
    category: "Social commerce",
    shortCategory: "Commerce",
    summary:
      "A mobile-first shopping experience built around discovery, conversation, offers and organized orders.",
    problem:
      "Social sellers and shoppers negotiate in messages, then struggle to keep orders, payments and fulfillment organized.",
    solution:
      "ChatCart connects product discovery, buyer–seller conversations, offers and order progress around the way people already shop. Payment processing is handled by Paystack; ChatCart does not hold customer balances.",
    highlights: [
      "Product discovery",
      "Chat & offers",
      "Checkout & orders",
      "Order tracking",
    ],
    knownDomain: "https://chatcart.shop",
    externalLinkEnabled: false,
    visualIsIllustrative: true,
  },
  {
    slug: "arewavanta",
    name: "ArewaVanta",
    number: "04",
    category: "Esports communities",
    shortCategory: "Community",
    summary:
      "Competition, results and player statistics for Northern Nigeria’s Call of Duty: Mobile Battle Royale community.",
    problem:
      "Community tournaments need clear schedules, squads, consistent scores and accessible results without spreadsheet chaos.",
    solution:
      "ArewaVanta gives the Arewa gaming community a dedicated place for competitions, squad rosters, match results and player and squad rankings.",
    highlights: [
      "Competitions",
      "Squad rosters",
      "Match scoring",
      "Player rankings",
    ],
    knownDomain: null,
    externalLinkEnabled: false,
    visualIsIllustrative: true,
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
