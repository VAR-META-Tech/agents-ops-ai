import type { IBlogResponse } from '@/api/blog/types';
import { CommonTitle } from '@/components/common/common-title';
import React from 'react';
import { BlogList } from './components/blog-list';

export const FQA = ({ posts, isLoading }: { posts: IBlogResponse[]; isLoading: boolean }) => {
  return (
    <div className='bg-[#F9F9F9] px-6'>
      <div className='mx-auto max-w-[1280px] pt-24 pb-24'>
        <div className='mb-10 max-md:pl-3'>
          <CommonTitle as='h2' className='text-center max-lg:text-3xl'>
            FQA
          </CommonTitle>
        </div>

        <BlogList posts={posts} isLoading={isLoading} />
      </div>
    </div>
  );
};
