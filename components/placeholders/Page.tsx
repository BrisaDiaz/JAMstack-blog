export default function PagePlaceholder() {
  return (
    <div className="placeholder">
      <div className="page">
        <div className=" paragraph page_title" />
        <div className="line " />
        <div className="page_text">
          <div className="paragraph " />
          <div className="paragraph " />
          <div className="paragraph " />
          <div className="paragraph " />
          <div className="paragraph " />
          <div className="paragraph " />
          <div className="paragraph " />
          <div className="paragraph half " />
        </div>
        <div className="page_text">
          <div className="paragraph " />
          <div className="paragraph " />
          <div className="paragraph " />

          <div className="paragraph " />
          <div className="paragraph oneQuarter " />
        </div>
        <div className="page_text">
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
        <div className="page_text">
          <div className="paragraph " />
          <div className="paragraph " />

          <div className="paragraph oneQuarter " />
        </div>
      </div>
      <style jsx>{`
        .placeholder {
          min-height: 100vh;
          background: #fff;
          box-shadow: var(--box-shadow);
          border: var(--border);
          border-radius: var(--border-radius);
        }

        .paragraph,
        .image {
          width: 100%;
          background: var(--light-gray);
          animation: blink 1s infinite both;
          height: 16px;
        }

        .page {
          padding: var(--padding);
        }
        .page_title {
          height: 25px;
          margin-bottom: var(--padding-xs);

          max-width: 220px;
        }
        .line {
          border-bottom: 2px solid var(--light-gray);
          width: 100%;
        }
        .page_text {
          display: flex;
          flex-direction: column;
          gap: var(--padding-xs);
          margin: var(--padding) 0;
        }
        .half {
          max-width: 50%;
        }
        .oneQuarter {
          max-width: 25%;
        }
      `}</style>
    </div>
  );
}
