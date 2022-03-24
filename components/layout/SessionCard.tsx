/* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link";
import {UserProfile} from "interfaces";

import ProfilePhoto from "@/components/layout/ProfilePhoto";
export default function SessionCard({
  user,
  onClick,
}: {
  user: UserProfile | null;
  onClick: () => void;
}) {
  return (
    <aside className="cart-wrapper">
      <article className="session-card">
        <ProfilePhoto
          image={{
            src: user?.picture || "/assets/default-profile.jpg",
            alt: "profile",
          }}
          size="large"
        />
        {user ? (
          <div>
            {user?.name && <p className="session-card__data ">{user?.name}</p>}

            {user?.email && (
              <p className="session-card__data session-card__email  ">
                {user?.email}
              </p>
            )}
          </div>
        ) : (
          <p className="session-card__data ">Incognito Mode</p>
        )}
        {user ? (
          <a className="session-btn " href="/api/auth/logout" onClick={onClick}>
            Close Session
          </a>
        ) : (
          <a className="session-btn " href="/api/auth/login" onClick={onClick}>
            Login
          </a>
        )}
        <Link passHref as="/privacy-policy" href="/[slug]">
          <a className="session-card__link" onClick={onClick}>
            <small>privacy policy</small>
          </a>
        </Link>
      </article>
      <style jsx>{`
        .cart-wrapper {
          position: relative;
          z-index: 800;
          width: 100%;
          max-width: 1024px;
          margin: 0 auto;
          height: auto;
          top: 60px;
        }
        .session-card {
          position: absolute;
          right: 0;
          top: -1px;
          border: var(--border);
          border-radius: var(--border-radius);
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: var(--padding);
          gap: var(--padding-sm);
          text-align: center;
          background: #fff;
          width: 100%;
          max-width: 300px;
          box-shadow: var(--box-shadow-lg);
        }
        .session-btn {
          padding: 0.5em 2em;
          border: 1px solid var(--primary-dark);
          border-bottom: 2px solid var(--primary-dark);
          border-radius: var(--border-radius);
          text-decoration: none;
          color: #fff;
          background: var(--primary-main);

          transition: all 0.3s ease;
          font-weight: 600;
        }
        .session-btn:active {
          border-bottom: 1px solid var(--primary-dark);
        }
        .session-btn:focus-visible {
          outline: 2px solid var(--primary-main);
          outline-offset: 2px;
          border-bottom: 1px solid var(--primary-dark);
        }
        .session-card__data {
          margin: 4px 0;
          font-weight: var(--light-black);
          font-weight: 600;
        }
        .session-card__email {
          font-weight: 400;
        }
        .session-card__link {
          color: var(--light-black);
          text-transform: capitalize;
          font-weight: 400;
          margin-top: var(--padding);
          text-align: center;
          color: var(--primary-main);
        }
        .session-card__link:hover,
        .session-card__link:focus-visible {
          text-decoration: 1px solid underline;
          text-underline-offset: 2px;
        }
      `}</style>
    </aside>
  );
}
