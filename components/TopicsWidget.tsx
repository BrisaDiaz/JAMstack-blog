import Widget from "./Widget";
import Link from "next/link";
import Arrow from "./svg/Arrow";
import { Topic } from "interfaces";
export default function TopicsWidget({ topics }: { topics: Topic[] }) {
  return (
    <Widget title="topics">
      <ul className="topics-container">
        {topics.map((topic, index) => (
          <li key={topic.name}>
            <Link href={`/topics/${topic.slug}`} passHref>
              <a
                href=""
                className={`topic ${
                  index === topics.length - 1 ? "topic--last" : ""
                }`}
              >
                <span className="topic__name">
                  <Arrow direction="right" width={15} /> {topic.name}
                </span>

                <span>{`(${topic.count})`}</span>
              </a>
            </Link>
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
        }
        .topic {
          padding: 7px;

          border-bottom: 1px dotted var(--light-gray);
        }
        .topic__name {
          display: flex;
          align-items: center;
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
