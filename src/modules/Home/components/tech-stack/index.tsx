import techStackImage from '@/assets/images/tech-stack.png';
import { CommonTitle } from '@/components/common/common-title';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';

export const TechStack = () => {
  return (
    <div className='min-w-[320px] bg-white px-6 py-48'>
      <div className='mx-auto flex max-w-[1280px] items-center justify-between max-xl:flex-col'>
        <CommonTitle as='h2' className='max-lg:text-3xl'>
          Our Techstack
        </CommonTitle>

        <Separator className='!h-[216px] ml-12 max-xl:hidden' orientation='vertical' />

        <Separator className='my-12 hidden max-xl:block' orientation='horizontal' />

        <Image src={techStackImage.src} alt='Tech Stack' width={748} height={204} priority />
      </div>
    </div>
  );
};
