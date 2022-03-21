import Widget from "../Widget";

export default function postsWidget({title}: {title: string}) {
  return (
    <Widget title={title}>
      <div>
        <span className="post__topic">topic</span>
        <div className="post__image " />
        <div className="post__content">
          <span className="post__link">4 Post-Pandemic Cybersecurity Trends</span>

          <div className="post__meta">
            <span>adsfadfadf</span>

            <span>August 23, 2014</span>
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
            background: var(--light-gray);
            animation: blink 1s infinite both;
          }
          .post__topic {
            position: absolute;
            z-index: 1;
            font-size: 11px;
            user-select: none;
            background: var(--primary-main);
            color: transparent;
            text-transform: uppercase;
            margin: var(--padding-xs);
            border-radius: var(--border-radius);
            background: var(--light-gray);
            animation: blink 1s infinite both;

            padding: var(--padding-xs);
          }
          .post__link {
            font-size: 18px;
            font-weight: 600;
            line-height: 1.3em;
            color: transparent;
            user-select: none;
            background: var(--light-gray);
            animation: blink 1s infinite both;
          }

          .post__meta {
            font-size: 12px;
            text-transform: capitalize;
            user-select: none;
            margin-top: 5px;
            display: flex;
            align-items: center;
            gap: 5px;
            color: transparent;
            background: var(--light-gray);
            animation: blink 1s infinite both;
          }
        `}
      </style>
    </Widget>
  );
}
