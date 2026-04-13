import { Icons } from '@/assets/icons';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import React from 'react';
import type { TOC } from '..';

const DRAWER_SIDES = ['top', 'right', 'bottom', 'left'] as const;

/** Gradient lives on inner span so it isn’t overridden by base `TabsTrigger` `data-[state=active]:bg-background`. */
const tocLabelClassName = cn(
  'inline-block max-w-full text-left text-[#1E1E1E] font-normal',
  'group-data-[state=active]:font-bold',
  'group-data-[state=active]:bg-[linear-gradient(to_right,#8F006E_0%,#65009B_50%,#3729FA_100%)]',
  'group-data-[state=active]:bg-clip-text group-data-[state=active]:text-transparent'
);

/**
 * Active row: left bar — horizontal linear gradient (left → right).
 * `group` on trigger enables label gradient on inner span.
 */
const activeLineGradient = [
  'group data-[state=active]:!bg-transparent dark:data-[state=active]:!bg-transparent',
  'data-[state=active]:border-l-transparent dark:data-[state=active]:border-l-transparent',
  'data-[state=active]:before:pointer-events-none data-[state=active]:before:absolute data-[state=active]:before:left-0 data-[state=active]:before:top-0 data-[state=active]:before:z-[2] data-[state=active]:before:h-full data-[state=active]:before:w-0.5',
  "data-[state=active]:before:bg-[linear-gradient(to_right,#8F006E_0%,#65009B_50%,#3729FA_100%)] data-[state=active]:before:content-['']",
].join(' ');

/** Line-variant list: full-height #D6D6D6 track + vertical stack + gap breaks between segments. */
const tocListLineVariant = cn(
  'relative isolate flex h-auto w-full max-w-full flex-col items-stretch gap-3',
  'rounded-none border-0 bg-transparent p-0 text-left text-[#1E1E1E]',
  "before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-0 before:h-full before:w-px before:bg-[#D6D6D6] before:content-['']"
);

/** Line-variant trigger: overrides default pill tab styles entirely. */
const tocTriggerLineVariant = cn(
  'relative z-[1] h-auto min-h-0 flex-none w-full items-start justify-start',
  'whitespace-normal rounded-none border-0 bg-transparent py-2.5 pl-5 pr-2 text-left text-base leading-snug shadow-none',
  'outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
  'data-[state=active]:shadow-none',
  activeLineGradient
);

export const TableOfContentMobile = ({
  toc,
  active,
  handleTarget,
}: {
  toc: TOC[];
  active: string | null;
  handleTarget: (id: string) => void;
}) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Drawer direction='bottom'>
      <div
        className={cn(
          '-translate-x-1/2 fixed bottom-[max(1rem,env(safe-area-inset-bottom,0px))] left-1/2 z-50 flex w-[80%] justify-between gap-2 px-6',
          'max-md:w-full'
        )}
      >
        <DrawerTrigger asChild>
          <Button className='!p-0 min-h-14 min-w-14 cursor-pointer rounded-full bg-[#001344] hover:bg-[#22293c]'>
            <Icons.list className='size-6' />
          </Button>
        </DrawerTrigger>
        <Button
          onClick={scrollToTop}
          className='!p-0 min-h-14 min-w-14 cursor-pointer rounded-full bg-[#EEEEEE] hover:bg-[#f0f0f0]'
        >
          <Icons.arrowUp className='size-6' />
        </Button>
      </div>
      <DrawerContent
        vaultDirection={false}
        className={cn(
          'data-[vaul-drawer-direction=bottom]:max-h-[50vh] data-[vaul-drawer-direction=top]:max-h-[50vh]',
          '!mx-6 !rounded-4xl max-sm:!mx-3 bg-white p-10'
        )}
      >
        <DrawerHeader className='flex flex-row items-start items-center justify-between gap-2 space-y-0 p-0'>
          <DrawerTitle className='mb-6 font-normal text-[#494949] text-base leading-[26px]'>
            Table of Contents
          </DrawerTitle>
          <DrawerClose asChild className='!p-0'>
            <Button
              type='button'
              variant='outline'
              className='!p-0 h-8 cursor-pointer capitalize'
              aria-label='Close table of contents'
            >
              <Icons.xIcon className='size-7' />
            </Button>
          </DrawerClose>
        </DrawerHeader>

        <Tabs value={active?.replace('#', '') || toc[0]?.id} defaultValue={toc[0]?.id} orientation='vertical'>
          <TabsList className={tocListLineVariant}>
            {toc.map((item) => (
              <TabsTrigger
                key={item.id}
                onClick={(e) => handleTarget(item.id)}
                value={item.id}
                className={cn('!leading-[26px] !py-1', tocTriggerLineVariant)}
              >
                <span className={tocLabelClassName}>{item.text}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </DrawerContent>
    </Drawer>
  );
};
