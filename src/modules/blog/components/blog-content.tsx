import type { IBlogResponse } from '@/api/blog/types';
import { Icons } from '@/assets/icons';
import { readTime } from '@/lib/utils';
import { convert } from 'html-to-text';
import React from 'react';
import { generateId } from '..';

interface BlogContentProps {
  post: IBlogResponse;
  contentRef: React.RefObject<HTMLDivElement | null>;
}

function addIdToHeadings(html: string) {
  return html.replace(/<h([2-6])>(.*?)<\/h\1>/g, (match, headingLevel, headingContent) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = headingContent;
    const textContent = tempDiv.textContent || tempDiv.innerText || '';

    const id = generateId(textContent.trim());
    return `<h${headingLevel} id="${id}">${headingContent}</h${headingLevel}>`;
  });
}

export const BlogContent = ({ post, contentRef }: BlogContentProps) => {
  const { title, author, date, content } = post;

  return (
    <section className='w-full flex-1 border-primary-950/10 border-x px-4 pt-[18px] lg:pr-[34px] lg:pl-5'>
      <h1 className='font-semibold text-5xl leading-14 max-xl:text-4xl max-xl:leading-12'>{convert(title)}</h1>
      <div className='flex flex-wrap items-center gap-3 py-3'>
        <p className='whitespace-nowrap text-primary-950/60 capitalize'>
          Posted by <span className='font-bold text-lg'>{author?.name}</span>
        </p>
        <Icons.star className='text-primary-600' />
        <p className='whitespace-nowrap text-primary-950/60'>{date}</p>
        <Icons.star className='text-primary-600' />
        <p className='whitespace-nowrap text-primary-950/60'>{readTime(content).minutes} min read</p>
      </div>
      <article
        ref={contentRef}
        className='prose lg:prose-lg prose-figure:!w-full prose-img:!w-full prose-figcaption:!text-sm !min-w-full [&_h1_img]:!my-0 break-words prose-em:break-words pt-4 pb-[62px] prose-figcaption:text-center prose-headings:font-medium prose-strong:font-medium prose-h2:text-2xl prose-h3:text-lg lg:prose-h2:text-[32px] lg:prose-h3:text-xl [&_b]:font-medium [&_iframe]:aspect-video [&_iframe]:max-h-[400px] [&_iframe]:w-full'
        dangerouslySetInnerHTML={{ __html: addIdToHeadings(content) }}
      />
    </section>
  );
};
