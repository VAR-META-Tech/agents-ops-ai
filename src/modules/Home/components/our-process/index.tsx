'use client';

import netBackground from '@/assets/images/net-background.png';
import CommonAnimationContainer from '@/components/common/common-animation-container';
import { CommonChip } from '@/components/common/common-chip';
import { CommonTitle } from '@/components/common/common-title';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import React from 'react';
import { WORKFLOW_STEPS } from './utils/constants';

export const OurProcess = () => {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(true);

  const handlePrevious = () => {
    api?.scrollPrev();
    setCanScrollPrev(api?.canScrollPrev() || false);
    setCanScrollNext(api?.canScrollNext() || true);
  };

  const handleNext = () => {
    api?.scrollNext();
    setCanScrollNext(api?.canScrollNext() || false);
    setCanScrollPrev(api?.canScrollPrev() || true);
  };

  React.useEffect(() => {
    api?.on('scroll', () => {
      setCanScrollPrev(api?.canScrollPrev());
      setCanScrollNext(api?.canScrollNext());
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
    <div className='bg-white px-6'>
      <div className='mx-auto max-w-[1280px] py-10'>
        <div className='mb-10 flex items-center justify-between pl-6 max-md:min-w-[320px] max-md:pl-3'>
          <CommonTitle as='h2' className='max-lg:text-3xl'>
            Our Process
          </CommonTitle>

          <div className='flex gap-8 max-sm:gap-4'>
            <Button
              onClick={handlePrevious}
              variant='outline'
              size='icon'
              className='!border-[#7C89AE] hover:!border-[#7C89AE] h-14 w-14 rounded-full max-md:h-10 max-md:w-10'
              disabled={!canScrollPrev}
            >
              <ArrowLeft className='!w-6 !h-6' />
            </Button>
            <Button
              onClick={handleNext}
              variant='outline'
              size='icon'
              className='!border-[#7C89AE] hover:!border-[#7C89AE] h-14 w-14 rounded-full max-md:h-10 max-md:w-10'
              disabled={!canScrollNext}
            >
              <ArrowRight className='!w-6 !h-6' />
            </Button>
          </div>
        </div>

        <div
          className={cn(
            'bg-cover bg-no-repeat p-8 pr-0',
            'min-w-[320px] rounded-[48px] border border-[#E6E6E6] max-sm:p-4'
          )}
          style={{
            backgroundImage: `url(${netBackground.src || netBackground})`,
          }}
        >
          <Carousel
            opts={{
              align: 'start',
              loop: true,
              active: true,
            }}
            className='w-full'
            setApi={setApi}
          >
            <CarouselContent className='!max-w-[1280px] w-full'>
              {WORKFLOW_STEPS.map((step, index) => (
                <CarouselItem key={index} className='max-sm:!max-w-[300px] max-w-[515px]'>
                  <CommonAnimationContainer
                    key={index}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className='h-full'
                  >
                    <div className='p-1'>
                      <Card className='!bg-[#1E1E1E] max-sm:!h-[570px] relative min-h-[460px] w-[500px] rounded-4xl text-white max-sm:w-[280px]'>
                        <CardHeader className='flex flex-row items-start gap-4'>
                          <CommonChip className='h-[68px] min-h-[68px] w-[68px] min-w-[68px] bg-transparent text-white max-sm:h-10 max-sm:min-h-10 max-sm:w-10 max-sm:min-w-10'>
                            {step.id}
                          </CommonChip>
                          <div className='flex h-16 flex-col justify-between'>
                            <CardDescription className='font-normal text-lg text-white max-sm:text-lg'>
                              {step.subtitle}
                            </CardDescription>
                            <CardTitle className='font-semibold text-4xl leading-12 max-sm:text-2xl'>
                              {step.title}
                            </CardTitle>
                          </div>
                        </CardHeader>

                        <CardContent className='flex flex-col pt-6'>
                          <span className='min-h-[250px] font-normal text-lg leading-8'>{step.description}</span>
                          <span className='flex justify-end max-sm:hidden'>{step.icon}</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CommonAnimationContainer>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
