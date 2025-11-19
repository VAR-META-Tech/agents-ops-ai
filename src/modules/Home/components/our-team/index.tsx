import netBackground from "@/assets/images/net-background.png";
import CommonAnimationContainer from "@/components/common/common-animation-container";
import { CommonTitle } from "@/components/common/common-title";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { TEAM_MEMBERS } from "./utils/constants";

export const OurTeam = () => {
  return (
    <div className="bg-white px-6">
      <div className="max-w-[1280px] mx-auto py-20">
        <div className="mb-10 pl-6 max-md:pl-3">
          <CommonTitle className="max-lg:text-3xl">Our Team</CommonTitle>
        </div>

        <div
          className={cn(
            "grid grid-cols-[repeat(auto-fit,_minmax(320px,_1fr))] min-w-[320px] gap-6 text-[#1E1E1E] p-8 bg-[#E6E6E6]",
            "bg-cover bg-no-repeat rounded-[48px] border border-[#E6E6E6]",
            "max-sm:!grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] max-sm:p-5"
          )}
          style={{
            backgroundImage: `url(${netBackground.src || netBackground})`,
          }}
        >
          {TEAM_MEMBERS.map((member, index) => (
            <CommonAnimationContainer
              key={index}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="h-full"
            >
              <Card
                key={member.id}
                className="rounded-4xl bg-white min-h-[500px] h-full max-h-full max-2xl:min-h-[538px] max-sm:min-h-[400px]"
              >
                <CardHeader>{member.image}</CardHeader>
                <CardContent>
                  <CardTitle className="text-2xl font-semibold text-[#1E1E1E]">
                    {member.name}
                  </CardTitle>
                  <div className="text-xl font-normal my-1 text-[#1E1E1E]">
                    {member.title}
                  </div>
                  <div className="text-base font-normal leading-[26px] text-[#1E1E1EDB]">
                    {member.degree}
                  </div>
                  <div className="text-lg font-normal leading-8 mt-5 text-[#1E1E1E]">
                    {member.bio}
                  </div>
                </CardContent>
              </Card>
            </CommonAnimationContainer>
          ))}
        </div>
      </div>
    </div>
  );
};
