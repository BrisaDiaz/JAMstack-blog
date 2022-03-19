export interface UserProfile {
  name?: string | null;
  picture?: string | null;
  email?: string | null;
}

export interface GenericPage {
  title: string;
  slug: string;
  description: string;
  content: JSON;
}

export interface PostItem {
  title: string;
  slug: string;
  author: string;
  publishedAt: {
    rawDate: string;
    shortDate: string;
  };
  thumbnail: {
    title: string;
    description: string;
    url: string;
  };
  topic: string;
  extract: any;
}

export interface Post {
  title: string;
  subtitle: string;
  slug: string;
  publishedAt: {
    rawDate: string;
    shortDate: string;
  };
  topic: { name: string; slug: string };
  author: string;
  thumbnail: { title: string; description: string; url: string };
  content: Document;
  assetsTable: {
    [key: string]: { title: string; description: string; url: string };
  };
  description: string;
  tags: string[];
  suggested: {
    title: string;
    slug: string;
    publishedAt: {
      rawDate: string;
      shortDate: string;
    };
    thumbnail: { title: string; description: string; url: string };
  }[];
}

export interface Topic {
  name: string;
  slug: string;
  count: number;
}
export interface Social {
  name: string;
  url: string;
}
export interface WidgetPost {
  slug: string;
  title: string;
  thumbnail: {
    title: string;
    description: string;
    url: string;
  };
  topic: { name: string; slug: string };
  author: string;
  publishedAt: {
    rawDate: string;
    shortDate: string;
  };
}
