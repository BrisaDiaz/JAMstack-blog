export default function Button({
  text,
  onClick,
}: {
  text: string;
  onClick?: () => void;
}) {
  return (
    <button onClick={(e) => onClick && onClick()} className="button">
      {text}
      <style jsx>{`
        .button {
          padding: var(--padding-sm) var(--padding-lg);
          color: #fff;
          background: var(--primary-main);
          font-weight: 600;
          border: 1px solid var(--primary-dark);
          border-bottom: 2px solid var(--primary-dark);
          border-radius: var(--border-radius);
        }
        .button:active {
          border-bottom: 1px solid var(--primary-dark);
        }
        .button:focus-visible {
          outline: 2px solid var(--primary-main);
          outline-offset: 2px;
          border-bottom: 1px solid var(--primary-dark);
        }
      `}</style>
    </button>
  );
}
