"use client";

import { Icons } from "@/assets/icons";
import { CommonButton } from "@/components/common/common-button";
import { handleScroll } from "@/lib/utils";
import React from "react";

export const ContactBtn = () => {
  return (
    <CommonButton
      className="ml-5 min-w-32 h-11 text-sm !pr-3 !pl-4 gap-1 max-xl:ml-2 max-sm:hidden"
      variant="outline"
      onClick={() => handleScroll("contact")}
    >
      <span>Contact us</span>
      <Icons.arrowUpRightIcon className="!w-5 !h-5" />
    </CommonButton>
  );
};
