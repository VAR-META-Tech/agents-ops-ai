'use client';

import { usePost } from '@/api/blog/queries';
import { handleScroll } from '@/lib/utils';
import { BlogBreadcrumb } from '@/modules/blog/components/blog-breadcrumb';
import { useParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { BlogContent } from './components/blog-content';
import { TableOfContent } from './components/table-of-content';

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

export const Blog = () => {
  const { slug } = useParams();
  const { data: post, isPending, isError, error } = usePost(slug as string);
  const [active, setActive] = useState<string | null>(null);
  const [scrolling, setScrolling] = useState<boolean>(true);
  console.log('🚀 ~ Blog ~ active:', active);
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

  // useEffect(() => {
  //   if (!contentRef?.current) return;

  //   const hash = window.location.hash;
  //   console.log("🚀 ~ Blog ~  window.location:",  window.location)
  //   if (hash) {
  //     handleTarget(hash);
  //   }
  // }, [post?.content]);

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

  if (isPending) {
    return <div>Loading…</div>;
  }

  if (isError || !post) {
    return <div>{error?.message ?? 'Post not found'}</div>;
  }

  return (
    <div className='mx-auto mt-10 flex w-full max-w-[1280px] justify-between gap-10'>
      <div className='w-full max-w-[960px]'>
        <BlogBreadcrumb title={post.title} />
        <BlogContent post={post} contentRef={contentRef} />
      </div>

      {/* self-start: default flex stretch makes this column as tall as the article, which breaks sticky */}
      <div className='sticky top-[92px] w-full max-w-[256px] shrink-0 self-start'>
        <TableOfContent toc={toc} active={active} handleTarget={handleTarget} />
      </div>
    </div>
  );
};
