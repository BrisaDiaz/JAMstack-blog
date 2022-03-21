import Widget from "../Widget";
export default function postsWidget({ title }: { title: string }) {
  const posts = new Array(3).fill(1);
  return (
    <Widget title={title}>
      <div>
        {posts.map((el, index) => (
          <section key={index} className="post">
            <div className="post__image "></div>
            <div className="post__content">
              <div className="post__title" />
              <div className="post__meta" />
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
          .post__content {
            width: 100%;
          }
          .post__title {
            height: 20px;
            width: 100%;

            background: var(--light-gray);
            animation: blink 1s infinite both;
          }
          .post__image {
            width: 75px;
            min-width: 75px;
            height: 60px;
            position: relative;
            border-radius: var(--border-radius);
            overflow: hidden;
            float: left;
            background: var(--light-gray);
            animation: blink 1s infinite both;
          }

          .post__meta {
            height: 11px;
            width: 100px;

            margin-top: 5px;

            background: var(--light-gray);
            animation: blink 1s infinite both;
          }
        `}
      </style>
    </Widget>
  );
}
