import Link from "next/link";
export default function Footer() {
  return (
    <footer className="footer">
      <nav className="container footer__nav ">
        <Link passHref href="/">
          <a className="footer__link " href="">
            Home
          </a>
        </Link>
        <Link passHref as="/about" href="/[slug]">
          <a className="footer__link " href="">
            About
          </a>
        </Link>
        <Link passHref href="/contact" >
          <a className="footer__link " href="">
            Contact Us
          </a>
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
