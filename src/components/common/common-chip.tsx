import { cn } from "@/lib/utils";
import React from "react";

interface ICommonChip {
  children: React.ReactNode;
  className?: string;
}

export const CommonChip = ({ children, className }: ICommonChip) => {
  return (
    <div
      className={cn(
        "text-[#1E1E1EDB] text-2xl font-normal leading-9 rounded-full w-16 h-16 min-w-16 min-h-16 flex items-center justify-center border border-[#E6E6E6]",
        className
      )}
    >
      {children}
    </div>
  );
};
