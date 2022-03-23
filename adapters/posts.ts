import { Document } from "@contentful/rich-text-types";
import { formatDate } from "./utils";
interface PostResponse {
  data: {
    blogsCollection: {
      items: {
        slug: string;
        title: string;
        subtitle?: string;
        author: string;
        featured: boolean;
        description: string;
        sys: { publishedAt: string; id: string };
        topic: { name: string; slug: string };
        tags: string[];

        thumbnail: {
          title: string;
          description: string;
          url: string;
        };
        content: {
          json: Document;
          links: {
            assets: {
              block: {
                description: string;
                title: string;
                url: string;
                sys: {
                  id: string;
                };
              }[];
            };
          };
        };
        suggestedCollection: {
          items: {
            title: string;
            thumbnail: {
              title: string;
              description: string;
              url: string;
            };
            sys: { publishedAt: string };
          }[];
        };
      }[];
    };
  };
}
interface PostsSearchResponse {
  data: {
    blogsCollection: {
      total: number;
      items: {
        slug: string;
        title: string;
        author: string;
        description: string;
        featured: boolean;
        sys: { publishedAt: string };
        topic: { name: string; slug: string };
        thumbnail: {
          title: string;
          description: string;
          url: string;
        };
        extract: {
          json: Document;
        };
      }[];
    };
  };
}
export function postAdapter(apiResponse: PostResponse) {
  if (apiResponse.data.blogsCollection.items.length === 0) return null;

  const postData = apiResponse.data.blogsCollection.items[0];
  const assetsHashTable: {
    [key: string]: { title: string; description: string; url: string };
  } = {};

  postData.content.links.assets.block.forEach((asset) => {
    assetsHashTable[asset.sys.id] = {
      title: asset.title,
      description: asset.description,
      url: asset.url,
    };
  });
  const suggestedPosts =
    postData.suggestedCollection.items.length === 0
      ? []
      : postData.suggestedCollection?.items
          .map((post) =>
            post
              ? {
                  title: post.title,
                  slug: postData.slug,
                  publishedAt: {
                    rawDate: post.sys.publishedAt,
                    shortDate: formatDate(post.sys.publishedAt),
                  },
                  thumbnail: {
                    title: post.thumbnail.title,
                    description: post.thumbnail.description,
                    url: post.thumbnail.url,
                  },
                }
              : null,
          )
          .filter((post) => post !== null);

  const formattedData = {
    id: postData.sys.publishedAt,
    title: postData.title,
    subtitle: postData.subtitle,
    author: postData.author,
    slug: postData.slug,
    publishedAt: {
      rawDate: postData.sys.publishedAt,
      shortDate: formatDate(postData.sys.publishedAt),
    },
    thumbnail: {
      title: postData.thumbnail.title,
      description: postData.thumbnail.description,
      url: postData.thumbnail.url,
    },
    topic: postData.topic,
    tags: postData.tags,
    content: postData.content.json,
    assetsTable: assetsHashTable,
    suggested: suggestedPosts,
  };
  return formattedData;
}
export function postsAdapter(apiResponse: PostsSearchResponse) {
  const postsData = apiResponse.data.blogsCollection.items;

  if (postsData.length === 0) return { posts: [], total: 0 };
  const formattedData = postsData.map((post) => ({
    title: post.title,
    slug: post.slug,
    author: post.author,
    publishedAt: {
      rawDate: post.sys.publishedAt,
      shortDate: formatDate(post.sys.publishedAt),
    },
    thumbnail: {
      title: post.thumbnail.title,
      description: post.thumbnail.description,
      url: post.thumbnail.url,
    },
    topic: post.topic.name,

    extract: post.extract.json,
  }));
  return {
    posts: formattedData,
    total: apiResponse.data.blogsCollection.total,
  };
}
