'use client';

import heroEffects from '@/assets/lotties/hero-effects.json';
import { cn } from '@/lib/utils';
import Lottie from 'lottie-react';
import React from 'react';

export const LottieComponent = () => {
  return (
    <div
      className={cn(
        'mx-auto h-[470px] max-w-[1280px] p-16 pt-24',
        'relative z-10 mt-12 flex items-center justify-center'
      )}
    >
      <Lottie
        animationData={heroEffects}
        className='absolute top-[50%] left-[50%] w-[400px] translate-x-[calc(-50%+20px)] translate-y-[calc(-50%+120px)]'
      />
    </div>
  );
};
