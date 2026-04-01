import dottedArtBg from '@/assets/images/dotted-art-bg.png';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';
import { TestimonialCarousel } from './components/testimonial-carousel';

export const Testimonials = () => {
  return (
    <div className={cn('relative min-h-[480px] min-w-[320px] overflow-hidden bg-white pt-[100px] pb-4')}>
      <Image
        src={dottedArtBg.src}
        className='absolute top-[50%] left-[50%] min-h-[650px] min-w-[600px] translate-x-[-50%] translate-y-[-50%]'
        objectFit='cover'
        alt='Dotted Art BG'
        width={600}
        height={650}
        priority
      />

      <TestimonialCarousel />
    </div>
  );
};
