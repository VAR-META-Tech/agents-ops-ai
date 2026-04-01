'use client';

import { Icons } from '@/assets/icons';
import { CommonButton } from '@/components/common/common-button';
import { handleScroll } from '@/lib/utils';
import React from 'react';

export const ContactBtn = () => {
  return (
    <CommonButton
      className='!pr-3 !pl-4 ml-5 h-11 min-w-32 gap-1 text-sm max-sm:hidden max-xl:ml-2'
      variant='outline'
      onClick={() => handleScroll('contact')}
    >
      <span>Contact us</span>
      <Icons.arrowUpRightIcon className='!w-5 !h-5' />
    </CommonButton>
  );
};
