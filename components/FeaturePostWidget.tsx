import Image from "next/image";
import Link from "next/link";

import {WidgetPost} from "interfaces";

import Widget from "./Widget";
import Clock from "./svg/Clock";
import User from "./svg/User";

export default function postsWidget({title, post}: {title: string; post: WidgetPost}) {
  return (
    <Widget title={title}>
      <div>
        <span className="post__topic">{post.topic.name}</span>
        <div className="post__image ">
          <Image
            alt={post.thumbnail.description}
            blurDataURL={post.thumbnail.url}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            src={post.thumbnail.url}
          />
        </div>
        <div className="post__content">
          <Link href={`/posts/${post.slug}`}>
            <a
              aria-label={post.title}
              className="post__link"
              title={post.title}
            >
              {post.title}
            </a>
          </Link>
          <div className="post__meta">
            <User />
            <span>{post.author}</span>
            <Clock />
            <time dateTime={post.publishedAt.rawDate}>
              {post.publishedAt.shortDate}
            </time>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .post__image {
            width: 100%;

            height: 170px;
            position: relative;
            border-radius: var(--border-radius);
            overflow: hidden;
            float: left;
            margin-bottom: var(--padding-sm);
          }
          .post__topic {
            position: absolute;
            z-index: 1;
            font-size: 11px;
            background: var(--primary-main);
            color: #fff;
            text-transform: uppercase;
            margin: var(--padding-xs);
            border-radius: var(--border-radius);

            padding: var(--padding-xs);
          }
          .post__link {
            font-size: 18px;
            font-weight: 600;
            line-height: 1.3em;
            transition: all 0.2s ease;
          }
          .post__link:hover,
          .post__link:focus-visible {
            color: var(--primary-main);
          }
          .post__meta {
            font-size: 12px;
            text-transform: capitalize;
            color: var(--dark-gray);
            margin-top: 5px;
            display: flex;
            align-items: center;
            gap: 5px;
          }
        `}
      </style>
    </Widget>
  );
}
