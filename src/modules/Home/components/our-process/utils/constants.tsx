import { Icons } from "@/assets/icons";

export const WORKFLOW_STEPS = [
  {
    id: 1,
    title: "Discovery",
    subtitle: "[ Workflow Assessment ]",
    description:
      "We start with an in-depth analysis of your operations to identify automation opportunities and performance bottlenecks. Through stakeholder interviews, data audits, and ROI modeling, we define where AI agents can deliver the greatest impact.",
    icon: <Icons.searchBookIcon />,
  },
  {
    id: 2,
    title: "Design",
    subtitle: "[ Architecture Planning ]",
    description:
      "We architect the solution, outlining the agent ecosystem, orchestration model, and integration points. This phase establishes best practices for governance, human oversight, and reusable components - ensuring long-term efficiency and scalability.",
    icon: <Icons.codepenIcon />,
  },
  {
    id: 3,
    title: "Development",
    subtitle: "[ Building Core Agents ]",
    description:
      "Our engineers develop modular, enterprise-grade AI agents using flexible frameworks for both single and multi-agent systems. Each agent undergoes rigorous testing to ensure precision, adaptability, and seamless collaboration.",
    icon: <Icons.terminalSquareIcon />,
  },
  {
    id: 4,
    title: "Integration",
    subtitle: "[ Seamless Deployment ]",
    description:
      "We deploy agents into your existing systems - connecting CRMs and data pipelines through secure APIs and containerized infrastructure. Observability tools maintain transparency, compatibility, and compliance throughout the process.",
    icon: <Icons.dataIcon />,
  },
  {
    id: 5,
    title: "Optimization",
    subtitle: "[ Performance Tuning ]",
    description:
      "After launch, we analyze real-world performance to fine-tune behaviors, improve adoption, and enhance productivity. Continuous A/B testing and feedback loops ensure measurable ROI and sustained operational gains.",
    icon: <Icons.slidersWhiteIcon />,
  },
  {
    id: 6,
    title: "Support",
    subtitle: "[ Governance & Maintenance ]",
    description:
      "We provide continuous monitoring, updates, and governance oversight to keep your AI agents performing at their peak. Our lifecycle management framework ensures compliance, resilience, and ongoing business alignment.",
    icon: <Icons.cursorClickWhiteIcon />,
  },
];
