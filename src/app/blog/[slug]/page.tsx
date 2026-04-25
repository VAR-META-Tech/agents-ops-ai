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
    authors: [{ name: post?.author?.name }],
    creator: post?.author?.name,
    publisher: post?.author?.name,
    applicationName: siteConfig.name,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: new URL(`${APP_URL}/${slug}`),
    },
    verification: {
      google: siteConfig.googleSiteVerification,
    },
    openGraph: {
      title: {
        default: title,
        template: `${post.title} - %s`,
      },
      description: description,
      url: new URL(`${APP_URL}/${slug}`),
      images: [post?.thumbnail || previousImages?.[0]],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: [post?.thumbnail || previousImages?.[0]],
    },
  };
}

const BlogPage = () => {
  return <Blog />;
};

export default BlogPage;
