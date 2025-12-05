export type SiteConfig = typeof siteConfig;

const appUrl = "https://agentsops.ai/";

export const siteConfig = {
  appUrl: appUrl,
  name: "AgentOps",
  metaTitle: "AgentOps | Enterprise AI Agent Development & Consulting Services",
  description:
    "Transform your business with custom AI agents. Expert consulting, development, etc.",
  // ogImage needs full URL for social media platforms
  ogImage: `${appUrl}hero-image.png`,
  keywords: [
    "AgentsOps",
    "Agents Ops",
    "Varmeta",
    "AI Agents",
    "AI Agent Strategy Consulting",
    "Custom AI Agent Development",
    "AI Agent Integration",
    "Continuous Improvement and Maintenance",
    "Sales & Marketing Agents",
    "HR & Talent Agents",
    "Customer Service & Operations Agents",
    "Content Creation & Community Agents",
    "Finance & Compliance Agents",
  ],
};
