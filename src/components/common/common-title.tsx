import { cn } from "@/lib/utils";
import React from "react";

interface ICommonTitle {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const CommonTitle = ({
  children,
  className,
  as: Component = "h2",
}: ICommonTitle) => {
  return (
    <Component className={cn("text-4xl leading-12 font-semibold", className)}>
      {children}
    </Component>
  );
};
