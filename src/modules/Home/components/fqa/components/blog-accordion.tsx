import type { IBlogResponse } from '@/api/blog/types';
import { Icons } from '@/assets/icons';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ROUTES } from '@/utils/routes';

type BlogAccordionProps = {
  posts: IBlogResponse[];
};

export function TriggerIcon() {
  return (
    <span className='relative inline-flex shrink-0 items-center justify-center'>
      <Icons.plusCircle className='transition-opacity duration-200 group-data-[state=open]:opacity-0' aria-hidden />
      <span
        className='pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-data-[state=open]:opacity-100'
        aria-hidden
      >
        <Icons.minusCircle className='' />
      </span>
    </span>
  );
}

const getBlogLink = (slug: string) => {
  return `${ROUTES.BLOG_DETAIL.replace(':slug', slug)}`;
};

export function BlogAccordion({ posts }: BlogAccordionProps) {
  const defaultOpen = posts[0]?.id.toString();

  return (
    <Accordion type='single' collapsible defaultValue={defaultOpen} className='mx-auto w-full max-w-[960px]'>
      {posts.map((post) => (
        <AccordionItem value={post.id.toString()} key={post.id}>
          <div className='flex items-center justify-between'>
            <a
              href={getBlogLink(post.slug)}
              target='_blank'
              rel='noopener noreferrer'
              className='text-left font-semibold text-2xl leading-9 hover:underline'
              dangerouslySetInnerHTML={{ __html: post.title }}
            />
            <AccordionTrigger
              className='text-left font-semibold text-2xl leading-9 hover:no-underline'
              icon={<TriggerIcon />}
            />
          </div>
          <AccordionContent>
            <div
              className='font-normal text-[#1E1E1EDB] text-lg leading-8'
              dangerouslySetInnerHTML={{ __html: post.description }}
            />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
