import Widget from "../Widget";

export default function TagsWidget() {
  const tags = ["fasdgf", "dfsafdasdf", "adfdf", "dfasfadsfadf", "dfadf"];

  return (
    <Widget title="tags">
      <ul className="tags-container">
        {tags.map((tag, index) => (
          <div key={index} className="tag">
            <small>{tag}</small>
          </div>
        ))}
      </ul>
      <style jsx>{`
        .tags-container {
          display: flex;
          flex-wrap: wrap;
          gap: var(--padding-xs);
          row-gap: var(--padding-xs);
        }

        .tag {
          padding: var(--padding-xs) var(--padding-sm);
          text-transform: capitalize;
          border: var(--border);
          color: transparent;
          border-radius: var(--border-radius);
          transition: all 0.2s ease;
          background: var(--light-gray);
          user-select: none;
          animation: blink 1s infinite both;
        }
      `}</style>
    </Widget>
  );
}
