'use client';

import { handleScroll } from '@/lib/utils';
import React from 'react';
import { FOOTER_LINKS } from '..';

export const FooterLinks = () => {
  return (
    <nav aria-label='Footer navigation'>
      <ul className='flex flex-col gap-3 font-normal text-base leading-[26px]'>
        {FOOTER_LINKS.map((link) => (
          <li key={link.label}>
            <a
              href={`#${link.elId}`}
              onClick={(e) => {
                e.preventDefault();
                handleScroll(link.elId);
              }}
              className='cursor-pointer'
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
