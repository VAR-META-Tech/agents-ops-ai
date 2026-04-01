'use client';

import bgPolygon from '@/assets/images/bg-polygon.png';
import netBackground from '@/assets/images/net-background.png';
import { CommonChip } from '@/components/common/common-chip';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import React from 'react';
import { TABS, TABS_CONTENT } from '../utils/contants';

export const ExpertiseDesktopTab = () => {
  const [activeTab, setActiveTab] = React.useState('expertise-1');

  return (
    <div className='mt-10 rounded-[48px] border border-[#E6E6E6] bg-white max-xl:hidden'>
      <Tabs
        className='flex-row justify-between bg-cover bg-no-repeat'
        style={{
          backgroundImage: `url(${netBackground.src || netBackground})`,
        }}
        value={activeTab}
        onValueChange={setActiveTab}
      >
        <TabsList className='h-[595px] w-full min-w-[100px] max-w-full flex-col items-start bg-transparent p-10 max-xl:p-6'>
          {TABS.map((tab, index) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className={cn(
                'w-[576px] justify-start border-0 pl-6 font-normal text-xl leading-8 shadow-none! data-[state=active]:font-semibold',
                `group gap-8 bg-[size:100%_100%] bg-transparent! bg-no-repeat`,
                'max-xl:w-full max-xl:max-w-full max-xl:gap-3 max-xl:rounded-3xl max-xl:pr-8 max-xl:pl-3'
              )}
              style={{
                backgroundImage: `url(${tab.value === activeTab ? bgPolygon.src || bgPolygon : 'transparent'})`,
              }}
            >
              <CommonChip className='h-12 min-h-12 w-12 min-w-12 bg-white'>{index + 1}</CommonChip>
              <motion.div
                className={cn(
                  'origin-left whitespace-break-spaces break-normal text-start text-[#1E1E1E] text-lg'
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

        <div className='p-6 max-xl:w-full'>
          {TABS_CONTENT.map((tab) => (
            <TabsContent
              key={tab.value}
              value={tab.value}
              className='h-full min-w-[540px] max-w-[576px] rounded-3xl border border-[#E6E6E6] bg-white p-8 max-xl:max-w-full'
            >
              <motion.div
                key={tab.value}
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
                className='h-full'
              >
                <h3 className='mb-4 font-semibold text-4xl leading-12'>{tab.title}</h3>
                <div className='font-normal text-lg leading-8'>{tab.description}</div>
              </motion.div>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
};
