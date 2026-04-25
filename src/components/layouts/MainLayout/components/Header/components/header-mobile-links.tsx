'use client';

import { DropdownMenuGroup, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { handleScroll, scrollWithOffsetWhenReady } from '@/lib/utils';
import { ROUTES } from '@/utils/routes';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { NAV_LINKS } from '..';

export const HeaderMobileLinks = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <DropdownMenuGroup>
      {NAV_LINKS.map((link) => (
        <DropdownMenuItem key={link.label} className='cursor-pointer p-1 text-base hover:bg-[#dadada]'>
          <div
            className='w-full'
            onClick={(e) => {
              if (pathname === ROUTES.HOME) {
                e.preventDefault();
                handleScroll(link.elId);
              } else {
                e.preventDefault();
                router.push(`${ROUTES.HOME}#${link.elId}`);
                scrollWithOffsetWhenReady(link.elId);
              }
            }}
          >
            {link.label}
          </div>
        </DropdownMenuItem>
      ))}
    </DropdownMenuGroup>
  );
};
