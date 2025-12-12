import agentsProcess from "@/assets/images/agents-process.png";
import output from "@/assets/images/output.png";
import usePrompt from "@/assets/images/use-prompt.png";
import Image from "next/image";

export const HOW_IT_WORKS = [
  {
    id: 1,
    title: "User Prompt Ingestion",
    image: (
      <Image
        className="object-cover rounded-2xl"
        width={650}
        height={280}
        src={usePrompt.src as string}
        alt="User Prompt"
      />
    ),
  },
  {
    id: 2,
    title: "Agents Collaboration & Execution",
    image: (
      <Image
        className="object-cover rounded-2xl"
        width={650}
        height={280}
        src={agentsProcess.src as string}
        alt="Agent Process"
      />
    ),
  },
  {
    id: 3,
    title: "Output Delivery",
    image: (
      <Image
        className="object-cover rounded-2xl"
        width={650}
        height={280}
        src={output.src as string}
        alt="Output"
      />
    ),
  },
];
