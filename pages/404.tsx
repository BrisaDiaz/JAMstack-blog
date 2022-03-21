import type {NextPage} from "next";

import Head from "next/head";
import React from "react";
import Link from "next/link";

import Home from "@/components/svg/Home";
const NotFound: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>404 | Not Found</title>
        <meta
          content="Sorry, the page you were looking for in this blog does not exist"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className="page">
        <h1 className="page__title">404</h1>
        <h2 className="page__subtitle">There is nothing here</h2>
        <p>Sorry, the page you were looking for in this blog does not exist.</p>
        <Link passHref href="/">
          <a className="home-link" href="">
            <Home />
            Home
          </a>
        </Link>
      </main>

      <style jsx>{`
        .page {
          display: flex;
          align-items: center;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: var(--padding);
          gap: var(--padding);
          min-height: 100vh;
          text-align: center;
        }

        .page__title {
          font-size: 140px;
          font-weight: 800;
          margin-bottom: var(--padding);
        }
        .page__subtitle {
          font-weight: bold;
          font-size: 25px;
        }
        .home-link {
          display: flex;
          gap: var(--padding-xs);
          align-items: center;
          font-weight: 700;
          color: var(--primary-main);
          font-size: 18px;
        }
        .home-link svg {
          margin-bottom: 4px;
        }
        .home-link:hover {
          text-decoration: 1px solid underline;
        }
      `}</style>
    </div>
  );
};

export default NotFound;
