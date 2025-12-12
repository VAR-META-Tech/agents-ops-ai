"use client";

import heroEffects from "@/assets/lotties/hero-effects.json";
import { cn } from "@/lib/utils";
import Lottie from "lottie-react";
import React from "react";

export const LottieComponent = () => {
  return (
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
  );
};
