import Widget from "@/components/Widget";
import SocialButton from "@/components/SocialButton";
export default function SocialPlugin({
  socials,
}: {
  socials: { name: string; url: string }[];
}) {
  return (
    <Widget title="social plugin">
      <ul className="social-widget">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            aria-label={`${social.name}`}
          >
            <li className={`social-btn`}>
              <SocialButton name={social.name} />
            </li>
          </a>
        ))}
      </ul>
      <style jsx>{`
        .social-widget {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
          gap: 5px;
        }
        a:focus-visible {
          outline: 2px solid var(--primary-main);
        }
        .social-btn {
          height: 40px;
          border-radius: 2px;

          width: 100%;
        }
      `}</style>
    </Widget>
  );
}
