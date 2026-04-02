'use client';

import type { IBlogResponse } from '@/api/blog/types';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import React from 'react';
import { BlogAccordion } from './blog-accordion';

const SKELETON_ROWS = 1;

export const BlogList = ({ posts, isLoading }: { posts: IBlogResponse[]; isLoading: boolean }) => {
  if (isLoading) {
    return <BlogListSkeleton />;
  }

  if (posts.length === 0) {
    return <div className='text-center font-semibold text-[#b7b7b7] text-lg tracking-tight'>No posts yet</div>;
  }

  return <BlogAccordion posts={posts} />;
};

const BlogListSkeleton = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn('mx-auto w-full max-w-[960px]', className)}
      role='status'
      aria-busy='true'
      aria-label='Loading posts'
    >
      <div className='divide-y divide-border'>
        {Array.from({ length: SKELETON_ROWS }).map((_, i) => (
          <div key={i} className='py-5 first:pt-0'>
            <div className='flex items-start justify-between gap-4'>
              <div className='min-w-0 flex-1 space-y-3 pt-1'>
                <Skeleton
                  className={cn('h-8 rounded-md', i % 3 === 0 ? 'w-[85%]' : i % 3 === 1 ? 'w-[70%]' : 'w-[78%]')}
                />
              </div>
              <Skeleton className='mt-0.5 size-10 shrink-0 rounded-full' />
            </div>
            <div className='mt-4 space-y-2.5 pl-0'>
              <Skeleton className='h-4 w-full max-w-3xl' />
              <Skeleton className='h-4 w-full max-w-2xl' />
              <Skeleton className='h-4 w-2/3 max-w-xl' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
