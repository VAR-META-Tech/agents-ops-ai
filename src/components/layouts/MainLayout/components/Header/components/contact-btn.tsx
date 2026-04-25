'use client';

import { Icons } from '@/assets/icons';
import { CommonButton } from '@/components/common/common-button';
import { handleScroll, scrollWithOffsetWhenReady } from '@/lib/utils';
import { ROUTES } from '@/utils/routes';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

export const ContactBtn = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <CommonButton
      className='!pr-3 !pl-4 ml-5 h-11 min-w-32 gap-1 text-sm max-sm:hidden max-xl:ml-2'
      variant='outline'
      onClick={() => {
        if (pathname === ROUTES.HOME) {
          handleScroll('contact');
        } else {
          router.push(ROUTES.HOME);
          scrollWithOffsetWhenReady('contact');
        }
      }}
    >
      <span>Contact us</span>
      <Icons.arrowUpRightIcon className='!w-5 !h-5' />
    </CommonButton>
  );
};
