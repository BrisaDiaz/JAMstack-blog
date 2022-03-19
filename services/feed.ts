import { GET } from "./utils";

export async function getWebsiteWidgetsData() {
  const query = `{
  postsTopics: topicCollection {
    items {
      name
      slug
      linkedFrom {
        blogsCollection {
          total
        }
      }
    }
  }
  latestPosts: blogsCollection(limit: 5, order: sys_publishedAt_DESC) {
    items {
      slug
      title
      author
       topic{
        name
        slug
      }
      thumbnail {
        title
        description
        url
      }
      sys {
        publishedAt
      }
    }
  }
  websiteWidgets(id: "6qdBspgR9EfIvWfxc2Q8Fy") {
    tags
    featuredPost {
      slug
      title
       topic{
        name
        slug
      }
      thumbnail {
        title
        description
        url
      }
      sys {
        publishedAt
      }
      author
    }
    popularPosts: popularPostsCollection {
      items {
        slug
        title
        author
         topic{
        name
        slug
      }
        thumbnail {
          title
          description
          url
        }
        sys {
          publishedAt
        }
      }
    }
    randomPosts: randomPostsCollection {
      items {
        slug
        title
        author
         topic{
        name
        slug
      }
        thumbnail {
          title
          description
          url
        }
        sys {
          publishedAt
        }
      }
    }
    socials: socialPluginCollection {
      items {
        name
        url
      }
    }
    socialsInBanner: bannerSocialsCollection {
      items {
        name
        url
      }
    }
  }
}`;
  const res = await GET(query);
  return res.json();
}
