import {useUser} from "@auth0/nextjs-auth0";
import {useRouter} from "next/router";
import React, {useState} from "react";
import dynamic from "next/dynamic";
import {Topic, WidgetPost, Social} from "interfaces";
import {useQuery} from "react-query";
const TagsWidget = dynamic(() => import("../TagsWidget"));
const PostsWidget = dynamic(() => import("../PostsWidget"));
const FeaturePostWidget = dynamic(() => import("../FeaturePostWidget"));
const TopicsWidget = dynamic(() => import("../TopicsWidget"));
const SessionCard = dynamic(() => import("./SessionCard"));
const SocialPlugin = dynamic(() => import("../SocialPlugin"));

import SocialPluginPlaceholder from "../placeholders/SocialPlugin";
import PostWidgetPlaceholder from "../placeholders/PostWidget";
import TagsWidgetPlaceholder from "../placeholders/TagsWidget";
import TopicsWidgetPlaceholder from "../placeholders/TopicsWidget";
import FeaturePostWidgetPlaceholder from "../placeholders/FeaturePostWidget";
import LoadingScreen from "../LoadingScreen";

import Header from "./Header";
import Footer from "./Footer";

import useOnScreen from "@/hooks/useOnScreen";
import {websiteWidgetsAdapter} from "@/adapters/feed";
import {getWebsiteWidgetsData} from "@/services/feed";
import SocialChannelsBanner from "@/components/SocialChannelsBanner";

export default function Layout({children}: {children: React.ReactNode}) {
  const {user} = useUser();
  const router = useRouter();

  const [isRouteChanging, setIsRouteChanging] = React.useState(false);

  React.useEffect(() => {
    const focusableElements =
      'a,button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

    router.events.on("routeChangeStart", () => {
      setIsRouteChanging(true);
    });
    router.events.on("routeChangeComplete", () => {
      setIsRouteChanging(false);
      const main = document.querySelector("main");

      if (!main) return;
      const firstFocusableElement = main.querySelectorAll(
        focusableElements,
      )[0] as HTMLButtonElement;

      if (firstFocusableElement) {
        firstFocusableElement.focus();
      }
    });

    return () => {
      setIsRouteChanging(false);
    };
  }, [router.events]);
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

  useQuery("WidgetsData", getWebsiteWidgetsData, {
    onSuccess: (topicsData) => {
      setWidgetData(websiteWidgetsAdapter(topicsData));
    },
  });

  const [isSessionCardOpen, setIsSessionCardOpen] = useState(false);

  function toggleSessionCard() {
    setIsSessionCardOpen((isOpen) => !isOpen);
  }

  function handleSearch(search: string, e: React.FormEvent<HTMLFormElement>) {
    router.push(`/?search=${search}`);
  }

  const navLinks = [
    {
      label: "posts",
      href: "#",
      as: "#",
      submenu: widgetsData.topics.map((topic) => ({
        label: topic.name,
        as: `/topics/${topic.slug}`,
        href: `/topics/[slug]`,
      })),
    },

    {
      label: "about",
      href: "/about",
      as: "/about",
    },
    {
      label: "contact us",
      href: "/contact",
      as: "/contact",
    },
  ];
  const bottomSectionRef: React.RefObject<any> = React.useRef();
  const asideSectionRef: React.RefObject<any> = React.useRef();
  const isBottomSectionInView = useOnScreen(bottomSectionRef, "-100px", true);
  const isAsideSectionInView = useOnScreen(asideSectionRef, "-100px", true);

  return (
    <div>
      {isRouteChanging && <LoadingScreen />}
      {isSessionCardOpen && <SessionCard user={user || null} onClick={toggleSessionCard} />}
      <Header
        latestPosts={widgetsData.latestsPosts}
        navLinks={navLinks}
        user={user || null}
        onSearchSubmit={handleSearch}
        onUserMenuClick={toggleSessionCard}
      />
      <aside className="  container">
        <div className="  ad-section ">
          <span>Responsive Advertisement</span>
        </div>
      </aside>
      <div className="container middle-section  ">
        <section className="content-section "> {children}</section>
        <section ref={asideSectionRef} className="aside-section ">
          {isAsideSectionInView && widgetsData.topics.length > 0 ? (
            <>
              <SocialPlugin socials={widgetsData.socials} />
              <PostsWidget posts={widgetsData.popularPosts} title="Most Popular" />
              <TagsWidget tags={widgetsData.tags} />
              <TopicsWidget topics={widgetsData.topics} />
            </>
          ) : (
            <>
              <SocialPluginPlaceholder />
              <PostWidgetPlaceholder title="Most Popular" />
              <TagsWidgetPlaceholder />
              <TopicsWidgetPlaceholder />
            </>
          )}
        </section>
      </div>
      <aside className="  container">
        <div className=" ad-section ">
          <span>Responsive Advertisement</span>
        </div>
      </aside>
      <SocialChannelsBanner socials={widgetsData.socialsInBanner} />
      <section ref={bottomSectionRef} className="container bottom-section ">
        {isBottomSectionInView && widgetsData.featuredPost ? (
          <>
            <PostsWidget posts={widgetsData.randomPosts} title="random posts" />

            <FeaturePostWidget post={widgetsData.featuredPost} title="Feature post" />

            <PostsWidget posts={widgetsData.latestsPosts.slice(0, 3)} title="latest" />
          </>
        ) : (
          <>
            <PostWidgetPlaceholder title="random posts" />
            <FeaturePostWidgetPlaceholder title="Feature post" />
            <PostWidgetPlaceholder title="latest" />
          </>
        )}
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
