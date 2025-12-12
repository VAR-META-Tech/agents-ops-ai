import dottedArtBg from "@/assets/images/dotted-art-bg.png";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { TestimonialCarousel } from "./components/testimonial-carousel";

export const Testimonials = () => {
  return (
    <div
      className={cn(
        "bg-white min-h-[480px] min-w-[320px] pt-[100px] pb-4 relative overflow-hidden"
      )}
    >
      <Image
        src={dottedArtBg.src}
        className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] min-w-[600px] min-h-[650px]"
        objectFit="cover"
        alt="Dotted Art BG"
        width={600}
        height={650}
        priority
      />

      <TestimonialCarousel />
    </div>
  );
};
