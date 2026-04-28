import type { IBlogResponse } from '@/api/blog/types';
import { Icons } from '@/assets/icons';
import { cn, readTime } from '@/lib/utils';
import { convert } from 'html-to-text';
import React from 'react';
import { generateId } from '..';

interface BlogContentProps {
  post: IBlogResponse;
  contentRef: React.RefObject<HTMLDivElement | null>;
}

/** Remove existing `id` so we can set a slug derived from visible heading text (TOC / deep links). */
function stripHeadingIdAttr(attrs: string): string {
  return attrs.replace(/\bid\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, '').trim();
}

function headingInnerText(html: string): string {
  if (typeof document === 'undefined') {
    return html
      .replace(/<[^>]+>/g, ' ')
      .replace(/&nbsp;/gi, ' ')
      .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
      .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
      .replace(/\s+/g, ' ')
      .trim();
  }
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;
  return (tempDiv.textContent || tempDiv.innerText || '').trim();
}

/**
 * Match `<h2>…</h2>` and `<h2 style="…" data-…>…</h2>` (attributes on the opening tag).
 * Inner HTML may span lines (`[\s\S]*?`).
 */
function addIdToHeadings(html: string) {
  return html.replace(
    /<h([2-6])([^>]*)>([\s\S]*?)<\/h\1>/gi,
    (match, headingLevel: string, rawAttrs: string, headingContent: string) => {
      const textContent = headingInnerText(headingContent);
      const id = generateId(textContent);
      if (!id) return match;

      const attrsWithoutId = stripHeadingIdAttr((rawAttrs ?? '').trim());
      const attrsPart = attrsWithoutId ? ` ${attrsWithoutId} id="${id}"` : ` id="${id}"`;
      return `<h${headingLevel}${attrsPart}>${headingContent}</h${headingLevel}>`;
    }
  );
}

function normalizeHtmlSpacing(html: string) {
  return html
    .replace(/&nbsp;/gi, ' ')
    .replace(/\u00A0/g, ' ')
    .replace(/[ \t]{2,}/g, ' ');
}

export const BlogContent = ({ post, contentRef }: BlogContentProps) => {
  const { title, author, date, content, lastUpdated } = post;
  return (
    <section className='w-full flex-1 border-primary-950/10 border-x px-0 pt-[18px] lg:px-4 lg:pr-[34px] lg:pl-5'>
      <h1 className='font-semibold text-5xl leading-14 max-lg:text-3xl max-lg:leading-10 max-xl:text-4xl max-xl:leading-12'>
        {convert(title)}
      </h1>
      <div className='text-[#242424]'>
        <div className='flex flex-wrap items-center gap-3 py-3'>
          <p className='whitespace-nowrap text-primary-950/60 capitalize'>
            Posted by <span className='font-bold text-lg'>{author?.name}</span>
          </p>
          <Icons.star className='text-primary-600' />
          <p className='whitespace-nowrap text-primary-950/60'>{date}</p>
          <Icons.star className='text-primary-600' />
          <p className='whitespace-nowrap text-primary-950/60'>{readTime(content).minutes} min read</p>
          {/* <Icons.star className="text-primary-600" /> */}
        </div>
      </div>
      <article
        ref={contentRef}
        className={cn(
          'prose lg:prose-lg prose-figure:!w-full prose-img:!w-full prose-figcaption:!text-sm !min-w-full [&_h1_img]:!my-0 break-words prose-em:break-words pt-4 pb-[62px] prose-figcaption:text-center',
          'prose-headings:font-medium prose-strong:font-medium prose-h2:text-2xl prose-h3:text-lg lg:prose-h2:text-[32px] lg:prose-h3:text-xl [&_b]:font-medium [&_iframe]:aspect-video [&_iframe]:max-h-[400px]',
          '[&_h1]:!text-left [&_h2]:!text-left [&_h3]:!text-left [&_h4]:!text-left [&_h5]:!text-left [&_h6]:!text-left max-lg:[&_p]:!text-left max-lg:[&_li]:!text-left text-left [&_iframe]:w-full lg:[&_p]:text-justify'
        )}
        dangerouslySetInnerHTML={{
          __html: addIdToHeadings(normalizeHtmlSpacing(content)),
        }}
      />
      <p className='mb-10 whitespace-nowrap text-gray-500 text-primary-950/60 text-sm'>Last updated on {lastUpdated}</p>
    </section>
  );
};
