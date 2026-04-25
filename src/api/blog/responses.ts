import dayjs from 'dayjs';

import type { IBlogDTOResponse, IBlogResponse } from './types';

export const technologies: Record<number, string> = {
  25: 'AI',
  1: 'Blockchain',
  3: 'AR/VR',
};

export class BlogResponse implements IBlogResponse {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  content: string;
  slug: string;
  link: string;
  categoryNames: string[];
  author: { name: string; image: string };
  date: string;
  lastUpdated: string;

  constructor(post: IBlogDTOResponse, media: any, author: any) {
    this.id = post.id;
    this.title = post.title.rendered;
    this.thumbnail = media?.source_url || 'https://via.placeholder.com/275x272';
    this.description = post.excerpt.rendered;
    this.content = post.content.rendered;
    this.slug = post.slug;
    this.link = post.link;
    this.categoryNames = (post.categories as number[]).map((category) => technologies[category] ?? 'Unknown');
    this.author = {
      name: author?.name || 'Varmeta',
      image: author?.avatar_urls?.['96'] || 'https://via.placeholder.com/96x96',
    };
    this.date = dayjs(post?.date).format('MMM, DD YYYY');
    this.lastUpdated = dayjs(post?.modified).format('MMM, DD YYYY');
  }
}
