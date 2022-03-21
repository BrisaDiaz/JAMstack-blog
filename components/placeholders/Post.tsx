export default function PostPlaceholder() {
  return (
    <div className="placeholder">
      <div className="breadcrumb-bar">
        <div className="paragraph breadcrumb" />
        <div className="paragraph breadcrumb" />
        <div className="paragraph breadcrumb" />
      </div>

      <div className="post">
        <div className=" paragraph post_title" />
        <div className="post_meta-bar">
          <div className="paragraph post_meta-tag" />
          <div className="paragraph post_meta-tag" />
        </div>
        <div className=" post__ad ">
          <span>Responsive Advertisement</span>
        </div>

        <div className=" image post_image" />
        <div className="paragraph post_image-figcaption " />
        <div className="post_text">
          <div className="paragraph " />
          <div className="paragraph " />
          <div className="paragraph " />
          <div className="paragraph " />
          <div className="paragraph " />
          <div className="paragraph " />
          <div className="paragraph " />
          <div className="paragraph half " />
        </div>
        <div className="post_text">
          <div className="paragraph " />
          <div className="paragraph " />
          <div className="paragraph " />

          <div className="paragraph " />
          <div className="paragraph oneQuarter " />
        </div>
        <div className="post_text">
          <div className="paragraph " />
          <div className="paragraph " />
          <div className="paragraph " />
          <div className="paragraph " />
          <div className="paragraph " />
          <div className="paragraph " />
          <div className="paragraph " />
          <div className="paragraph " />
          <div className="paragraph half " />
        </div>
        <div className=" post__ad ">
          <span>Responsive Advertisement</span>
        </div>
        <div className="post_tags-bar">
          <div className="paragraph " />
          <div className="paragraph " />
          <div className="paragraph " />
        </div>
      </div>
      <style jsx>{`
        .placeholder {
          min-height: 100vh;
          background: #fff;
          box-shadow: var(--box-shadow-lg);
          border: var(--border);
          border-radius: var(--border-radius);
        }
        .breadcrumb-bar {
          display: flex;
          gap: var(--padding-xs);
          padding: var(--padding-sm) var(--padding);
          border-bottom: var(--border);
        }
        .paragraph,
        .image {
          width: 100%;
          background: var(--light-gray);
          animation: blink 1s infinite both;
          height: 16px;
        }
        .breadcrumb {
          height: 16px;
          max-width: 150px;
        }
        .post {
          padding: var(--padding);
        }
        .post_title {
          height: 25px;

          margin-bottom: var(--padding);
        }
        .post_meta-bar,
        .post_tags-bar {
          display: flex;
          gap: var(--padding-xs);

          max-width: 200px;
        }
        .post_meta-tag {
          height: 13px;
        }
        .post_image {
          height: 300px;
        }
        .post_image-figcaption {
          height: 11px;
          max-width: 150px;
          margin: var(--padding-sm) 0;
        }
        .post__ad {
          padding: 40px var(--padding);
          border: 1px solid var(--gray);
          color: var(--dark-gray);
          text-align: center;
          margin: var(--padding) 0;
          font-size: 12px;
          font-style: italic;
          background: var(--light-gray);
        }
        .post_text {
          display: flex;
          flex-direction: column;
          gap: var(--padding-xs);
          margin: var(--padding) 0;
        }
        .half {
          max-width: 50%;
        }
      `}</style>
    </div>
  );
}
