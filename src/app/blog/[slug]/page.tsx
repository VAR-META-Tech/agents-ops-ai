import { getPostBySlug } from '@/api/blog/requests';
import { APP_URL, siteConfig } from '@/config/site';
import { Blog } from '@/modules/blog';
import { convert } from 'html-to-text';
import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const { slug } = await params;

  const post = await getPostBySlug(slug);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];
  const title = convert(post?.title, { wordwrap: 120 });
  const description = convert(post?.description, { wordwrap: 120 });

  return {
    title: title,
    description: description,
    metadataBase: new URL(`${APP_URL}/${slug}`),
    openGraph: {
      title: {
        default: title,
        template: `${post.title} - %s`,
      },
      description: description,
      url: new URL(`${APP_URL}/${slug}`),
      // images: post?.featured_media || [...previousImages],
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      // images: post?.featured_media || [...previousImages],
    },
  };
}

const BlogPage = () => {
  return <Blog />;
};

export default BlogPage;
