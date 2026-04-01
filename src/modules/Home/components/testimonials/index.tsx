import dottedArtBg from '@/assets/images/dotted-art-bg.png';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';
import { TestimonialCarousel } from './components/testimonial-carousel';

export const Testimonials = () => {
  return (
    <div className={cn('relative min-h-[480px] min-w-[320px] overflow-hidden bg-white pt-[100px] pb-20')}>
      <Image
        src={dottedArtBg.src}
        className='absolute top-[50%] left-[50%] min-h-[480px] min-w-[430px] translate-x-[-50%] translate-y-[-50%] opacity-60'
        objectFit='cover'
        alt='Dotted Art BG'
        width={430}
        height={480}
        priority
      />

      <TestimonialCarousel />
    </div>
  );
};
