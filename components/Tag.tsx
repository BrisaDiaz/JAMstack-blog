import Link from "next/link";
export default function Tag({ tag }: { tag: { name: string; link: string } }) {
  return (
    <li>
      <Link href={tag.link} passHref>
        <a href="" className="tag">
          {tag.name}
        </a>
      </Link>
      <style jsx>{`
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
    </li>
  );
}
