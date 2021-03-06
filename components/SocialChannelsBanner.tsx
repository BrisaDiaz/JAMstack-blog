import Logo from "@/components/layout/Logo";
import SocialButton from "@/components/SocialButton";
export default function SocialChannelsBanner({socials}: {socials: {name: string; url: string}[]}) {
  return (
    <aside className="  container" role="banner">
      <div className=" social-social-section ">
        <Logo size="large" />{" "}
        <p className="text">
          {
            " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's."
          }
        </p>
        <ul className="social-socials__list">
          {socials.map((social) => (
            <li key={social.name}>
              <a
                aria-label={`${social.name}`}
                className="social__link"
                href={social.url}
                rel="noreferrer"
                target="_blank"
              >
                <SocialButton name={social.name} shape="rounded" width={40} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        .social-social-section {
          padding: var(--padding);
          background: #fff;
          border: var(--border);
          margin: var(--padding) 0;
          margin-top: 0;
          box-shadow: var(--box-shadow);
          display: flex;
          align-items: center;
          gap: var(--padding);
          line-height: 1.5em;
          flex-direction: column;
        }
        p {
          margin: 0;
        }
        .social-socials__list {
          display: flex;
          align-items: center;
          gap: var(--padding-xs);
          row-gap: var(--padding-sm);
          flex-wrap: wrap;
          justify-content: center;
        }
        .social-socials__list li {
          transition: all 0.2s ease;
        }
        .social-socials__list li:focus-within {
          transform: translateY(-2px);
        }

        @media (min-width: 600px) {
          .social-social-section {
            margin: var(--padding);
          }
        }
        @media (min-width: 1024px) {
          .social-social-section {
            flex-direction: row;
            margin: var(--padding) 0;
          }
          .text {
            width: 100%;
            max-width: 400px;
          }
        }
      `}</style>
    </aside>
  );
}
