import Widget from "../Widget";
export default function PostsSuggestions({title}: {title: string}) {
  const suggestions = new Array(3).fill(1);

  return (
    <Widget title={title}>
      <div className="suggested-posts__list">
        {suggestions.map((el, index) => (
          <article key={index} className="suggested-post">
            <div className="suggested-post__img " />
            <div className="suggested-post__content">
              <div className=" suggested-post__title " />
              <div className=" suggested-post__meta" />
            </div>
          </article>
        ))}
      </div>
      <style jsx>{`
        .suggested-posts__list {
          display: flex;
          flex-wrap: wrap;
          gap: var(--padding-sm);
        }
        .suggested-post {
          display: flex;
          width: 100%;
          gap: var(--padding-sm);
        }
        .suggested-post__meta {
          background: var(--light-gray);
          animation: blink 1s infinite both;
          height: 13px;

          width: 100px;
        }
        .suggested-post__content {
          width: 100%;
        }
        .suggested-post__img {
          position: relative;
          border-radius: var(--border-radius);
          overflow: hidden;
          width: 75px;
          min-width: 75px;
          height: 60px;
          background: var(--light-gray);
          animation: blink 1s infinite both;
        }
        .suggested-post__title {
          background: var(--light-gray);
          animation: blink 1s infinite both;
          width: 100%;
          height: 16px;
          margin-bottom: 5px;
          color: transparent;
        }

        @media (min-width: 600px) {
          .suggested-posts__list {
            flex-direction: row;
            flex-wrap: nowrap;
          }
          .suggested-post {
            flex-direction: column;
            gap: var(--padding-sm);
            width: 100%;
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
    </Widget>
  );
}
