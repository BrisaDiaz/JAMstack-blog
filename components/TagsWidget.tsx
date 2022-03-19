import Widget from "./Widget";

import Tag from "./Tag";
export default function TagsWidget({ tags }: { tags: string[] }) {
  return (
    <Widget title="tags">
      <ul className="tags-container">
        {tags.map((tag) => (
          <Tag key={tag} tag={{ name: tag, link: `/?tag=${tag}` }} />
        ))}
      </ul>
      <style jsx>{`
        .tags-container {
          display: flex;
          flex-wrap: wrap;
          gap: var(--padding-xs);
          row-gap: var(--padding);
        }

        .tag {
          padding: var(--padding-xs) var(--padding-sm);
          text-transform: capitalize;
          border: var(--border);
          border-radius: var(--border-radius);
          transition: all 0.2s ease;
          text-decoration: none;
        }
        .tag:hover,
        .tag:focus-visible {
          color: #fff;
          background: var(--primary-main);
        }
      `}</style>
    </Widget>
  );
}
