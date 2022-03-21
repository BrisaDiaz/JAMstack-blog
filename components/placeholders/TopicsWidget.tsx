import Widget from "../Widget";

export default function TopicsWidget() {
  const topics = [
    "fasdfgdfgfdgsdfgf",
    "dfsafdasdf",
    "adfgfgdfdddf",
    "dfasfadsfadfdsgf",
    "dfgggadf",
  ];

  return (
    <Widget title="topics">
      <ul className="topics-container">
        {topics.map((topic, index) => (
          <li key={index} className="topic">
            <span className="topic__name">{topic}</span>

            <span className="topic__name">{"(1)"}</span>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .topics-container {
          gap: var(--padding-xs);
        }
        .topic {
          padding: var(--padding-xs) var(--padding-sm);
          text-transform: capitalize;
          justify-content: space-between;
          display: flex;
          font-size: 13px;
          transition: all 0.2s ease;
          text-decoration: none;
          color: transparent;
          user-select: none;
        }
        .topic {
          padding: 7px;

          border-bottom: 1px dotted var(--light-gray);
        }
        .topic__name {
          background: var(--light-gray);
          animation: blink 1s infinite both;
        }

        .topic--last {
          border-bottom: none;
        }

        .topic:focus-visible {
          border-bottom: 1px solid var(--primary-main);
        }
      `}</style>
    </Widget>
  );
}
