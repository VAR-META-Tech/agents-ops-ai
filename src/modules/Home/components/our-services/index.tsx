import ellipseLinear from "@/assets/images/ellipse-linear.png";
import CommonAnimationContainer from "@/components/common/common-animation-container";
import { CommonChip } from "@/components/common/common-chip";
import { CommonTitle } from "@/components/common/common-title";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { SERVICES } from "./utils/constants";

export const OurServices = () => {
  return (
    <div className="py-14 px-6 relative">
      <div
        className={cn(
          "bg-no-repeat bg-[size:1000px_1000px] w-full h-full bg-no-repeat",
          "absolute top-[-400px] left-[50%] translate-x-[calc(-950px)] w-[1000px] h-[1000px]"
        )}
        style={{
          backgroundImage: `url(${ellipseLinear.src || ellipseLinear})`,
        }}
      />

      <div className="max-w-[1280px] mx-auto z-10 relative">
        <div className="flex items-center justify-between">
          <CommonTitle as="h2" className="pl-6 max-lg:text-3xl max-md:pl-3">
            Our Services
          </CommonTitle>
        </div>

        <div className="grid grid-cols-2 gap-7 mt-10 max-md:grid-cols-1">
          {SERVICES.map((service, index) => (
            <CommonAnimationContainer
              key={service.no}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="rounded-[44px] h-full pb-8 px-2 bg-white text-[#1E1E1E]">
                <CardHeader className="flex flex-row items-center justify-between gap-4">
                  <CommonChip className="w-[68px] h-[68px] min-w-[68px] min-h-[68px]">
                    {service.no}
                  </CommonChip>
                  <div className="w-[68px] h-[68px] min-w-[68px] min-h-[68px]">
                    {service.icon}
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-semibold mb-4">
                    {service.title}
                  </h3>

                  <p className="text-lg font-normal leading-8">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </CommonAnimationContainer>
          ))}
        </div>
      </div>
    </div>
  );
};
