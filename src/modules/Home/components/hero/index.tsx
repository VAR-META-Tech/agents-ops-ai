"use client";

import { Icons } from "@/assets/icons";
import agentHeroText from "@/assets/images/agent-hero-text.png";
import circleFrame from "@/assets/images/circle-frame-white-v2.png";
import linearBg from "@/assets/images/linear.png";
import heroEffects from "@/assets/lotties/hero-effects.json";
import { CommonButton } from "@/components/common/common-button";
import { CommonTitle } from "@/components/common/common-title";
import { cn, handleScroll } from "@/lib/utils";
import Lottie from "lottie-react";

export const Hero = () => {
  return (
    <div
      className="bg-no-repeat bg-[size:100%_100%] bg-[position:50%_200px] overflow-hidden"
      style={{
        backgroundImage: `url(${linearBg.src || linearBg})`,
      }}
    >
      {" "}
      <div className="pt-20 min-w-[320px] relative">
        <div
          className={cn(
            "bg-no-repeat bg-[size:1150px_1150px]",
            "h-[1150px] w-[1150px] top-[50%] left-[50%] translate-x-[calc(-50%)] translate-y-[calc(-50%+500px)] absolute animate-spin-slow"
          )}
          style={{
            backgroundImage: `url(${circleFrame.src || circleFrame})`,
          }}
        />
        <div>
          <div className="relative z-10 min-w-[320px] max-sm:px-3">
            <h1 className="text-5xl font-semibold flex items-center justify-center gap-2 max-lg:flex-col max-lg:text-3xl">
              Unlock the Power of
              <img
                src={agentHeroText.src}
                className="mt-2 max-lg:w-[156px] object-contain max-lg:mb-2"
              />
            </h1>
            <CommonTitle className="text-5xl text-center mt-2 max-lg:text-3xl">
              Transform Your Business Today
            </CommonTitle>
            <p className="text-2xl font-normal leading-9 text-center mt-6 max-lg:text-lg">
              AI agents can automate 60-70% of employee time spent on tasks
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 mt-10 relative z-10">
            <CommonButton
              className="min-w-32 h-11 text-sm !pr-3 !pl-4 gap-1 !bg-[#1E1E1E] hover:!bg-[#343434] !text-white !flex !items-center !justify-center"
              onClick={() => handleScroll("contact")}
            >
              <span>Contact us</span>
              <Icons.arrowTopRightWhiteIcon className="!w-5 !h-5" />
            </CommonButton>
            <CommonButton
              className="min-w-32 h-11 text-sm !pr-3 !pl-4 gap-1"
              variant="outline"
              onClick={() => handleScroll("services")}
            >
              <span>Learn more</span>
              <Icons.arrowDownIcon className="!w-5 !h-5" />
            </CommonButton>
          </div>

          <div
            className={cn(
              "max-w-[1280px] mx-auto p-16 pt-24 h-[470px]",
              "flex items-center justify-center mt-12 relative z-10"
            )}
          >
            <Lottie
              animationData={heroEffects}
              className="w-[400px] absolute top-[50%] left-[50%] translate-x-[calc(-50%+20px)] translate-y-[calc(-50%+120px)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
