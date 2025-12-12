import techStackImage from "@/assets/images/tech-stack.png";
import { CommonTitle } from "@/components/common/common-title";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export const TechStack = () => {
  return (
    <div className="bg-white py-48 px-6 min-w-[320px]">
      <div className="max-w-[1280px] mx-auto flex justify-between items-center max-xl:flex-col">
        <CommonTitle as="h2" className="max-lg:text-3xl">
          Our Techstack
        </CommonTitle>

        <Separator
          className="!h-[216px] ml-12 max-xl:hidden"
          orientation="vertical"
        />

        <Separator
          className="hidden max-xl:block my-12"
          orientation="horizontal"
        />
        
        <Image
          src={techStackImage.src}
          alt="Tech Stack"
          width={748}
          height={204}
          priority
        />
      </div>
    </div>
  );
};
