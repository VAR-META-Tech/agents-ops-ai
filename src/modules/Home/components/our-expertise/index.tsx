"use client";

import bgPolygon from "@/assets/images/bg-polygon.png";
import ellipseLinear from "@/assets/images/ellipse-linear.png";
import netBackground from "@/assets/images/net-background.png";
import { CommonChip } from "@/components/common/common-chip";
import { CommonTitle } from "@/components/common/common-title";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import { TABS, TABS_CONTENT } from "./utils/contants";

export const OurExpertise = () => {
  const [activeTab, setActiveTab] = React.useState("expertise-1");

  const container = useRef(null);

  return (
    <div className="px-6 relative">
      <div
        className={cn(
          "bg-no-repeat bg-[size:1000px_1000px] w-full h-full bg-no-repeat border border-[#E6E6E6]",
          "absolute top-[-400px] left-[50%] translate-x-[-950px] w-[1000px] h-[1000px]"
        )}
        style={{
          backgroundImage: `url(${ellipseLinear.src || ellipseLinear})`,
        }}
      />

      <div className="max-w-[1280px] mx-auto py-14 z-10 relative">
        <div className="flex items-center justify-between px-6">
          <div className="pl-6 max-md:pl-3">
            <CommonTitle className="max-lg:text-3xl">Our Expertise</CommonTitle>
          </div>
        </div>

        <div className="bg-white rounded-[48px] border border-[#E6E6E6] mt-10 max-xl:hidden">
          <Tabs
            className="flex-row justify-between bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${netBackground.src || netBackground})`,
            }}
            value={activeTab}
            onValueChange={setActiveTab}
          >
            <TabsList className="flex-col items-start bg-transparent p-10 h-[595px] max-w-full w-full min-w-[100px] max-xl:p-6">
              {TABS.map((tab, index) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className={cn(
                    "text-xl font-normal w-[576px] pl-6 justify-start leading-8 data-[state=active]:font-semibold border-0 shadow-none!",
                    `bg-transparent! gap-8 group bg-no-repeat bg-[size:100%_100%]`,
                    "max-xl:max-w-full max-xl:w-full max-xl:gap-3 max-xl:rounded-3xl max-xl:pl-3 max-xl:pr-8"
                  )}
                  style={{
                    backgroundImage: `url(${
                      tab.value === activeTab
                        ? bgPolygon.src || bgPolygon
                        : "transparent"
                    })`,
                  }}
                >
                  <CommonChip className="w-12 min-w-12 h-12 min-h-12 bg-white">
                    {index + 1}
                  </CommonChip>
                  <motion.div
                    className={cn(
                      "origin-left text-lg max-2xl:text-xl break-normal whitespace-break-spaces text-start text-[#1E1E1E]",
                      {
                        "text-xl transition-all duration-200":
                          tab.value === activeTab,
                      }
                    )}
                    viewport={{ once: false }}
                    transition={{ duration: 0.3 }}
                    initial={false}
                  >
                    {tab.label}
                  </motion.div>
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="p-6 max-xl:w-full">
              {TABS_CONTENT.map((tab) => (
                <TabsContent
                  key={tab.value}
                  value={tab.value}
                  className="max-w-[576px] min-w-[540px] bg-white border border-[#E6E6E6] rounded-3xl h-full p-8 max-xl:max-w-full"
                >
                  <motion.div
                    key={tab.value}
                    initial={{ opacity: 0, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5 }}
                    className="h-full"
                  >
                    <div className="text-4xl font-semibold leading-12 mb-4">
                      {tab.title}
                    </div>
                    <div className="text-lg font-normal leading-8">
                      {tab.description}
                    </div>
                  </motion.div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>

        <div
          className={cn(
            "mt-10 bg-[#EFEFEF] border border-[#E6E6E6] rounded-[48px] p-3 pb-1 h-[570px] overflow-y-auto overscroll-auto",
            "[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] hidden max-xl:block"
          )}
        >
          {TABS_CONTENT.map((tab, i) => {
            return (
              <div
                key={tab.value}
                ref={container}
                style={{ top: `${i * 10}px` }}
                className={
                  "h-[500px] flex justify-center sticky bg-white border border-[#E6E6E6] rounded-[48px] items-start mb-3 max-sm:min-h-[500px] max-sm:h-fit"
                }
              >
                <div className="flex flex-col relative rounded-3xl p-[50px] max-sm:p-8 max-[354px]:!p-6">
                  <div className="h-full gap-[50px]">
                    <div className="flex items-center gap-4 mb-4 max-sm:items-start max-[354px]:mb-2">
                      <CommonChip className="w-10 min-w-10 h-10 min-h-10 text-base bg-white max-sm:w-8 max-sm:h-8 max-sm:min-w-8 max-sm:min-h-8">
                        {i + 1}
                      </CommonChip>
                      <div className="text-xl font-semibold leading-12 max-sm:leading-6 max-sm:text-lg max-sm:mt-1 max-[354px]:text-lg">
                        {tab.title}
                      </div>
                    </div>
                    <div className="text-lg font-normal leading-8 max-sm:text-base">
                      {tab.description}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
