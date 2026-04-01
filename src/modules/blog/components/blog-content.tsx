import { IBlogResponse } from "@/api/blog/types";
import { Icons } from "@/assets/icons";
import { readTime } from "@/lib/utils";
import { convert } from "html-to-text";
import React from "react";
import { generateId } from "..";

interface BlogContentProps {
  post: IBlogResponse;
  contentRef: React.RefObject<HTMLDivElement | null>;
}

function addIdToHeadings(html: string) {
  return html.replace(
    /<h([2-6])>(.*?)<\/h\1>/g,
    (match, headingLevel, headingContent) => {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = headingContent;
      const textContent = tempDiv.textContent || tempDiv.innerText || "";

      const id = generateId(textContent.trim());
      return `<h${headingLevel} id="${id}">${headingContent}</h${headingLevel}>`;
    },
  );
}

export const BlogContent = ({ post, contentRef  }: BlogContentProps) => {
  const { title, author, date, content } = post;

  return (
    <section className="border-primary-950/10 w-full flex-1 border-x px-4 pt-[18px] lg:pl-5 lg:pr-[34px]">
      <h1 className="text-5xl font-semibold leading-14">{convert(title)}</h1>
      <div className="flex gap-3 py-3 items-center">
        <p className="text-primary-950/60 capitalize">
          Posted by <span className="font-bold text-lg">{author?.name}</span>
        </p>
        <Icons.star className="text-primary-600" />
        <p className="text-primary-950/60">{date}</p>
        <Icons.star className="text-primary-600" />
        <p className="text-primary-950/60">
          {readTime(content).minutes} min read
        </p>
      </div>
      <article
        ref={contentRef}
        className="prose lg:prose-lg prose-figure:!w-full prose-img:!w-full prose-figcaption:text-center prose-figcaption:!text-sm prose-h2:text-2xl lg:prose-h2:text-[32px] lg:prose-h3:text-xl prose-h3:text-lg prose-headings:font-medium prose-strong:font-medium prose-em:break-words !min-w-full break-words pb-[62px] pt-4 [&_b]:font-medium [&_h1_img]:!my-0 [&_iframe]:aspect-video [&_iframe]:max-h-[400px] [&_iframe]:w-full"
        dangerouslySetInnerHTML={{ __html: addIdToHeadings(content) }}
      />
    </section>
  );
};
