import { GET } from "./utils";
import { Post } from "interfaces";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";

export async function getPosts({
  skip,
  take,
  searchParams,
}: {
  skip?: number;
  take?: number;
  searchParams?: string;
}) {
  const where = searchParams || `{ title_exists: true }`;
  const query = `query {
  blogsCollection(limit: ${take || 100},skip: ${skip || 0},
  where: ${where},
  order:sys_publishedAt_DESC) {
    total
    items{
      slug
      title
      author
      topic{
        name
        slug
      }
      sys{
        publishedAt
      }
      featured
      thumbnail{
        title
        description
        url
      }
      extract{
        json
      }
    }
  }
}`;
  const res = await GET(query);

  return res.json();
}

export async function getPostBySlug({ slug }: { slug: string }) {
  const query = `{
  blogsCollection(where:{slug:"${slug}"},limit:1){

    total
    items{
      slug
      title
      subtitle
      author
      description
      sys{
        publishedAt
        id
      }

    topic{
      name
      slug
    }
      tags
      featured
      thumbnail{
        title
        description
        url
      }
   suggestedCollection{
    items{
      title
      slug
   sys{
    publishedAt
  }
      thumbnail{
        description
        title
        url

      }
    }
  }
      content{
   links {
        assets {
          block {
            description
            title
            url
            sys {
              id
            }
          }
        }
      }
        json
      }
    }
  }
}
`;

  const res = await GET(query);

  return res.json();
}
export async function getPostByTopicSlug({
  slug,
  take,
  skip,
}: {
  slug: string;
  take?: number;
  skip?: number;
}) {
  const searchParams = `{ topic: { slug:"${slug}"} }`;

  return getPosts({ searchParams, take, skip });
}
export async function getPostBySearchQuery({
  query,
  take,
  skip,
}: {
  query: string;
  take?: number;
  skip?: number;
}) {
  const searchParams = `{
    OR: [
      { title_contains: "${query}" },
      { content_contains: "${query}"   },
      { tags_contains_some: ["${query}" ] },
    ],
  }`;
  return getPosts({ searchParams, take, skip });
}

export async function getAllPostSlugs() {
  const query = `query {
  blogsCollection{
    items{
      slug
    }
  }
}`;

  const res = await GET(query);

  return res.json();
}
export async function getAllTopicsSlugs() {
  const query = `query {
 topicCollection{
    items{
      slug
    }
  }
}`;

  const res = await GET(query);
  return res.json();
}

export async function getPostsByTag({
  tag,
  take,
  skip,
}: {
  tag: string;
  take?: number;
  skip?: number;
}) {
  const searchParams = `{ tags_contains_some: "${tag}" }`;
  return getPosts({ searchParams, take, skip });
}
export function generatePostORGSchema({
  post,
  url,
}: {
  post: Post;
  url: string;
}) {
  const schema = {
    "@context": "http://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    headline: post.title,
    image: {
      "@type": "ImageObject",
      url: post.thumbnail.url,
      height: 463,
      width: 700,
    },
    datePublished: post.publishedAt.rawDate,
    dateModified: post.publishedAt.rawDate,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "TencoRev",
      logo: {
        "@type": "ImageObject",
        url: process.env.HOST + "/TecoRev-org-1200x630.png",
        width: 550,
        height: 60,
      },
    },
    description: post.description,
    articleBody: documentToPlainTextString(post.content as any),
  };
}
