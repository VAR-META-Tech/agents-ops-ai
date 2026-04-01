import ellipseLinear from '@/assets/images/ellipse-linear.png';
import { CommonTitle } from '@/components/common/common-title';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';
import { ExpertiseDesktopTab } from './components/expertise-desktop-tab';
import { ExpertiseMobile } from './components/expertise-mobile';

export const OurExpertise = () => {
  return (
    <div className='relative px-6'>
      <Image
        src={ellipseLinear.src}
        className={cn(
          'absolute top-[-400px] left-[50%] translate-x-[calc(-950px)] object-cover',
          'max-sm:top-[-100px] max-sm:left-[900px] max-lg:top-[-250px] max-lg:left-[750px]'
        )}
        alt='Ellipse Linear'
        width={1000}
        height={1000}
        priority
      />

      <div className='relative z-10 mx-auto max-w-[1280px] py-14'>
        <div className='flex items-center justify-between px-6'>
          <div className='pl-6 max-md:pl-3'>
            <CommonTitle as='h2' className='max-lg:text-3xl'>
              Our Expertise
            </CommonTitle>
          </div>
        </div>

        <ExpertiseDesktopTab />

        <ExpertiseMobile />
      </div>
    </div>
  );
};
