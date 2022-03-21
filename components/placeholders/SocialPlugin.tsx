import Widget from "@/components/Widget";

export default function SocialPlugin() {
  const socials = new Array(10).fill(1);
  return (
    <Widget title="social plugin">
      <ul className="social-widget">
        {socials.map((el, indexl) => (
          <li key={indexl} className={`social-btn`}></li>
        ))}
      </ul>
      <style jsx>{`
        .social-widget {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
          gap: 5px;
        }

        .social-btn {
          height: 40px;
          border-radius: 2px;
          background: var(--light-gray);
          animation: blink 1s infinite both;
          width: 100%;
        }
      `}</style>
    </Widget>
  );
}
