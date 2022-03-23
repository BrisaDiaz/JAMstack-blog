import type {NextPage} from "next";

import Head from "next/head";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ReactCusdis } from "react-cusdis";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { Post } from "interfaces";

import Arrow from "@/components/svg/Arrow";
import User from "@/components/svg/User";
import Clock from "@/components/svg/Clock";
import {
  getAllPostSlugs,
  getPostBySlug,
  generatePostORGSchema,
} from "@/services/posts";
import { postAdapter } from "@/adapters/posts";
import Tag from "@/components/Tag";
import Widget from "@/components/Widget";
import SocialButton, { generateShareLink } from "@/components/SocialButton";
import Placeholder from "@/components/placeholders/Post";
import PostsSuggestionsPlaceholder from "@/components/placeholders/PostsSuggestions";
import useOnScreen from "@/hooks/useOnScreen";
const Page: NextPage<{ post: Post }> = ({ post }) => {
  const [url, setUrl] = React.useState("");

  React.useEffect(() => {
    setUrl(window.location.href);
  }, []);
  const shareBy = [
    "facebook",
    "twitter",
    "pinterest",
    "tumblr",
    "linkedin",
    "whatsapp",
    "email",
  ];
  const renderProps = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: {
        data: { target: { sys: { id: string } } };
      }) => {
        const asset = post?.assetsTable[node.data.target.sys.id];

        return (
          <figure>
            <Image
              alt={asset?.description}
              height={300}
              layout="responsive"
              objectFit="cover"
              src={asset?.url}
              width={600}
            />
            <figcaption>{asset?.title}</figcaption>
          </figure>
        );
      },
    },
  };
  const bottomSectionRef: React.RefObject<any> = React.useRef();
  const isBottomSectionInView = useOnScreen(bottomSectionRef, "-100px", true);

  if (!post) return <Placeholder />;

  return (
    <div className="container">
      <Head>
        <title>{post?.title}</title>
        <meta content={post?.description} name="description" />
        <meta content={url} property="og:url" />
        <meta content={post?.title} property="og:title" />
        <meta content={post?.description} property="og:description" />
        <meta content={post?.thumbnail?.url} property="og:image" />
        <meta content={post?.thumbnail?.description} property="og:image:alt" />
        <meta content={url} name="twitter:url" />
        <meta content={post?.title} name="twitter:title" />
        <meta content={post?.description} name="twitter:description" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content={post?.thumbnail?.description} name="twitter:image:alt" />
        <meta content={post?.thumbnail?.url} name="twitter:image" />
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generatePostORGSchema({ post, url })),
          }}
          type="application/ld+json"
        />
      </Head>

      <main className="container page">
        <section className="post">
          <section className="breadcrumb__bar">
            <Link passHref href="/">
              <a className="breadcrumb__link" href="">
                Home
              </a>
            </Link>
            <Arrow color="var(--dark-gray)" width={15} />
            <Link
              passHref
              as={`/topics/${post?.topic?.slug}`}
              href="/topics/[slug]"
            >
              <a className="breadcrumb__link" href="">
                {post?.topic?.name}
              </a>
            </Link>
            <Arrow color="var(--dark-gray)" width={15} />
            <span> {post?.title} </span>
          </section>
          <section className="post__content">
            <h1 className="post__title"> {post?.title}</h1>

            <div className="post__meta">
              <div>
                <User />
                <span className="post__meta-tag">{post?.author}</span>
              </div>
              <div>
                <Clock />
                <time
                  className="post__meta-tag"
                  dateTime={post?.publishedAt?.rawDate}
                >
                  {post?.publishedAt?.shortDate}
                </time>
              </div>
            </div>

            <section className=" post__ad ">
              <span>Responsive Advertisement</span>
            </section>

            <figure className="post__caption">
              <Image
                alt={post?.thumbnail?.description}
                blurDataURL={post?.thumbnail?.url}
                height={300}
                layout="responsive"
                loading="eager"
                objectFit="cover"
                placeholder="blur"
                src={post?.thumbnail?.url}
                width={600}
              />
              <figcaption className="post__figcaption">
                {post?.thumbnail?.title}
              </figcaption>
            </figure>
            {post?.subtitle && (
              <h2 className="post__subtitle"> {post?.subtitle}</h2>
            )}
            <div className="pre">
              {post?.content &&
                documentToReactComponents(
                  post?.content as any,
                  renderProps as any,
                )}
            </div>
            <section className=" post__ad ">
              <span>Responsive Advertisement</span>
            </section>
          </section>
          <ul className="posts__tags">
            {post?.tags?.map((tag) => (
              <Tag key={tag} tag={{ name: tag, link: `/?tag=${tag}` }} />
            ))}
          </ul>
          <ul className="share-btn__list">
            {shareBy?.map((social) => (
              <li key={social} className="share-btn">
                <a
                  aria-label={`share by ${social}`}
                  href={generateShareLink({
                    socialMedia: social as any,
                    url,
                    description: post?.title,
                  })}
                  rel="noreferrer"
                  target="_blank"
                >
                  <SocialButton fontSize={15} name={social} />
                </a>
              </li>
            ))}
          </ul>
        </section>

        <div ref={bottomSectionRef}>
          {isBottomSectionInView ? (
            <>
              <Widget title="you may like this posts">
                <div className="suggested-posts__list">
                  {post.suggested.map((suggestedPost) => (
                    <article
                      key={suggestedPost?.title}
                      className="suggested-post"
                    >
                      <div className="suggested-post__img ">
                        <Image
                          alt={suggestedPost?.thumbnail?.description}
                          blurDataURL={post?.thumbnail?.url}
                          layout="fill"
                          objectFit="cover"
                          placeholder="blur"
                          src={suggestedPost?.thumbnail?.url}
                        />
                      </div>
                      <div>
                        <Link passHref href={`/posts/${suggestedPost?.slug}`}>
                          <a
                            aria-label={suggestedPost?.title}
                            href=""
                            title={suggestedPost?.title}
                          >
                            {suggestedPost?.title.length > 45
                              ? suggestedPost?.title.slice(0, 45).concat("...")
                              : suggestedPost?.title}
                          </a>
                        </Link>
                        <div className=" suggested-post__meta ">
                          <Clock />
                          <time
                            className="post__meta-tag"
                            dateTime={post?.publishedAt?.rawDate}
                          >
                            {post?.publishedAt?.shortDate}
                          </time>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </Widget>
              {post && (
                <div className="comments-section">
                  <Widget title="Comments Section">
                    <ReactCusdis
                      attrs={{
                        host: "https://cusdis.com",
                        appId: process.env.NEXT_PUBLIC_CAUDIS_APP_ID as string,
                        pageId: post?.id,
                        pageTitle: post?.title,
                        pageUrl: url,
                      }}
                    />
                  </Widget>
                </div>
              )}
            </>
          ) : (
            <>
              <PostsSuggestionsPlaceholder title="you may like this posts" />
            </>
          )}
        </div>
      </main>

      <style jsx>{`
        .comments-section {
          margin-top: var(--padding);
        }
        .page {
          display: flex;
          flex-direction: column;
          gap: var(--padding);
        }
        .post {
          background: #fff;

          border: var(--border);
          border-radius: var(--border-radius);
        }
        img {
          margin-bottom: var(--padding);
        }
        .breadcrumb__bar {
          padding: var(--padding-sm) var(--padding);
          border-bottom: var(--border);
          color: var(--dark-gray);
          display: flex;
          line-height: 1.5em;
          align-items: center;
          flex-wrap: wrap;
          font-size: 13px;
        }
        .breadcrumb__bar svg {
          fill: var(--dark-gray);
        }
        .breadcrumb__link {
          text-transform: capitalize;
          transition: all 0.2s ease;
        }
        .breadcrumb__link:hover,
        .breadcrumb__link:focus-visible {
          color: var(--primary-main);
        }
        .post__content {
          padding: 0 var(--padding);
        }
        .post__title {
          margin: var(--padding-sm) 0 var(--padding);
        }
        .post__subtitle {
          font-size: 1.3rem;
          opacity: 0.9;
          margin: 0.5em 0 1em;
        }

        .post__meta {
          text-transform: capitalize;
          color: var(--dark-gray);

          display: flex;
          align-items: center;
          gap: var(--padding-sm);
        }
        .post__meta-tag {
          margin-left: var(--padding-xs);
        }
        .post__ad {
          padding: 40px var(--padding);
          border: 1px solid var(--gray);

          text-align: center;
          margin: var(--padding) 0;
          font-size: 12px;
          font-style: italic;
          background: var(--light-gray);
        }
        .post__caption {
          width: 100%;

          height: auto;
          position: relative;
          margin-bottom: var(--padding);
        }
        .post__figcaption {
          margin: var(--padding-sm) 0;
          font-size: 13px;
        }
        .posts__tags {
          border-top: 2px solid var(--light-gray);
          display: flex;
          flex-wrap: wrap;
          gap: var(--padding-xs);
          row-gap: var(--padding);
          padding: var(--padding);
        }

        .suggested-posts__list {
          display: flex;
          flex-wrap: wrap;
          gap: var(--padding-sm);
        }
        .suggested-post {
          display: flex;
          gap: var(--padding-sm);
          line-height: 1.5em;
        }
        .suggested-post__meta {
          text-transform: capitalize;
          color: var(--dark-gray);

          display: flex;
          align-items: center;
          font-size: 13px;
        }
        .suggested-post__img {
          position: relative;
          border-radius: var(--border-radius);
          overflow: hidden;
          width: 75px;
          min-width: 75px;
          height: 60px;
        }
        .share-btn__list {
          display: flex;

          column-gap: var(--padding-xs);
          row-gap: var(--padding-sm);
          width: 100%;
          padding: var(--padding-sm);
          border-top: 2px solid var(--light-gray);
        }

        .share-btn {
          width: 100%;
          max-width: 90px;
          height: 34px;
          border: 2px solid transparent;
          border-radius: var(--border-radius);
          transition: all 0.2s ease;
        }
        .share-btn:focus-within {
          transform: translateY(-2px);
        }
        @media (min-width: 600px) {
          .suggested-posts__list {
            flex-direction: row;
            flex-wrap: nowrap;
          }
          .suggested-post {
            flex-direction: column;
            gap: var(--padding-sm);
            max-width: 300px;
          }
          .suggested-post__img {
            width: 100%;
            height: 120px;
          }
        }

        @media (min-width: 1024px) {
          .suggested-post {
            max-width: 200px;
          }
        }
      `}</style>
    </div>
  );
};

export default Page;
export async function getStaticPaths() {
  const res = await getAllPostSlugs({take: process.env.NODE_ENV ==="test" ? 6: undefined});

  const paths = res?.data?.blogsCollection?.items.map(
    (post: { slug: string }) => ({
      params: { slug: post?.slug || "" },
    }),
  );

  return {
    paths,
    fallback: true,
  };
}
export async function getStaticProps({ params }: { params: { slug: string } }) {
  const data = await getPostBySlug({ slug: params?.slug || "" });

  if (!data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const post = await postAdapter(data);

  if (!post ) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { post },
    revalidate: 1,
  };
}
