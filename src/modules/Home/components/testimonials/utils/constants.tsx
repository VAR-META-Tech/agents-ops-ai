import aptosLogo from "@/assets/images/aptos-logo.png";
import hashgraphLogo from "@/assets/images/hashgraph-logo.png";
import rhtLogo from "@/assets/images/rht-logo.png";

export const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "I'm very impressed with Varmeta team's speed, proactivity, and agility. They handle every task with great attention to detail, and work hard even during national holidays to deliver on time.",
    title: "Kent Makishima, Head of Product – The Hashgraph Association",
    logo: <img src={hashgraphLogo.src} alt="Hashgraph" />,
  },
  {
    id: 2,
    quote:
      "Varmeta helped us scale our engineering efforts in building the Aptos CaV Unreal SDK. The team built a robust solution that not only leverages proper language styling but is performant and efficient. The success of this collaboration has motivated us to explore continued collaboration with the Varmeta team.",
    title: "David, Head of Engineering – Aptos",
    logo: <img className="w-[100px]" src={aptosLogo.src} alt="Aptos" />,
  },
  {
    id: 3,
    quote:
      "Their communication and responsiveness were excellent. I'm pleased with the project's performance and the ongoing QA support. The team's promptness, proactive attitude, and problem-solving initiatives were particularly impressive.",
    title:
      "Participant, Head of Product and Business Development, RHT DigiCapital",
    logo: <img src={rhtLogo.src} alt="RHT DigiCapital" />,
  },
];
