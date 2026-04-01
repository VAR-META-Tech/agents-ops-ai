'use client';

import { usePosts } from '@/api/blog/queries';
import type { IBlogListParams, IBlogResponse } from '@/api/blog/types';
import { CommonTitle } from '@/components/common/common-title';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import type { TCommonSort } from '@/types';
import { ROUTES } from '@/utils/routes';
import React from 'react';

const params: IBlogListParams = {
  per_page: 3,
  page: 1,
  orderby: 'date',
  order: 'desc' as TCommonSort,
  search: '',
  category_id: '',
};

const SKELETON_ITEMS = 1;

const getBlogLink = (slug: string) => {
  return `${ROUTES.BLOG_DETAIL.replace(':slug', slug)}`;
};

export const TopArticles = () => {
  const { data: posts = [], isLoading } = usePosts(params);

  if (isLoading) {
    return <TopArticlesSkeleton />;
  }

  if (posts.length === 0) {
    return <div className='my-8 pl-6 font-medium text-[#b7b7b7] text-base'>No posts found</div>;
  }

  return (
    <div className='mb-8'>
      <CommonTitle as='h2' className='mt-8 mb-4 pl-5 font-normal text-[#494949] text-[14px] leading-[26px]'>
        Top Articles
      </CommonTitle>

      <div className='flex flex-col gap-4 pl-5'>
        {posts.map((post) => (
          <div key={post.id} className='flex flex-col gap-2 border-[#E6E6E6] border-b pb-4 last:border-b-0'>
            <a
              href={getBlogLink(post.slug)}
              target='_blank'
              rel='noopener noreferrer'
              className='text-left font-normal text-base leading-[26px] hover:underline'
              dangerouslySetInnerHTML={{ __html: post.title }}
            />
            {/* <div key={post.id}>{post.title}</div> */}
            <div className='text-gray-500 text-sm'>{post.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

function TopArticlesSkeleton() {
  return (
    <div className='my-8' role='status' aria-busy='true' aria-label='Loading top articles'>
      <Skeleton className='mb-4 ml-5 h-[26px] w-36 rounded-md' />
      <div className='flex flex-col gap-4 pl-5'>
        {Array.from({ length: SKELETON_ITEMS }).map((_, i) => (
          <div key={i} className='flex flex-col gap-2 border-[#E6E6E6] border-b pb-4 last:border-b-0'>
            <Skeleton className={cn('h-5 rounded-md', i % 3 === 0 ? 'w-[92%]' : i % 3 === 1 ? 'w-full' : 'w-4/5')} />
            <Skeleton className='h-3.5 w-24' />
          </div>
        ))}
      </div>
    </div>
  );
}
