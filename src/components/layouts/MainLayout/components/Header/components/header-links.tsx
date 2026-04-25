'use client';

import { handleScroll, scrollWithOffsetWhenReady } from '@/lib/utils';
import { ROUTES } from '@/utils/routes';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { NAV_LINKS } from '..';

export const HeaderLinks = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <ul className='flex items-center gap-5 font-medium text-base max-xl:hidden'>
      {NAV_LINKS.map((link) => (
        <li key={link.label}>
          <Link
            href={`${ROUTES.HOME}#${link.elId}`}
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
            className='cursor-pointer'
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
