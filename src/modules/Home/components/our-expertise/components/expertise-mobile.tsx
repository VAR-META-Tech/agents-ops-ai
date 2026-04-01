'use client';

import { CommonChip } from '@/components/common/common-chip';
import { cn } from '@/lib/utils';
import React, { useRef } from 'react';
import { TABS_CONTENT } from '../utils/contants';

export const ExpertiseMobile = () => {
  const container = useRef(null);

  return (
    <div
      className={cn(
        'mt-10 h-[570px] overflow-y-auto overscroll-auto rounded-[48px] border border-[#E6E6E6] bg-[#EFEFEF] p-3 pb-1',
        'hidden [-ms-overflow-style:none] [scrollbar-width:none] max-xl:block [&::-webkit-scrollbar]:hidden'
      )}
    >
      {TABS_CONTENT.map((tab, i) => {
        return (
          <div
            key={tab.value}
            ref={container}
            style={{ top: `${i * 10}px` }}
            className={
              'sticky mb-3 flex h-[500px] items-start justify-center rounded-[48px] border border-[#E6E6E6] bg-white max-sm:h-fit max-sm:min-h-[500px]'
            }
          >
            <div className='max-[354px]:!p-6 relative flex flex-col rounded-3xl p-[50px] max-sm:p-8'>
              <div className='h-full gap-[50px]'>
                <div className='mb-4 flex items-center gap-4 max-sm:items-start max-[354px]:mb-2'>
                  <CommonChip className='h-10 min-h-10 w-10 min-w-10 bg-white text-base max-sm:h-8 max-sm:min-h-8 max-sm:w-8 max-sm:min-w-8'>
                    {i + 1}
                  </CommonChip>
                  <h3 className='font-semibold text-xl leading-12 max-sm:mt-1 max-sm:text-lg max-sm:leading-6 max-[354px]:text-lg'>
                    {tab.title}
                  </h3>
                </div>
                <div className='font-normal text-lg leading-8 max-sm:text-base'>{tab.description}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
