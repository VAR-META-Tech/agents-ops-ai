"use client";

import { CommonChip } from "@/components/common/common-chip";
import { cn } from "@/lib/utils";
import React, { useRef } from "react";
import { TABS_CONTENT } from "../utils/contants";

export const ExpertiseMobile = () => {
  const container = useRef(null);

  return (
    <div
      className={cn(
        "mt-10 bg-[#EFEFEF] border border-[#E6E6E6] rounded-[48px] p-3 pb-1 h-[570px] overflow-y-auto overscroll-auto",
        "[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] hidden max-xl:block"
      )}
    >
      {TABS_CONTENT.map((tab, i) => {
        return (
          <div
            key={tab.value}
            ref={container}
            style={{ top: `${i * 10}px` }}
            className={
              "h-[500px] flex justify-center sticky bg-white border border-[#E6E6E6] rounded-[48px] items-start mb-3 max-sm:min-h-[500px] max-sm:h-fit"
            }
          >
            <div className="flex flex-col relative rounded-3xl p-[50px] max-sm:p-8 max-[354px]:!p-6">
              <div className="h-full gap-[50px]">
                <div className="flex items-center gap-4 mb-4 max-sm:items-start max-[354px]:mb-2">
                  <CommonChip className="w-10 min-w-10 h-10 min-h-10 text-base bg-white max-sm:w-8 max-sm:h-8 max-sm:min-w-8 max-sm:min-h-8">
                    {i + 1}
                  </CommonChip>
                  <h3 className="text-xl font-semibold leading-12 max-sm:leading-6 max-sm:text-lg max-sm:mt-1 max-[354px]:text-lg">
                    {tab.title}
                  </h3>
                </div>
                <div className="text-lg font-normal leading-8 max-sm:text-base">
                  {tab.description}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
