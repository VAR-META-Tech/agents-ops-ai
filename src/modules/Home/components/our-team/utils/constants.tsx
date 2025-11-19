import dungPham from "@/assets/images/dung-pham.png";
import luanDang from "@/assets/images/luan-dang.png";
import toryNguyen from "@/assets/images/tory-nguyen.png";

export const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Dung Pham",
    title: "Chief AI Officer",
    degree: "Ph.D. at Trinity College Dublin",
    bio: "Expert in AI and machine learning with key contributions to Zalo’s early development and Huawei’s large language model research.",
    image: (
      <img
        className="w-32 h-32 object-cover"
        src={dungPham.src}
        alt="Dung Pham"
      />
    ),
  },
  {
    id: 2,
    name: "Tory Nguyen",
    title: "Head of AI and Data Science",
    degree: "Ph.D. at Shibaura Institute of Technology",
    bio: "AI Engineer with 8 years of experience, specializing in multimodal data processing, and cloud-based AI system deployment.",
    image: (
      <img
        className="w-32 h-32 object-cover"
        src={toryNguyen.src}
        alt="Tory Nguyen"
      />
    ),
  },
  {
    id: 3,
    name: "Luan Dang",
    title: "AI and Data Science Leader",
    degree: "M.S. candidate at INRS",
    bio: "AI specialist with strong expertise in NLP, computer vision, and generative AI for real-world applications.",
    image: (
      <img
        className="w-32 h-32 object-cover"
        src={luanDang.src}
        alt="Luan Dang"
      />
    ),
  },
];
