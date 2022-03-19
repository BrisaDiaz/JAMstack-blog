import Socials from "@/components/svg/Socials";
export default function SocialButton({
  name,
  shape,
  fontSize,
  width,
}: {
  name: string;
  shape?: "square" | "rounded";
  fontSize?: number;
  width?: number;
}) {
  return (
    <div className={` social-channel ${name}`}>
      <Socials name={name} width={fontSize || undefined} />

      <style jsx>{`
        .social-channel {
          width: ${width ? width + "px" : "100%"};
          height: ${width ? width + "px" : "100%"};
          border-radius: ${shape === "rounded"
            ? "50%"
            : "var(--border-radius)"};

          transition: opacity 0.17s;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }

        .social-channel:hover {
          opacity: 0.8;
        }
        @media (min-width: 1024px) {
          .social-channel-section {
            flex-direction: row;
            margin: var(--padding) 0;
          }
          .text {
            max-width: 50%;
          }
        }
        .facebook {
          background: #3b5998;
        }

        .twitter {
          background: #55acee;
        }

        .telegram {
          background: #1c93e3;
        }
        .tumblr {
          background: #36465d;
        }
        .linkedin {
          background: #007bb5;
        }
        .vk {
          background: #4a76a8;
        }

        .youtube {
          background: #bb0000;
        }

        .instagram {
          background: #125688;
        }

        .reddit {
          background: #ff5700;
        }
        .email {
          background: #888;
        }
        .whatsapp {
          background: #01e675;
        }
        .instagram {
          background: linear-gradient(15deg, #ffb13d, #dd277b, #4d5ed4);
        }
        .skipe {
          background: #00aff0;
        }
        .pinterest {
          background-color: #ca2127;
        }
      `}</style>
    </div>
  );
}
export function generateShareLink({
  socialMedia,
  url,
  description,
}: {
  url: string;
  description: string;
  socialMedia:
    | "linkedin"
    | "facebook"
    | "twitter"
    | "telegram"
    | "reddit"
    | "email"
    | "whatsapp"
    | "pinterest"
    | "tumblr";
}) {
  const SHARE_LINK = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${description}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    twitter: `https://twitter.com/intent/tweet?text=${description}&url=${url}`,
    telegram: `https://telegram.me/share/url?text=${description}&url=${url}`,
    reddit: `https://www.reddit.com/submit?url=${url}&title=${description}`,
    email: `mailto:?subject=${description}&body=${description}: ${url}`,
    whatsapp: `https://api.whatsapp.com/send/?phone&text=${description}: ${url}`,
    pinterest: `https://ar.pinterest.com/pin-builder/?url=${url}&description=${description}&method=button`,
    tumblr: `http://www.tumblr.com/share?v=3&u=${url}&t=${description}`,
  };
  return SHARE_LINK[socialMedia] ? SHARE_LINK[socialMedia] : url;
}
