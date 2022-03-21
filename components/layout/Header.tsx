import React from "react";
import Link from "next/link";
import Image from "next/image";

import Search from "@/components/svg/Search";
import Menu from "@/components/svg/Menu";
import Logo from "@/components/layout/Logo";
import Arrow from "@/components/svg/Arrow";
import Close from "@/components/svg/Close";
import {UserProfile} from "interfaces";
import {WidgetPost} from "interfaces";

import SearchBar from "./SearchBar";
import ProfilePhoto from "./ProfilePhoto";

export default function Header({
  user,
  onUserMenuClick,
  onSearchSubmit,
  navLinks,
  latestPosts,
}: {
  user: UserProfile | null;
  onUserMenuClick: () => void;
  onSearchSubmit: (search: string, e: React.FormEvent<HTMLFormElement>) => void;
  latestPosts: WidgetPost[];
  navLinks: {
    label: string;
    href: string;
    as: string;
    submenu?: {
      label: string;
      href: string;
      submenu?: {label: string; href: string; as: string}[];
      as: string;
    }[];
  }[];
}) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [submenus, setSubmenus] = React.useState<string[]>([]);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  function handleLinkClick(
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    label: string,
    level: 0 | 1 | 2,
  ) {
    if (level === 1 || level === 2) {
      e.preventDefault();
    } else {
      toggleMenu();

      return setSubmenus([]);
    }
    if (submenus.includes(label)) {
      return setSubmenus(submenus.filter((submenu) => submenu !== label));
    }

    if (level === 1) {
      return setSubmenus([label]);
    }

    return setSubmenus(submenus.concat(label));
  }

  return (
    <header className="header ">
      <div className="header__container container">
        <button
          aria-label="toggle menu"
          className="header__bottom header__menu-btn"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <Close /> : <Menu />}
        </button>

        <Logo />

        <nav className={`header__menu ${isMenuOpen ? "header__menu--open" : ""}`}>
          <ul className="header__link-list   ">
            <li className="mega-link">
              <Link passHref href="/">
                <a className={`heder__main-link  `} href="">
                  Latest
                </a>
              </Link>
              <div className="container mega-menu">
                {latestPosts.map((post) => (
                  <article key={post.slug} className="post ">
                    <div className="post__image ">
                      <Image
                        alt={post.thumbnail.description}
                        blurDataURL={post.thumbnail.url}
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"
                        src={post.thumbnail.url}
                      />
                    </div>
                    <Link passHref as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
                      <a
                        aria-label={post.title}
                        href=""
                        title={post.title}
                        onClick={(e) => handleLinkClick(e, "", 0)}
                      >
                        {post.title.length > 38
                          ? post.title.slice(0, 35).concat("...")
                          : post.title}
                      </a>
                    </Link>
                  </article>
                ))}
              </div>
            </li>
            {navLinks.map((link) => (
              <li key={link.label} className=" ">
                <Link passHref as={link.as} href={link.href}>
                  <a
                    className={`header__parent-link   heder__main-link `}
                    onClick={(e) =>
                      link.submenu ? handleLinkClick(e, link.label, 1) : handleLinkClick(e, "", 0)
                    }
                  >
                    <span>{link.label} </span>
                    {link.submenu && (
                      <Arrow direction={submenus.includes(link.label) ? "bottom" : "right"} />
                    )}
                  </a>
                </Link>
                {link.submenu && (
                  <ul
                    className={`header__submenu   ${
                      submenus.includes(link.label) ? "header__submenu--open " : ""
                    }`}
                  >
                    {link.submenu.map((subLink) => (
                      <li key={subLink.label} className=" ">
                        <Link passHref as={subLink.as} href={subLink.href}>
                          <a
                            className={` header__parent-link `}
                            href=""
                            onClick={(e) =>
                              subLink?.submenu
                                ? handleLinkClick(e, subLink.label, 2)
                                : handleLinkClick(e, "", 0)
                            }
                          >
                            <span>{subLink.label} </span>
                            {subLink?.submenu && (
                              <Arrow
                                direction={submenus.includes(subLink.label) ? "bottom" : "right"}
                              />
                            )}
                          </a>
                        </Link>
                        {subLink?.submenu && (
                          <ul
                            className={`header__submenu ${
                              submenus.includes(subLink.label) ? "header__submenu--open " : ""
                            }`}
                          >
                            {subLink.submenu.map((subSubLink) => (
                              <li key={subSubLink.label}>
                                <Link passHref as={subSubLink.as} href={subLink.href}>
                                  <a href="" onClick={(e) => handleLinkClick(e, "", 0)}>
                                    {subSubLink.label}
                                  </a>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="header__right-wrapper">
          <SearchBar onSubmit={onSearchSubmit}>
            <button aria-label="toggle search bar" className="header__bottom">
              <Search />
            </button>
          </SearchBar>

          <ProfilePhoto
            image={{
              alt: user?.name || "profile",
              src: user?.picture || "/assets/default-profile.jpg",
            }}
            onClick={onUserMenuClick}
          />
        </div>
      </div>

      <style jsx>{`
        .post {
          width: 100%;
          font-size: 13px;
          line-height: 1.2em;
        }
        .post__image {
          width: 100%;

          height: 80px;
          position: relative;

          overflow: hidden;
          float: left;
          margin-bottom: var(--padding-sm);
          transition: all 0.3s ease;
        }

        .header {
          position: relative;
          width: 100%;
          height: 60px;
          border: var(--border);
          background: #fff;
          z-index: 995;
        }
        .header__menu {
          display: n;
          z-index: -1;
          position: absolute;
          top: 59px;
          left: 0;
          background: #fff;
          width: 100%;
          padding: var(--padding-xs) var(--padding-sm);
          flex-direction: column;
          align-items: flex-start;
          line-height: 2rem;
          font-weight: 600;
          color: var(--light-black);
          height: 0;
          opacity: 0;
          transition: height 0.3s;
          transition: opacity 0.1s;
          box-shadow: var(--box-shadow-lg);
        }

        .header__menu--open {
          height: auto;
          opacity: 1;
          display: flex;
          border-bottom: var(--border);
        }
        .header__link-list {
          width: 100%;
        }
        .header__parent-link {
          text-transform: capitalize;
          font-size: 14px;

          font-size: 14px;
          color: var(--light-black);
          cursor: pointer;
          width: 100%;
          text-align: start;
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        a:hover {
          color: var(--primary-main);
        }
        .header__submenu {
          text-transform: capitalize;
          padding-left: var(--padding-sm);
          font-size: 14px;
          font-weight: 400;
          height: 0;
          opacity: 0;
          display: none;
          transition: height 0.3s;
        }
        .header__submenu--open,
        .header__submenu:focus-within {
          height: auto;
          opacity: 1;
          display: block;
        }
        .header__container {
          width: 100%;
          height: 100%;
          display: flex;
          position: relative;
          z-index: 999;
          align-items: center;
          justify-content: space-between;
        }
        .header__right-wrapper {
          display: flex;
          align-items: center;
          padding-right: var(--padding-sm);
          height: 100%;
          gap: var(--padding-xs);
        }
        .header__bottom {
          border: transparent;
          background: transparent;
          border: transparent;
          background: transparent;
          height: 57px;
          width: 45px;
        }
        .mega-menu {
          position: absolute;
          top: 58px;
          left: -50%;
          transform: translateX(50%);
          width: 100%;
          border: var(--border);
          padding: var(--padding);
          display: none;
          gap: var(--padding-sm);
          background: #fff;
          box-shadow: var(--box-shadow-lg);
          border: var(--border);
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        }
        @media (min-width: 1024px) {
          .header {
            padding: 0 var(--padding);
          }
          .header__menu-btn {
            display: none;
          }
          .header__right-wrapper {
            padding: 0;
          }

          .header__menu {
            position: relative;
            top: 0;
            padding: 0;
            left: 0;
            height: auto;
            opacity: 1;
            box-shadow: none;
            gap: var(--padding-sm);
          }
          .header__menu > ul {
            display: flex;
            gap: var(--padding);
            justify-content: center;
            margin: 0 auto;
          }
          .heder__main-link {
            line-height: 58px;
          }
          .header__link-list,
          .header__link-list li,
          .header__link-list a,
          .header__submenu,
          .header__submenu li,
          .header__submenu li a {
            width: max-content;
          }

          .header__submenu {
            position: absolute;
            top: 58px;
            background: #fff;
            padding: 0;

            border: var(--border);
            border-bottom: none;
            box-shadow: var(--box-shadow-lg);
          }
          .header__submenu li {
            border-bottom: var(--border);
            padding: 0 var(--padding);
            line-height: 2.5em;
            width: 100%;
          }
          li ul li ul {
            left: 100%;
            top: 100%;
          }
          .mega-link:hover .mega-menu,
          .mega-menu:hover {
            display: grid;
          }
        }
      `}</style>
    </header>
  );
}
