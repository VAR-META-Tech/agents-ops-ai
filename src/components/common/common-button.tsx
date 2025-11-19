import { cn } from "@/lib/utils";
import { type VariantProps } from "class-variance-authority";
import React from "react";
import { Button, buttonVariants } from "../ui/button";

interface ICommonButton
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  children?: React.ReactNode;
  buttonText?: string;
  icon?: React.ReactNode;
  className?: string;
}

export const CommonButton = ({
  children,
  className,
  ...props
}: ICommonButton) => {
  return (
    <Button className={cn("border !border-[#7C89AE] rounded-full h-10 cursor-pointer hover:text-[#1E1E1E] hover:!bg-[#f5f5f5]", className)} {...props} variant="outline">
      {children}
    </Button>
  );
};
