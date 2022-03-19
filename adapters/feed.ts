import { formatDate } from "./utils";

export function websiteWidgetsAdapter(apiResponse: {
  data: {
    postsTopics: {
      items: {
        name: string;
        slug: string;
        linkedFrom: {
          blogsCollection: {
            total: number;
          };
        };
      }[];
    };
    latestPosts: {
      items: {
        slug: string;
        title: string;
        topic: {
          name: string;
          slug: string;
        };
        thumbnail: {
          title: string;
          description: string;
          url: string;
        };
        author: string;
        sys: {
          publishedAt: string;
        };
      }[];
    };

    websiteWidgets: {
      tags: string[];
      popularPosts: {
        items: {
          slug: string;
          title: string;
          topic: {
            name: string;
            slug: string;
          };
          thumbnail: {
            title: string;
            description: string;
            url: string;
          };
          author: string;
          sys: {
            publishedAt: string;
          };
        }[];
      };
      randomPosts: {
        items: {
          slug: string;
          title: string;
          topic: {
            name: string;
            slug: string;
          };
          thumbnail: {
            title: string;
            description: string;
            url: string;
          };
          author: string;
          sys: {
            publishedAt: string;
          };
        }[];
      };
      featuredPost: {
        slug: string;
        title: string;
        topic: {
          name: string;
          slug: string;
        };
        thumbnail: {
          title: string;
          description: string;
          url: string;
        };
        author: string;
        sys: {
          publishedAt: string;
        };
      };
      socials: {
        items: {
          name: string;
          url: string;
        }[];
      };
      socialsInBanner: {
        items: {
          name: string;
          url: string;
        }[];
      };
    };
  };
}) {
  const topics = widgetTopicsAdapter(apiResponse.data.postsTopics.items);
  const featuredPost = widgetPostsAdapter([
    apiResponse.data.websiteWidgets.featuredPost,
  ])[0];

  const popularPosts = widgetPostsAdapter(
    apiResponse.data.websiteWidgets.popularPosts.items,
  );
  const randomPosts = widgetPostsAdapter(
    apiResponse.data.websiteWidgets.randomPosts.items,
  );
  const latestsPosts = widgetPostsAdapter(apiResponse.data.latestPosts.items);
  const tags = apiResponse.data.websiteWidgets.tags;
  const socials = apiResponse.data.websiteWidgets.socials.items;
  const socialsInBanner = apiResponse.data.websiteWidgets.socialsInBanner.items;
  return {
    topics,
    featuredPost,
    popularPosts,
    randomPosts,
    latestsPosts,
    tags,
    socials,
    socialsInBanner,
  };
}
function widgetPostsAdapter(
  posts: {
    slug: string;
    title: string;
    topic: {
      name: string;
      slug: string;
    };
    thumbnail: {
      title: string;
      description: string;
      url: string;
    };
    author: string;
    sys: {
      publishedAt: string;
    };
  }[],
) {
  const formattedPosts = posts.map((post) => ({
    title: post.title,
    slug: post.slug,
    author: post.author,
    topic: post.topic,
    publishedAt: {
      rawDate: post.sys.publishedAt,
      shortDate: formatDate(post.sys.publishedAt),
    },
    thumbnail: {
      title: post.thumbnail.title,
      description: post.thumbnail.description,
      url: post.thumbnail.url,
    },
  }));
  return formattedPosts;
}
function widgetTopicsAdapter(
  topics: {
    name: string;
    slug: string;
    linkedFrom: {
      blogsCollection: {
        total: number;
      };
    };
  }[],
) {
  const formattedTopics = topics.map((topic) => ({
    name: topic.name,
    slug: topic.slug,
    count: topic.linkedFrom.blogsCollection.total,
  }));
  return formattedTopics;
}
