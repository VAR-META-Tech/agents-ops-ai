import agentsProcess from "@/assets/images/agents-process.png";
import output from "@/assets/images/output.png";
import usePrompt from "@/assets/images/use-prompt.png";

export const HOW_IT_WORKS = [
  {
    id: 1,
    title: "User Prompt Ingestion",
    image: (
      <img
        className="w-full h-[280px] object-cover rounded-2xl max-lg:h-[350px]"
        src={usePrompt.src as string}
        alt="User Prompt"
      />
    ),
  },
  {
    id: 2,
    title: "Agents Collaboration & Execution",
    image: (
      <img
        className="w-full h-[280px] object-cover rounded-2xl max-lg:h-[350px]"
        src={agentsProcess.src as string}
        alt="Agent Process"
      />
    ),
  },
  {
    id: 3,
    title: "Output Delivery",
    image: (
      <img
        className="w-full h-[280px] object-cover rounded-2xl max-lg:h-[350px]"
        src={output.src as string}
        alt="Output"
      />
    ),
  },
];
