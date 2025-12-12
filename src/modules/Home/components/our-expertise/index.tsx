import ellipseLinear from "@/assets/images/ellipse-linear.png";
import { CommonTitle } from "@/components/common/common-title";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { ExpertiseDesktopTab } from "./components/expertise-desktop-tab";
import { ExpertiseMobile } from "./components/expertise-mobile";

export const OurExpertise = () => {
  return (
    <div className="px-6 relative">
      <Image
        src={ellipseLinear.src}
        className={cn(
          "object-cover absolute top-[-400px] left-[50%] translate-x-[calc(-950px)]",
          "max-lg:left-[750px] max-lg:top-[-250px] max-sm:left-[900px] max-sm:top-[-100px]"
        )}
        alt="Ellipse Linear"
        width={1000}
        height={1000}
        priority
      />

      <div className="max-w-[1280px] mx-auto py-14 z-10 relative">
        <div className="flex items-center justify-between px-6">
          <div className="pl-6 max-md:pl-3">
            <CommonTitle as="h2" className="max-lg:text-3xl">
              Our Expertise
            </CommonTitle>
          </div>
        </div>

        <ExpertiseDesktopTab />

        <ExpertiseMobile />
      </div>
    </div>
  );
};
