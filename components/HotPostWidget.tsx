import Link from "next/link";
import Image from "next/image";
import Clock from "./svg/Clock";
import User from "./svg/User";
import { WidgetPost } from "interfaces";
export default function HotPostWidget({ posts }: { posts: WidgetPost[] }) {
  const [mainPost, secondPost, thirdPost] = posts;
  return (
    <article className="widget">
      <div className="main-post post">
        {mainPost?.thumbnail && (
          <Image
            alt={mainPost?.thumbnail?.description}
            blurDataURL={mainPost?.thumbnail?.url}
            layout="fill"
            loading="eager"
            objectFit="cover"
            placeholder="blur"
            src={mainPost?.thumbnail?.url}
          />
        )}
        <div className="post__content ">
          <span className="post__topic">{mainPost?.topic?.name}</span>
          <Link href="/posts/[slug]" as={`/posts/${mainPost?.slug}`} passHref>
            <a>
              {" "}
              <h1 className="post__title">{mainPost?.title}</h1>
            </a>
          </Link>
          <div className="post__meta">
            <User />
            <span>{mainPost?.author}</span>
            <Clock />
            <time dateTime={mainPost?.publishedAt?.rawDate}>
              {mainPost?.publishedAt?.shortDate}
            </time>
          </div>
        </div>
      </div>
      <div className="secondary-posts">
        <div className="post">
          {secondPost?.thumbnail && (
            <Image
              alt={secondPost?.thumbnail?.description}
              blurDataURL={secondPost?.thumbnail?.url}
              layout="fill"
              loading="eager"
              objectFit="cover"
              placeholder="blur"
              src={secondPost?.thumbnail?.url}
            />
          )}
          <div className="post__content ">
            <Link
              href="/posts/[slug]"
              as={`/posts/${secondPost?.slug}`}
              passHref
            >
              <a>
                {" "}
                <h2 className="post__title">{secondPost?.title}</h2>
              </a>
            </Link>
            <div className="post__meta">
              <User />
              <span>{secondPost?.author}</span>
              <Clock />
              <time dateTime={secondPost?.publishedAt?.rawDate}>
                {secondPost?.publishedAt?.shortDate}
              </time>
            </div>
          </div>
        </div>
        <div className="post">
          {thirdPost?.thumbnail && (
            <Image
              alt={thirdPost?.thumbnail?.description}
              blurDataURL={thirdPost?.thumbnail?.url}
              layout="fill"
              loading="eager"
              objectFit="cover"
              placeholder="blur"
              src={thirdPost?.thumbnail?.url}
            />
          )}
          <div className="post__content ">
            <Link
              href="/posts/[slug]"
              as={`/posts/${thirdPost?.slug}`}
              passHref
            >
              <a>
                {" "}
                <h2 className="post__title">{thirdPost?.title}</h2>
              </a>
            </Link>
            <div className="post__meta">
              <User />
              <span>{thirdPost?.author}</span>
              <Clock />
              <time dateTime={thirdPost?.publishedAt?.rawDate}>
                {thirdPost?.publishedAt?.shortDate}
              </time>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .widget,
        .secondary-posts {
          width: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .main-post,
        .secondary-posts {
          width: 100%;
        }
        .post {
          width: 100%;
          height: 200px;
          position: relative;
          z-index: 1;
          background: var(--light-gray);
        }
        .post:hover img,
        .post:focus-within img {
          transform: scale(1.1) !important;
        }
        .post__content {
          position: absolute;
          width: 100%;
          height: 60%;
          z-index: 2;
          left: 0;
          bottom: 0;
          color: #fff;
          padding: var(--padding);
          background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 1));
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        .post__title {
          font-size: 18px;
          font-weight: 700;
          margin: var(--padding-sm) 0;
          text-shadow: -1px 0 black;
        }
        .post__meta {
          font-size: 12px;
          text-transform: capitalize;
          color: var(--gray);
          margin-top: 5px;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .post__topic {
          font-size: 11px;
          background: var(--primary-main);
          color: #fff;
          text-transform: uppercase;
          padding: var(--padding-xs);
          border-radius: var(--border-radius);
          margin: var(--padding-xs) 0;
          width: fit-content;
        }
        @media (min-width: 550px) {
          .secondary-posts {
            flex-direction: row;
          }
          .main-post {
            height: 370px;
          }
        }

        @media (min-width: 850px) {
          .widget {
            flex-direction: row;
          }
          .secondary-posts {
            flex-direction: column;
          }
          .main-post {
            height: 404px;
          }
          .secondary-posts {
            width: 70%;
          }
        }
      `}</style>
    </article>
  );
}
