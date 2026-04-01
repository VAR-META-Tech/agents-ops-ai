'use client';

import CommonAnimationContainer from '@/components/common/common-animation-container';
import { Carousel, type CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import React from 'react';
import { TESTIMONIALS } from '../utils/constants';

export const TestimonialCarousel = () => {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const onSelectHandler = (api: CarouselApi, index: number) => {
    api?.scrollTo(index);
  };

  React.useEffect(() => {
    api?.on('scroll', () => {
      setCurrentIndex(api.selectedScrollSnap() || 0);
    });
  }, [api]);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    const autoplay = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => {
      clearInterval(autoplay);
    };
  }, [api]);

  return (
    <Carousel className='mx-auto w-full max-w-[1280px]' opts={{ loop: true, active: true }} setApi={setApi}>
      <h2 className='mb-8 text-center font-semibold text-2xl text-[#1E1E1EAD] leading-9'>Testimonials</h2>

      <CarouselContent className='mb-6 w-full px-2 max-sm:m-0'>
        {TESTIMONIALS.map((testimonial, index) => (
          <CarouselItem key={index} className=''>
            <div className='mx-auto max-w-[800px] max-sm:w-full max-sm:px-2'>
              <div className='text-center font-semibold text-2xl leading-8'>{testimonial.quote}</div>
              <div className='mt-5 text-center font-normal text-lg leading-8'>
                <div>{testimonial.title}</div>
                <div className='mt-5 flex items-center justify-center'> {testimonial.logo}</div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CommonAnimationContainer className='mt-4 flex items-center justify-center gap-3' initial={{ opacity: 0, y: 0 }}>
        {TESTIMONIALS.map((_, index) => (
          <div key={index} className='h-3 w-3 rounded-full bg-[#7C89AE]' onClick={() => onSelectHandler(api!, index)}>
            {index === currentIndex && <div className='h-3 w-3 rounded-full bg-black' />}
          </div>
        ))}
      </CommonAnimationContainer>
    </Carousel>
  );
};
