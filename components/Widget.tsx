import React from "react";

export default function Widget({children, title}: {children: React.ReactNode; title: string}) {
  return (
    <article className="widget">
      <div className="widget__header">
        <h3 className="widget__title">{title}</h3>
      </div>
      <div className="widget__body">{children}</div>
      <style jsx>
        {`
          .widget {
            width: 100%;
            height: min-content;
            border: var(--border);
            box-shadow: var(--box-shadow-lg);
            border-radius: var(--border-radius);
            background: #fff;
          }
          .widget__header {
            border-bottom: var(--border);
          }
          .widget__title {
            padding: 15px var(--padding);
            text-transform: uppercase;
            font-size: 12px;
            font-weight: 700;
            margin: 0;
          }
          .widget__body {
            padding: var(--padding);
          }
        `}
      </style>
    </article>
  );
}
