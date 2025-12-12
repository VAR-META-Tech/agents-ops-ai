"use client";

import bgPolygon from "@/assets/images/bg-polygon.png";
import netBackground from "@/assets/images/net-background.png";
import { CommonChip } from "@/components/common/common-chip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";
import { TABS, TABS_CONTENT } from "../utils/contants";

export const ExpertiseDesktopTab = () => {
  const [activeTab, setActiveTab] = React.useState("expertise-1");

  return (
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
                  "origin-left text-lg break-normal whitespace-break-spaces text-start text-[#1E1E1E]"
                  // {
                  //   "text-xl transition-all duration-200":
                  //     tab.value === activeTab,
                  // }
                )}
                viewport={{ once: false }}
                transition={{ duration: 0.3 }}
                animate={{ scale: tab.value === activeTab ? 1.08 : 1 }}
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
                <h3 className="text-4xl font-semibold leading-12 mb-4">
                  {tab.title}
                </h3>
                <div className="text-lg font-normal leading-8">
                  {tab.description}
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
};
