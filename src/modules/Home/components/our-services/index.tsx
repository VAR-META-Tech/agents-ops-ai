import ellipseLinear from '@/assets/images/ellipse-linear.png';
import CommonAnimationContainer from '@/components/common/common-animation-container';
import { CommonChip } from '@/components/common/common-chip';
import { CommonTitle } from '@/components/common/common-title';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { SERVICES } from './utils/constants';

export const OurServices = () => {
  return (
    <div className='relative px-6 py-14'>
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

      <div className='relative z-10 mx-auto max-w-[1280px]'>
        <div className='flex items-center justify-between'>
          <CommonTitle as='h2' className='pl-6 max-md:pl-3 max-lg:text-3xl'>
            Our Services
          </CommonTitle>
        </div>

        <div className='mt-10 grid grid-cols-2 gap-7 max-md:grid-cols-1'>
          {SERVICES.map((service, index) => (
            <CommonAnimationContainer
              key={service.no}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className='h-full'
            >
              <Card className='h-full rounded-[44px] bg-white px-2 pb-8 text-[#1E1E1E]'>
                <CardHeader className='flex flex-row items-center justify-between gap-4'>
                  <CommonChip className='h-[68px] min-h-[68px] w-[68px] min-w-[68px]'>{service.no}</CommonChip>
                  <div className='h-[68px] min-h-[68px] w-[68px] min-w-[68px]'>{service.icon}</div>
                </CardHeader>
                <CardContent>
                  <h3 className='mb-4 font-semibold text-xl'>{service.title}</h3>

                  <p className='font-normal text-lg leading-8'>{service.description}</p>
                </CardContent>
              </Card>
            </CommonAnimationContainer>
          ))}
        </div>
      </div>
    </div>
  );
};
