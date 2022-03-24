import Link from "next/link";
export default function Footer() {
  return (
    <footer className="footer">
      <nav className="container footer__nav ">
        <Link href="/" passHref>
          <a className="footer__link ">Home</a>
        </Link>
        <Link as="/about" href="/[slug]" passHref>
          <a className="footer__link ">About</a>
        </Link>
        <Link href="/contact" passHref>
          <a className="footer__link ">Contact Us</a>
        </Link>
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
