import agentHeroText from "@/assets/images/agent-hero-text.png";
import circleFrame from "@/assets/images/circle-frame-white-v2.png";
import heroImage from "@/assets/images/hero-image.png";
import linearBg from "@/assets/images/linear-blur.png";
import netBackground from "@/assets/images/net-background.png";
import { CommonTitle } from "@/components/common/common-title";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { BtnGroup } from "./components/btn-group";
import { LottieComponent } from "./components/lottie";

export const Hero = () => {
  return (
    <div className="relative mb-24">
      <div>
        <Image
          src={linearBg.src}
          className="object-cover"
          fill
          alt="Hero"
          sizes="100vw"
          priority
        />
      </div>
      <div className="pt-20 min-w-[320px]">
        {/* <Image
          src={circleFrame.src}
          className="object-cover absolute top-[50%] left-[50%] translate-x-[calc(-50%)] translate-y-[calc(-50%+500px)] animate-spin-slow min-w-[1150px] min-h-[1150px]"
          alt="Circle Frame"
          width={1150}
          height={1150}
          priority
        /> */}
        <div>
          <div className="relative z-10 min-w-[320px] max-sm:px-3">
            <h1 className="text-5xl font-semibold flex items-center justify-center gap-2 max-lg:flex-col max-lg:text-3xl">
              Unlock the Power of
              <img
                src={agentHeroText.src}
                alt="AI Agents"
                className="mt-2 max-lg:w-[156px] object-contain max-lg:mb-2"
              />
            </h1>
            <CommonTitle
              as="h2"
              className="text-5xl text-center mt-2 max-lg:text-3xl"
            >
              Transform Your Business Today
            </CommonTitle>
            <p className="text-2xl font-normal leading-9 text-center mt-6 max-lg:text-lg">
              AI agents can automate 60-70% of employee time spent on tasks
            </p>
          </div>

          <BtnGroup />

          {/* <LottieComponent /> */}
        </div>
      </div>

      <div className="h-[550px] relative mt-20 max-xl:h-fit max-xl:pb-8">
        <div
          className={cn(
            "border border-[#E6E6E6] rounded-2xl sm:rounded-[32px] lg:rounded-[48px] p-4 sm:p-6 bg-cover bg-no-repeat absolute left-1/2 -translate-x-1/2 top-[0%]",
            "h-fit bg-white w-[min(1280px,calc(100%-2rem))] sm:w-[min(1280px,calc(100%-3rem))] max-h-[620px] max-xl:relative ",
          )}
          style={{
            backgroundImage: `url(${netBackground.src || netBackground})`,
          }}
        >
          <Image
            src={heroImage.src}
            className="object-cover relative rounded-xl sm:rounded-2xl lg:rounded-[32px] w-full h-auto max-h-[min(572px,52vh)] sm:max-h-[572px]"
            alt="Hero"
            width={1232}
            height={572}
          />
        </div>
      </div>
    </div>
  );
};


{/* <div className="h-[620px]">
        <div
          className={cn(
            "border border-[#E6E6E6] rounded-2xl sm:rounded-[32px] lg:rounded-[48px] p-4 sm:p-6 bg-cover bg-no-repeat",
            "absolute left-1/2 -translate-x-1/2 bottom-[-8%] h-fit bg-white",
            "w-[min(1280px,calc(100%-2rem))] sm:w-[min(1280px,calc(100%-3rem))] max-h-[620px]",
          )}
          style={{
            backgroundImage: `url(${netBackground.src || netBackground})`,
          }}
        >
          <Image
            src={heroImage.src}
            className="object-cover relative rounded-xl sm:rounded-2xl lg:rounded-[32px] w-full h-auto max-h-[min(572px,52vh)] sm:max-h-[572px]"
            alt="Hero"
            width={1232}
            height={572}
          />
        </div>
      </div> */}
