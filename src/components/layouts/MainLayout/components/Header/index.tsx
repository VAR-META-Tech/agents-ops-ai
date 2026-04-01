import { Icons } from '@/assets/icons';
import { CommonButton } from '@/components/common/common-button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { MenuIcon } from 'lucide-react';
import Link from 'next/link';
import { ContactBtn } from './components/contact-btn';
import { HeaderLinks } from './components/header-links';
import { HeaderMobileLinks } from './components/header-mobile-links';

export const NAV_LINKS = [
  {
    label: 'Services',
    elId: 'services',
  },
  {
    label: 'Expertise',
    elId: 'expertise',
  },
  {
    label: 'Our Strength',
    elId: 'our-strength',
  },
  {
    label: 'How It Works',
    elId: 'how-it-work',
  },
  {
    label: 'Our Process',
    elId: 'our-process',
  },
  {
    label: 'Our Team',
    elId: 'our-team',
  },
];

export const Header = () => {
  return (
    <header className='mx-auto flex h-[92px] max-w-[1280px] items-center justify-between max-2xl:px-6'>
      <Link href='/'>
        <Icons.agentOpsLogo />
      </Link>

      <nav className='flex w-full items-center justify-end gap-4 max-xl:justify-end' aria-label='Main navigation'>
        <HeaderLinks />

        <DropdownMenu>
          <DropdownMenuTrigger asChild className=''>
            <CommonButton
              className='hidden h-11 w-11 items-center justify-center rounded-xl max-xl:block'
              variant='outline'
            >
              <MenuIcon />
            </CommonButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className='z-50 mt-3 w-56 rounded-3xl border border-[#E6E6E6] bg-white p-4'
            align='start'
          >
            <HeaderMobileLinks />
          </DropdownMenuContent>
        </DropdownMenu>

        <ContactBtn />
      </nav>
    </header>
  );
};
