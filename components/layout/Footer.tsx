export default function Footer() {
  return (
    <footer className="footer">
      <nav className="container footer__nav ">
        <a href="/" className="footer__link ">
          Home
        </a>{" "}
        <a href="/about" className="footer__link">
          About
        </a>
      </nav>
      <style jsx>{`
        .footer {
          display: flex;
          flex: 1;
          padding: 2rem;
          border-top: var(--border);
          justify-content: center;
          align-items: center;
          background: var(--black);
          margin-top: var(--padding);
        }

        .footer__nav {
          display: flex;
          justify-content: end;
          gap: 1rem;
          color: #fff;
        }
      `}</style>
    </footer>
  );
}
