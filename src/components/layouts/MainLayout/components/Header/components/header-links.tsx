'use client';

import { handleScroll } from '@/lib/utils';
import { ROUTES } from '@/utils/routes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { NAV_LINKS } from '..';

export const HeaderLinks = () => {
  const pathname = usePathname();

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
