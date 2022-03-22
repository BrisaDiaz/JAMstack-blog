import Widget from "@/components/Widget";
import SocialButton from "@/components/SocialButton";
export default function SocialPlugin({socials}: {socials: {name: string; url: string}[]}) {
  return (
    <Widget title="social plugin">
      <ul className="social-widget">
        {socials.map((social) => (
          <li key={social.name} className={`social-btn`}>
            <a
              aria-label={`${social.name}`}
              href={social.url}
              rel="noreferrer"
              target="_blank"
            >
              <SocialButton name={social.name} />
            </a>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .social-widget {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
          gap: 5px;
        }
        .social-btn:focus-within {
          transform: translateY(-2px);
        }
        .social-btn {
          height: 40px;
          border-radius: 2px;
          transition: all 0.2s ease;
          width: 100%;
        }
      `}</style>
    </Widget>
  );
}
