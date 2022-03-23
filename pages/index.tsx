import type {NextPage} from "next";

import Head from "next/head";
import React, {useState, useEffect} from "react";
import {useRouter} from "next/router";
import {getPosts, getPostBySearchQuery, getPostsByTag} from "services/posts";
import {PostItem} from "interfaces";

import PostCard from "@/components/PostCard";
import {postsAdapter} from "@/adapters/posts";
import Button from "@/components/Button";
import Loader from "@/components/Loader";

import {  useQuery } from "react-query";
const Home: NextPage<{
  posts: PostItem[];

  total: number;
}> = ({ posts, total }) => {
  const router = useRouter();
  const POST_PER_PAGE = 6;
  const [displayedPosts, setDisplayedPosts] = useState<PostItem[]>(posts || []);
  const [totalResults, setTotalResults] = useState(total || 0);
  const [displayedPostsCount, setTotalPostsCount] = useState(
    posts?.length || 0,
  );
  const [error, setError] = useState("");
  const [searchMode, setSearchMode] = useState<"default" | "keyword" | "tag">(
    "default",
  );
  const [finished, setFinished] = useState(posts?.length === total);

  const [query, setQuery] = useState<{
    tag?: string;
    keyword?: string;
    take?: number;
    skip?: number;
  } | null>(null);
  //// querys
  const postsSearchQuery = useQuery(
    ["posts", query],
    () =>
      getPostBySearchQuery(
        query as { keyword: string; take?: number; skip?: number },
      ),
    {
      enabled: false,
      refetchOnWindowFocus: false,
      onError: (e) => {
        setError("An error has ocurred and posts couldn't be retrieved.");
      },
      onSuccess: (data) => {
        const { posts, total } = postsAdapter(data);

        if (posts.length === total) setFinished(true);
        if (query && !query.skip) {
          setDisplayedPosts(posts);
        } else {
          setDisplayedPosts([...displayedPosts, ...posts]);
        }

        setTotalPostsCount(posts.length);
        setTotalResults(total);
      },
    },
  );
  const postsTagQuery = useQuery(
    ["posts", query],
    () => getPostsByTag(query as { tag: string; take?: number; skip?: number }),
    {
      enabled: false,
      refetchOnWindowFocus: false,
      onError: (e) => {
        setError("An error has ocurred and posts couldn't be retrieved.");
      },
      onSuccess: (data) => {
        const { posts, total } = postsAdapter(data);

        if (posts.length === total) setFinished(true);
        if (query && !query.skip) {
          setDisplayedPosts(posts);
        } else {
          setDisplayedPosts([...displayedPosts, ...posts]);
        }

        setTotalPostsCount(posts.length);
        setTotalResults(total);
      },
    },
  );
  const postsQuery = useQuery(
    ["posts", query],
    () => getPosts(query as { take: number; skip?: number }),
    {
      enabled: false,
      refetchOnWindowFocus: false,
      onError: (e) => {
        setError("An error has ocurred and posts couldn't be retrieved.");
      },
      onSuccess: (data) => {
        const { posts } = postsAdapter(data);

        if (displayedPostsCount + posts.length === totalResults)
          setFinished(true);
        if (query && !query.skip) {
          setDisplayedPosts(posts);
        } else {
          setDisplayedPosts([...displayedPosts, ...posts]);
        }

        setTotalPostsCount(displayedPostsCount + posts.length);
      },
    },
  );

  /// fech handlers
  const handleSearchPosts = () => {
    if (searchMode === "keyword") return postsSearchQuery.refetch();
    if (searchMode === "tag") return postsTagQuery.refetch();
    return postsQuery.refetch();
  };
  const handleFetchMorePosts = async () => {
    if (finished) return;
    if (router.query?.search) {
      const keyword =
        typeof router.query?.search === "object"
          ? router.query?.search[0]
          : router.query?.search;

      setQuery({
        keyword,
        take: POST_PER_PAGE,
      });
      return setSearchMode("keyword");
    }
    if (router.query?.tag) {
      const tag =
        typeof router?.query.tag === "object"
          ? router.query?.tag[0]
          : router.query?.tag;
      setQuery({
        tag: tag,
        take: POST_PER_PAGE,
      });
      return setSearchMode("tag");
    }
    setQuery({
      take: POST_PER_PAGE,
      skip: displayedPostsCount,
    });

    return setSearchMode("default");
  };

  //// detect url search query changes and reset default state
  useEffect(() => {
    if (router.query && router.query?.search) {
      const keyword =
        typeof router.query?.search === "object"
          ? router.query?.search[0]
          : router.query?.search;

      setQuery({
        keyword,
        take: POST_PER_PAGE,
      });
      setSearchMode("keyword");
    }
    if (router.query && router.query?.tag) {
      const tag =
        typeof router?.query.tag === "object"
          ? router.query?.tag[0]
          : router.query?.tag;
      setQuery({
        tag: tag,
        take: POST_PER_PAGE,
      });
      setSearchMode("tag");
    }
  }, [router.query]);

  useEffect(() => {
    if (!query) return;
    handleSearchPosts();
  }, [query]);

  return (
    <div className="container">
      <Head>
        <title>TecnoRev</title>
        <meta content="Generated by create next app" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className="page">
        {displayedPosts?.length ? (
          <section className="posts-grid">
            {displayedPosts?.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </section>
        ) : error ? (
          <p className="message">{error}</p>
        ) : (
          <p className="message">There are no coincidence for your search</p>
        )}
        {(postsQuery.isLoading ||
          postsTagQuery.isLoading ||
          postsSearchQuery.isLoading) && <Loader />}
        {!finished &&
          !(
            postsQuery.isLoading ||
            postsTagQuery.isLoading ||
            postsSearchQuery.isLoading
          ) && <Button text="Load More" onClick={handleFetchMorePosts} />}
      </main>

      <style jsx>{`
        .page {
          display: flex;
          align-items: center;
          flex-direction: column;
          align-items: center;
          gap: var(--padding);
        }
        .posts-grid {
          display: flex;
          flex-direction: column;
          gap: var(--padding);
        }
        .page__tite {
          text-transform: capitalize;
        }
      `}</style>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const data = await getPosts({take: 6});
  const {posts, total} = await postsAdapter(data);

  return {
    props: {posts, total},
    revalidate: 1,
  };
}
