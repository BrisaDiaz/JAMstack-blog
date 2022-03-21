import Image from "next/image";
import Link from "next/link";

import {WidgetPost} from "interfaces";

import Clock from "./svg/Clock";
import Widget from "./Widget";
export default function postsWidget({title, posts}: {title: string; posts: WidgetPost[]}) {
  return (
    <Widget title={title}>
      <div>
        {posts.map((post) => (
          <section key={post.slug} className="post">
            <div className="post__image ">
              <Image
                alt={post.thumbnail.description}
                blurDataURL={post.thumbnail.url}
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                quality={100}
                src={post.thumbnail.url}
              />
            </div>
            <div className="post__content">
              <Link href={`/posts/${post.slug}?topic=${post.topic.name}`}>
                <a
                  aria-label={post.title}
                  className="post__link"
                  title={post.title}
                >
                  {post.title.length > 55
                    ? post.title.slice(0, 55).concat("...")
                    : post.title}
                </a>
              </Link>
              <div className="post__meta">
                <Clock />
                <time dateTime={post.publishedAt.rawDate}>
                  {post.publishedAt.shortDate}
                </time>
              </div>
            </div>
          </section>
        ))}
      </div>
      <style jsx>
        {`
          .port-widget {
          }
          .post {
            width: 100%;
            display: flex;
            gap: 10px;
          }
          .post ~ .post {
            border-top: 1px dotted var(--light-gray);
            padding: 15px 0 0;
            margin: 15px 0 0;
          }
          .post__image {
            width: 75px;
            min-width: 75px;
            height: 60px;
            position: relative;
            border-radius: var(--border-radius);
            overflow: hidden;
            float: left;
          }
          .post__link {
            font-size: 13px;
            font-weight: 400;
            line-height: 1.3;
            transition: all 0.2s ease;
          }
          .post__link:hover,
          .post__link:focus-visible {
            color: var(--primary-main);
          }
          .post__meta {
            font-size: 11px;
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
