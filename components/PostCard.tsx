import Link from "next/link";
import Image from "next/image";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import {PostItem} from "interfaces";

import User from "@/components/svg/User";
import Clock from "@/components/svg/Clock";

export default function PostCard({post}: {post: PostItem}) {
  return (
    <article className="post">
      <Link passHref as={`/posts/${post.slug}`} href="/posts/[slug]">
        <a className="post__title" href="">
          <h2 aria-label={post.title} title={post.title}>
            {post.title.length > 50
              ? post.title.slice(0, 46).concat("...")
              : post.title}
          </h2>
        </a>
      </Link>
      <div className="post__meta">
        <span className="post__topic">{post.topic}</span>

        <div className="post__meta-tag">
          <User />
          <span>{post.author}</span>
        </div>
        <div className="post__meta-tag">
          <Clock />
          <time dateTime={post.publishedAt.rawDate}>
            {post.publishedAt.shortDate}
          </time>
        </div>
      </div>
      <div className="post__inner">
        {" "}
        <div className="post__image ">
          <Image
            alt={post.thumbnail.description}
            blurDataURL={post.thumbnail.url}
            layout="fill"
            loading="eager"
            objectFit="cover"
            placeholder="blur"
            src={post.thumbnail.url}
          />
        </div>
        <div className="post__extract">
          {documentToReactComponents(post.extract as any)}
        </div>
      </div>
      <style jsx>{`
        .post {
          padding: var(--padding);
          border: var(--border);
          box-shadow: var(--box-shadow-lg);
          background: #fff;
          border-radius: var(--border-radius);
        }
        .post__title {
          margin-bottom: var(--padding-sm);
          transition: all 0.2s ease;
          display: block;
        }
        .post__title:hover,
        .post__title:focus-visible {
          color: var(--primary-main);
        }
        .post__meta {
          text-transform: capitalize;
          font-size: 12px;
          display: flex;
          align-items: center;
          gap: var(--padding-sm);
          flex-wrap: wrap;
        }
        .post__meta-tag {
          color: var(--dark-gray);
          display: flex;
          align-items: center;
          gap: var(--padding-xs);
        }
        .post__topic {
          font-size: 11px;
          color: var(--primary-main);
          background: var(--primary-light);
          padding: var(--padding-xs);
          border-radius: var(--border-radius);
        }
        .post__image {
          width: 100%;
          min-width: 210px;
          height: 140px;
          position: relative;
          border-radius: var(--border-radius);
          overflow: hidden;
          float: left;
        }
        .post__inner {
          margin-top: 7px;
          font-size: 15px;
          display: flex;
          flex-direction: column;
          gap: var(--padding-sm);
        }

        @media (min-width: 600px) {
          .post__inner {
            flex-direction: row;
          }

          .post__meta {
            font-size: 13px;
          }
          .post__extract {
            max-height: 140px;
            overflow: hidden;
            padding-top: var(--padding-xs);
          }
        }
      `}</style>
    </article>
  );
}
