export const processCopy = {
  heading: "Clear thinking.",
  emphasis: "Deliberate engineering.",
  description:
    "Good products take clear decisions, careful execution and the willingness to keep improving.",
  feedbackNote: "Feedback informs what comes next.",
} as const;

export const processSteps = [
  {
    title: "Understand",
    description:
      "Define the users, the operational problem and what success looks like.",
  },
  {
    title: "Design",
    description:
      "Turn requirements into flows, architecture and a practical delivery scope.",
  },
  {
    title: "Build",
    description:
      "Develop and test the essential product, focusing on reliability and usability.",
  },
  {
    title: "Improve",
    description:
      "Launch, learn from feedback and evolve without unnecessary complexity.",
  },
] as const;
