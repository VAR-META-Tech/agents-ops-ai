"use client";

import { Icons } from "@/assets/icons";
import { CommonButton } from "@/components/common/common-button";
import { handleScroll } from "@/lib/utils";

export const BtnGroup = () => {
  return (
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
  );
};
