"use client";

import netBackground from "@/assets/images/net-background.png";
import CommonAnimationContainer from "@/components/common/common-animation-container";
import { CommonChip } from "@/components/common/common-chip";
import { CommonTitle } from "@/components/common/common-title";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";
import { WORKFLOW_STEPS } from "./utils/constants";

export const OurProcess = () => {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(true);

  const handlePrevious = () => {
    api?.scrollPrev();
    setCanScrollPrev(api?.canScrollPrev() || false);
    setCanScrollNext(api?.canScrollNext() || true);
  };

  const handleNext = () => {
    api?.scrollNext();
    setCanScrollNext(api?.canScrollNext() || false);
    setCanScrollPrev(api?.canScrollPrev() || true);
  };

  React.useEffect(() => {
    api?.on("scroll", () => {
      setCanScrollPrev(api?.canScrollPrev());
      setCanScrollNext(api?.canScrollNext());
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
    <div className="bg-white px-6">
      <div className="max-w-[1280px] mx-auto py-10">
        <div className="mb-10 pl-6 flex items-center justify-between max-md:pl-3 max-md:min-w-[320px]">
          <CommonTitle className="max-lg:text-3xl">Our Process</CommonTitle>

          <div className="flex gap-8 max-sm:gap-4">
            <Button
              onClick={handlePrevious}
              variant="outline"
              size="icon"
              className="w-14 h-14 rounded-full !border-[#7C89AE] hover:!border-[#7C89AE] max-md:w-10 max-md:h-10"
              disabled={!canScrollPrev}
            >
              <ArrowLeft className="!w-6 !h-6" />
            </Button>
            <Button
              onClick={handleNext}
              variant="outline"
              size="icon"
              className="w-14 h-14 rounded-full !border-[#7C89AE] hover:!border-[#7C89AE] max-md:w-10 max-md:h-10"
              disabled={!canScrollNext}
            >
              <ArrowRight className="!w-6 !h-6" />
            </Button>
          </div>
        </div>

        <div
          className={cn(
            "p-8 pr-0 bg-cover bg-no-repeat",
            "border border-[#E6E6E6] rounded-[48px] min-w-[320px] max-sm:p-4"
          )}
          style={{
            backgroundImage: `url(${netBackground.src || netBackground})`,
          }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
              active: true,
            }}
            className="w-full"
            setApi={setApi}
          >
            <CarouselContent className="w-full !max-w-[1280px]">
              {WORKFLOW_STEPS.map((step, index) => (
                <CarouselItem
                  key={index}
                  className="max-w-[515px] max-sm:!max-w-[300px]"
                >
                  <CommonAnimationContainer
                    key={index}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="h-full"
                  >
                    <div className="p-1">
                      <Card className="min-h-[460px] w-[500px] relative !bg-[#1E1E1E] text-white rounded-4xl max-sm:w-[280px] max-sm:!h-[570px]">
                        <CardHeader className="flex flex-row items-start gap-4">
                          <CommonChip className="w-[68px] h-[68px] min-w-[68px] min-h-[68px] bg-transparent text-white max-sm:min-w-10 max-sm:w-10 max-sm:min-h-10 max-sm:h-10">
                            {step.id}
                          </CommonChip>
                          <div className="h-16 flex flex-col justify-between">
                            <CardDescription className="text-lg font-normal text-white max-sm:text-lg">
                              {step.subtitle}
                            </CardDescription>
                            <CardTitle className="text-4xl font-semibold leading-12 max-sm:text-2xl">
                              {step.title}
                            </CardTitle>
                          </div>
                        </CardHeader>

                        <CardContent className="flex flex-col pt-6">
                          <span className="text-lg font-normal leading-8 min-h-[250px]">
                            {step.description}
                          </span>
                          <span className="flex justify-end max-sm:hidden">
                            {step.icon}
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                  </CommonAnimationContainer>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
