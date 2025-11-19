import netBackground from "@/assets/images/net-background.png";
import CommonAnimationContainer from "@/components/common/common-animation-container";
import { CommonChip } from "@/components/common/common-chip";
import { CommonTitle } from "@/components/common/common-title";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { HOW_IT_WORKS } from "./utils/constants";

export const HowItWork = () => {
  return (
    <div className="bg-white px-6">
      <div className="max-w-[1280px] mx-auto py-20">
        <div className="mb-10 pl-6 max-md:pl-3">
          <CommonTitle className="max-lg:text-3xl">How It Works</CommonTitle>
        </div>

        <div
          className={cn(
            "gap-4 border border-[#E6E6E6] rounded-[48px] p-8 bg-cover bg-no-repeat",
            "grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 max-sm:p-5"
          )}
          style={{
            backgroundImage: `url(${netBackground.src || netBackground})`,
          }}
        >
          {HOW_IT_WORKS.map((item, index) => (
            <CommonAnimationContainer
              key={index}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className="h-full"
            >
              <Card className="gap-2 rounded-4xl !p-4 bg-white border-[#E6E6E6]">
                <CardHeader className="!p-0">{item.image}</CardHeader>
                <CardContent className="!p-1">
                  <CardTitle>
                    <div className="flex items-center gap-2 mt-4 max-sm:gap-3">
                      <CommonChip className="w-7 h-7 min-w-7 min-h-7 bg-white text-base">
                        <span>{item.id}</span>
                      </CommonChip>
                      <span className="text-lg font-normal truncate text-[#1E1E1E]">
                        {item.title}
                      </span>
                    </div>
                  </CardTitle>
                </CardContent>
              </Card>
            </CommonAnimationContainer>
          ))}
        </div>
      </div>
    </div>
  );
};
