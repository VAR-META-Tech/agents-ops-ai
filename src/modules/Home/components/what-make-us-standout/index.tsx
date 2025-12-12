import circleFrameWhiteV2 from "@/assets/images/circle-frame-white-v2.png";
import linearFull from "@/assets/images/linear-full.png";
import CommonAnimationContainer from "@/components/common/common-animation-container";
import { CommonTitle } from "@/components/common/common-title";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FEATURES } from "./utils/constants";

export const WhatMakesUsStandout = () => {
  return (
    <div className="bg-gradient-to-b from-[#F9F9F9] to-white relative overflow-hidden">
      <Image
        src={linearFull.src}
        className={cn(
          "absolute !left-[calc(30%)] max-lg:!top-[calc(10%)] max-lg:!left-[calc(50%-50px)] "
        )}
        alt="Ellipse Linear"
        fill
        sizes="100vw"
        priority
      />

      <div className={cn("relative")}>
        {/* <div
          className={cn(
            "bg-no-repeat bg-[size:1000px_1000px]",
            "[transform:rotate(250deg)] h-[1000px] w-[1000px] top-[10%] left-[calc(50%+180px)] absolute"
          )}
          style={{
            backgroundImage: `url(${
              circleFrameWhiteV2.src || circleFrameWhiteV2
            })`,
          }}
        /> */}

        <Image
          src={circleFrameWhiteV2.src}
          className={cn(
            "[transform:rotate(250deg)] top-[10%] left-[calc(50%+180px)] absolute max-md:hidden"
          )}
          alt="Circle Frame White V2"
          width={1000}
          height={1000}
          priority
        />
        
        <div className="max-w-[1280px] mx-auto py-14 text-white max-2xl:px-8 z-10 relative">
          <div className="mb-16 py-6">
            <CommonTitle as="h2" className="max-lg:text-3xl text-[#1E1E1E]">
              What Makes Us Standout
            </CommonTitle>
          </div>

          <div className="flex flex-col gap-16">
            {FEATURES.map((feature, index) => (
              <CommonAnimationContainer
                key={index}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="h-full"
              >
                <div
                  key={index}
                  className="flex items-start gap-6 max-md:gap-3"
                >
                  <div>{feature.icon}</div>
                  <div className="max-w-[524px]">
                    <h3 className="text-2xl font-semibold mb-3 max-lg:text-xl text-[#1E1E1E]">
                      {feature.title}
                    </h3>
                    <div className="text-lg font-normal leading-8 max-lg:text-lg text-[#1E1E1E]">
                      {feature.description}
                    </div>
                  </div>
                </div>
              </CommonAnimationContainer>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
