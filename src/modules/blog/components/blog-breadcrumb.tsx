import { Icons } from '@/assets/icons';
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

export const BlogBreadcrumb = ({ title }: { title: string }) => {
  return (
    <Breadcrumb className='w-full min-w-0 max-w-full'>
      <BreadcrumbList className='w-full min-w-0 flex-nowrap'>
        <BreadcrumbItem className='flex shrink-0 items-center gap-1'>
          <Icons.homeLine />
          <Link href='/' className='font-normal text-[#494949] text-base leading-4 hover:underline'>
            Home
          </Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator className='text-[#494949] text-base' />
        <BreadcrumbItem
          className={cn(
            'min-w-0 bg-[linear-gradient(to_right,#8F006E_0%,#65009B_50%,#3729FA_100%)] bg-clip-text text-transparent',
            'font-bold text-base leading-[26px]'
          )}
        >
          <div className='w-full min-w-0 truncate' dangerouslySetInnerHTML={{ __html: title }} />
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
