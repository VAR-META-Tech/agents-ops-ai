export interface IBlogDTOResponse {
  id: number;
  date: string; // ISO 8601 in site's timezone
  date_gmt: string | null; // ISO 8601 in GMT
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string | null;
  slug: string;
  status: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'trash' | string;
  type: string; // 'post', 'page', custom post type, etc.
  link: string;
  title: {
    rendered: string;
    raw?: string; // only in 'edit' context
  };
  content: {
    rendered: string;
    protected: boolean;
    raw?: string; // only in 'edit' context
    block_version?: number;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
    raw?: string;
  };
  author: number; // User ID
  featured_media: number; // Media ID (0 = none)
  comment_status: 'open' | 'closed';
  ping_status: 'open' | 'closed';
  sticky: boolean;
  template: string;
  format: 'standard' | 'aside' | 'chat' | 'gallery' | 'link' | 'image' | 'quote' | 'status' | 'video' | 'audio';

  // Taxonomies
  categories: number[]; // Array of category term IDs
  tags: number[]; // Array of tag term IDs

  // Meta
  meta: {
    footnotes?: string;
    [key: string]: any; // Custom meta fields
  };

  // Optional / context-dependent fields
  password?: string;
  parent?: number;
  menu_order?: number;

  // When you use ?_embed
  _embedded?: {
    author?: Array<{
      id: number;
      name: string;
      url: string;
      description: string;
      link: string;
      avatar_urls: Record<string, string>;
    }>;
    'wp:featuredmedia'?: Array<{
      id: number;
      source_url: string;
      alt_text?: string;
      media_details?: {
        width: number;
        height: number;
        file: string;
        sizes: Record<string, any>;
      };
    }>;
    'wp:term'?: Array<any>[];
  };

  // Links (always present)
  _links: {
    self: Array<{ href: string }>;
    collection: Array<{ href: string }>;
    about: Array<{ href: string }>;
    author?: Array<{ href: string; embeddable: boolean }>;
    replies?: Array<{ href: string; embeddable: boolean }>;
    'version-history'?: Array<{ href: string; count: number }>;
    'wp:featuredmedia'?: Array<{ href: string; embeddable: boolean }>;
    'wp:attachment'?: Array<{ href: string }>;
    'wp:term'?: Array<{
      href: string;
      taxonomy: string;
      embeddable: boolean;
    }>;
    curies?: Array<{ name: string; href: string; templated: boolean }>;
  };
}

export interface IBlogResponse {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  content: string;
  slug: string;
  link: string;
  categoryNames: string[];
  author: {
    name: string;
    image: string;
  };
  date: string;
}
