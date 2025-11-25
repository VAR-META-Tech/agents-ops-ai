"use client";

import dottedArtBg from "@/assets/images/dotted-art-bg.png";
import CommonAnimationContainer from "@/components/common/common-animation-container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import React from "react";
import { TESTIMONIALS } from "./utils/constants";

export const Testimonials = () => {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const onSelectHandler = (api: CarouselApi, index: number) => {
    api?.scrollTo(index);
  };

  React.useEffect(() => {
    api?.on("scroll", () => {
      setCurrentIndex(api.selectedScrollSnap() || 0);
    });
  }, [api]);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    const autoplay = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => {
      clearInterval(autoplay);
    };
  }, [api]);

  return (
    <div
      className={cn(
        "bg-white min-h-[480px] min-w-[320px] pt-[100px] pb-4",
        "bg-no-repeat bg-[position:50%_14%] bg-[length:1400px_900px]"
      )}
      style={{
        backgroundImage: `url(${dottedArtBg.src || dottedArtBg})`,
      }}
    >
      <Carousel
        className="w-full max-w-[1280px] mx-auto"
        opts={{ loop: true, active: true }}
        setApi={setApi}
      >
        <h2 className="text-2xl font-semibold leading-9 text-[#1E1E1EAD] text-center mb-8">
          Testimonials
        </h2>

        <CarouselContent className="w-full mb-6 px-2 max-sm:m-0">
          {TESTIMONIALS.map((testimonial, index) => (
            <CarouselItem key={index} className="">
              <div className="max-w-[800px] mx-auto max-sm:w-full max-sm:px-2">
                <div className="text-2xl font-semibold leading-8 text-center">
                  {testimonial.quote}
                </div>
                <div className="text-lg font-normal leading-8 text-center mt-5">
                  <div>{testimonial.title}</div>
                  <div className="flex justify-center items-center mt-5">
                    {" "}
                    {testimonial.logo}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CommonAnimationContainer className="flex gap-3 justify-center items-center mt-4">
          {TESTIMONIALS.map((_, index) => (
            <div
              key={index}
              className="w-3 h-3 rounded-full bg-[#7C89AE]"
              onClick={() => onSelectHandler(api!, index)}
            >
              {index === currentIndex && (
                <div className="w-3 h-3 rounded-full bg-black" />
              )}
            </div>
          ))}
        </CommonAnimationContainer>
      </Carousel>
    </div>
  );
};
