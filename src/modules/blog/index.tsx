'use client';

import { usePost, usePosts } from '@/api/blog/queries';
import type { IBlogListParams } from '@/api/blog/types';
import { Skeleton } from '@/components/ui/skeleton';
import useMobile from '@/hooks/useMobile';
import { cn, handleScroll } from '@/lib/utils';
import { BlogBreadcrumb } from '@/modules/blog/components/blog-breadcrumb';
import type { TCommonSort } from '@/types';
import { useParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { BlogContent } from './components/blog-content';
import { FQA } from './components/fqa';
import { TableOfContent } from './components/table-of-content';
import { TableOfContentMobile } from './components/table-of-content-mobile';
import { TopArticles } from './components/top-articles';

export const generateId = (text: string) => {
  return text
    .toLowerCase()
    .replace(/^[^a-z]+/, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

export interface TOC {
  id: string;
  text: string;
  level: number;
  subItems?: TOC[];
}

const params: IBlogListParams = {
  per_page: 6,
  page: 1,
  orderby: 'date',
  order: 'desc' as TCommonSort,
  search: '',
  category_id: '',
};

export const Blog = () => {
  const { slug } = useParams();
  const { data: post, isLoading, isError, error } = usePost(slug as string);
  const { data: posts = [], isLoading: isLoadingPosts } = usePosts(params);

  const [active, setActive] = useState<string | null>(null);
  const [scrolling, setScrolling] = useState<boolean>(true);
  const [toc, setToc] = useState<TOC[]>([]);

  const contentRef = useRef<HTMLDivElement | null>(null);

  const handleTarget = (id: string) => {
    const target = contentRef.current?.querySelector(`#${id}`);

    if (target) {
      setActive(id);
      handleScroll(id);
      setScrolling(false);
    }
  };

  useEffect(() => {
    if (contentRef.current) {
      const headings = contentRef.current.querySelectorAll('h2, h3');
      const tocItems: TOC[] = [];
      let currentH2: TOC | null = null;

      headings.forEach((heading: Element) => {
        const text = (heading as HTMLElement).innerText;
        const id = generateId(text);

        if (id) {
          heading.setAttribute('id', id);
          const level = Number(heading.tagName.replace('H', ''));

          if (level === 2) {
            currentH2 = { id, text, level, subItems: [] } as TOC;
            tocItems.push(currentH2);
          }

          if (level === 3 && currentH2) {
            currentH2.subItems?.push({ id, text, level } as TOC);
          }
        }
      });
      setToc(tocItems);
    }
  }, [post?.content]);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrolling) return;

      if (contentRef.current) {
        const headings = contentRef.current.querySelectorAll('h2');
        let currentHeading: string | null = null;

        headings.forEach((heading) => {
          const bounding = heading.getBoundingClientRect();
          if (bounding.top <= 104 && bounding.bottom >= 104) {
            currentHeading = heading.getAttribute('id');
          }
        });

        if (currentHeading) {
          setActive(`#${currentHeading}`);
          window.history.replaceState(null, '', `#${currentHeading}`);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [post?.content, scrolling]);

  useEffect(() => {
    if (!scrolling) {
      const timer = setTimeout(() => setScrolling(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [scrolling]);

  const isMobile = useMobile('(max-width: 1024px)');
  console.log('🚀 ~ Blog ~ isMobile:', isMobile);

  if (isLoading) {
    return <BlogPageSkeleton />;
  }

  if (isError || !post) {
    return <div>{error?.message ?? 'Post not found'}</div>;
  }

  return (
    <div className='mt-10'>
      <div className='mx-auto flex w-full max-w-[1280px] justify-between gap-10 max-2xl:px-6'>
        <div className='w-full max-w-[960px] max-xl:w-full'>
          <BlogBreadcrumb title={post.title} />
          <BlogContent post={post} contentRef={contentRef} />
        </div>

        {/* self-start: default flex stretch makes this column as tall as the article, which breaks sticky */}
        {!isMobile && (
          <div className='sticky top-[92px] flex w-full max-w-[256px] shrink-0 flex-col gap-4 self-start'>
            <TableOfContent toc={toc} active={active} handleTarget={handleTarget} />
            <TopArticles posts={posts} isLoading={isLoadingPosts} />
          </div>
        )}

        {isMobile && <TableOfContentMobile toc={toc} active={active} handleTarget={handleTarget} />}
      </div>

      <FQA posts={posts} isLoading={isLoadingPosts} />
    </div>
  );
};

function BlogPageSkeleton() {
  return (
    <div
      className='mx-auto mt-10 flex w-full max-w-[1280px] justify-between gap-10 max-2xl:px-6'
      role='status'
      aria-busy='true'
      aria-label='Loading article'
    >
      <div className='w-full max-w-[960px] space-y-8'>
        {/* Breadcrumb strip */}
        <div className='flex flex-wrap items-center gap-2'>
          <Skeleton className='h-4 w-4 shrink-0 rounded-sm' />
          <Skeleton className='h-4 w-12' />
          <Skeleton className='h-4 w-3' />
          <Skeleton className='h-5 w-48 max-w-[70%] rounded-md md:w-72' />
        </div>

        {/* Title */}
        <div className='space-y-3'>
          <Skeleton className='h-10 w-full max-w-3xl' />
          <Skeleton className='h-10 w-4/5 max-w-2xl' />
        </div>

        {/* Meta / date line */}
        <Skeleton className='h-4 w-40' />

        {/* Article body */}
        <div className='space-y-4'>
          <Skeleton className='h-4 w-full' />
          <Skeleton className='h-4 w-full' />
          <Skeleton className='h-4 w-[95%]' />
          <Skeleton className='h-4 w-full' />
          <Skeleton className='h-4 w-4/5' />
        </div>

        <div className='space-y-3 pt-4'>
          <Skeleton className='h-7 w-2/3 max-w-md' />
          <Skeleton className='h-4 w-full' />
          <Skeleton className='h-4 w-full' />
          <Skeleton className='h-4 w-[88%]' />
        </div>

        <div className='space-y-3 pt-2'>
          <Skeleton className='h-7 w-1/2 max-w-sm' />
          <Skeleton className='h-4 w-full' />
          <Skeleton className='h-4 w-[92%]' />
        </div>
      </div>

      {/* TOC column — matches sticky sidebar */}
      <div className='sticky top-[92px] w-full max-w-[256px] shrink-0 self-start max-xl:hidden'>
        <div className='space-y-4'>
          <Skeleton className='h-4 w-36' />
          <div className='relative space-y-3 border-border/60 border-l pl-4'>
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton
                key={i}
                className={cn('h-5 rounded-md', i % 3 === 0 ? 'w-[90%]' : i % 3 === 1 ? 'w-full' : 'w-4/5')}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
