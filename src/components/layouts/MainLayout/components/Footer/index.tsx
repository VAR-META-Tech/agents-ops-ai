import { Icons } from '@/assets/icons';
import agentsOpsLogoWhite from '@/assets/images/agents-ops-logo-white.png';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { FooterLinks } from './components/footer-links';

export const FOOTER_LINKS = [
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

export const Footer = () => {
  return (
    <footer className='bg-[#001344] px-6 py-16 text-white'>
      <div className='mx-auto flex min-w-[320px] max-w-[1280px] justify-between max-xl:flex-col'>
        <div className='flex flex-col items-start justify-between'>
          <div className='mb-12'>
            <Image src={agentsOpsLogoWhite.src} alt='AgentOps' width={254} height={47} priority />
            <div className='pl-11 font-normal text-[#7C89AE] text-base leading-[26px]'>A Varmeta company</div>
          </div>

          <div
            className={cn(
              'flex flex-col items-start gap-7 max-xl:grid',
              'max-xl:mb-10 max-xl:w-full max-xl:grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] max-xl:gap-10'
            )}
          >
            <div>
              <div className='mb-2 flex items-center gap-1'>
                <Icons.locationIcon className='!w-5 !h-5' />
                <span className='font-semibold text-xl'>Hanoi Head Office</span>
              </div>
              <div className='font-normal text-[#7C89AE] text-base leading-[26px]'>18th floor, 319 Tower</div>
              <div className='font-normal text-[#7C89AE] text-base leading-[26px]'>63 Le Van Luong, Yen Hoa, Hanoi</div>
            </div>

            <div>
              <div className='mb-2 flex items-center gap-1'>
                <Icons.locationIcon className='!w-5 !h-5' />
                <span className='font-semibold text-xl'>Da Nang</span>
              </div>
              <div className='font-normal text-[#7C89AE] text-base leading-[26px]'>68 Xo Viet Nghe Tinh,</div>
              <div className='font-normal text-[#7C89AE] text-base leading-[26px]'>Hoa Cuong, Da Nang</div>
            </div>

            <div>
              <div className='mb-2 flex items-center gap-1'>
                <Icons.phoneIcon className='!w-5 !h-5' />
                <span className='font-semibold text-xl'>Contact</span>
              </div>
              <div className='font-normal text-[#7C89AE] text-base leading-[26px]'>+84 96 450 83 84</div>
            </div>
          </div>
        </div>

        <div className='w-full max-w-[800px] max-xl:max-w-[700px]'>
          <div className='mb-4 font-semibold text-2xl text-[#7C89AE]'>Ready to start your build?</div>

          <div className='mb-10 font-semibold text-4xl leading-12'>Contact@var-meta.com</div>

          <FooterLinks />

          <div className='mt-[50px] flex items-center justify-between gap-2 font-normal text-base leading-[26px] max-lg:flex-col max-lg:items-start'>
            <div>©2025 Var-meta All Rights Serviced</div>
            <div>Terms and Conditions</div>
            <div>Privacy Policy</div>
          </div>
        </div>
      </div>
    </footer>
  );
};
