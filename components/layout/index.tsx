import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import SessionCard from "./SessionCard";
import TagsWidget from "../TagsWidget";
import SocialPlugin from "../SocialPlugin";
import PostsWidget from "../PostsWidget";
import FeaturePostWidget from "../FeaturePostWidget";
import TopicsWidget from "../TopicsWidget";
import SocialChannelsBanner from "@/components/SocialChannelsBanner";
import { getWebsiteWidgetsData } from "@/services/feed";
import { websiteWidgetsAdapter } from "@/adapters/feed";
import { Topic, WidgetPost, Social } from "interfaces";
export default function Layout({ children }: { children: React.ReactNode }) {
  const { user, error, isLoading } = useUser();

  const [widgetsData, setWidgetData] = useState<{
    topics: Topic[];
    featuredPost: WidgetPost | null;
    latestsPosts: WidgetPost[];
    randomPosts: WidgetPost[];
    popularPosts: WidgetPost[];
    tags: string[];
    socials: Social[];
    socialsInBanner: Social[];
  }>({
    topics: [],
    featuredPost: null,
    latestsPosts: [],
    randomPosts: [],
    popularPosts: [],
    tags: [],
    socials: [],
    socialsInBanner: [],
  });
  useEffect(() => {
    async function getFeedData() {
      try {
        const topicsData = await getWebsiteWidgetsData();
        setWidgetData(websiteWidgetsAdapter(topicsData));
      } catch (e) {
        console.log(e);
      }
    }
    getFeedData();
  }, []);

  const [isSessionCardOpen, setIsSessionCardOpen] = useState(false);
  function toggleSessionCard() {
    setIsSessionCardOpen((isOpen) => !isOpen);
  }

  const router = useRouter();
  function handleSearch(search: string, e: React.FormEvent<HTMLFormElement>) {
    router.push(`?search=${search}`);
  }

  const navLinks = [
    {
      label: "posts",
      href: "#",
      submenu: widgetsData.topics.map((topic) => ({
        label: topic.name,
        href: `/topics/${topic.slug}`,
      })),
    },

    {
      label: "about",
      href: "/about",
    },
  ];
  return (
    <div>
      {isSessionCardOpen && <SessionCard user={user || null} />}
      <Header
        user={user || null}
        latestPosts={widgetsData.latestsPosts}
        navLinks={navLinks}
        onUserMenuClick={toggleSessionCard}
        onSearchSubmit={handleSearch}
      />
      <aside className="  container">
        <div className="  ad-section ">
          <span>Responsive Advertisement</span>
        </div>
      </aside>
      <div className="container middle-section  ">
        <section className="content-section "> {children}</section>
        <section className="aside-section ">
          <SocialPlugin socials={widgetsData.socials} />
          <PostsWidget title="Most Popular" posts={widgetsData.popularPosts} />
          <TagsWidget tags={widgetsData.tags} />
          <TopicsWidget topics={widgetsData.topics} />
        </section>
      </div>
      <aside className="  container">
        <div className=" ad-section ">
          <span>Responsive Advertisement</span>
        </div>
      </aside>
      <SocialChannelsBanner socials={widgetsData.socialsInBanner} />
      <section className="container bottom-section ">
        <PostsWidget title="random posts" posts={widgetsData.randomPosts} />
        {widgetsData.featuredPost && (
          <FeaturePostWidget
            title="Feature post"
            post={widgetsData.featuredPost}
          />
        )}

        <PostsWidget
          title="latest"
          posts={widgetsData.latestsPosts.slice(0, 3)}
        />
      </section>
      <Footer />
      <style jsx>{`
        .middle-section,
        .bottom-section {
          display: flex;
          flex-direction: column;
          padding: var(--padding) 0;
        }
        .bottom-section {
          margin-top: var(--padding-lg);
          gap: var(--padding);
        }
        .middle-section {
          margin: var(--padding-lg) auto;
          gap: calc(var(--padding-lg) + var(--padding));
        }
        .content-section {
          min-height: 100vh;
          width: 100%;
        }
        .ad-section {
          border: 1px solid var(--gray);
          color: var(--dark-gray);
          text-align: center;
          margin: var(--padding) 0;
          padding: 40px var(--padding);
          font-style: italic;
          font-size: 12px;
          background: var(--light-gray);
        }

        .aside-section {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: var(--padding);
        }
        @media (min-width: 600px) {
          .middle-section,
          .bottom-section {
            padding: var(--padding);
          }
          .ad-section {
            margin: var(--padding);
          }
        }
        @media (min-width: 1024px) {
          .middle-section,
          .bottom-section {
            flex-direction: row;
            padding: var(--padding) 0;
            gap: var(--padding);
          }
          .ad-section {
            margin: var(--padding) 0;
          }
          .aside-section {
            width: 100%;
            max-width: 320px;
          }
        }
      `}</style>
    </div>
  );
}
