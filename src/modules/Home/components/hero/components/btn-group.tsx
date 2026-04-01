'use client';

import { Icons } from '@/assets/icons';
import { CommonButton } from '@/components/common/common-button';
import { handleScroll } from '@/lib/utils';

export const BtnGroup = () => {
  return (
    <div className='relative z-10 mt-7 flex items-center justify-center gap-4'>
      <CommonButton
        className='!pr-3 !pl-4 !bg-[#1E1E1E] hover:!bg-[#343434] !text-white !flex !items-center !justify-center h-11 min-w-32 gap-1 text-sm'
        onClick={() => handleScroll('contact')}
      >
        <span>Contact us</span>
        <Icons.arrowTopRightWhiteIcon className='!w-5 !h-5' />
      </CommonButton>
      <CommonButton
        className='!pr-3 !pl-4 h-11 min-w-32 gap-1 text-sm'
        variant='outline'
        onClick={() => handleScroll('services')}
      >
        <span>Learn more</span>
        <Icons.arrowDownIcon className='!w-5 !h-5' />
      </CommonButton>
    </div>
  );
};
