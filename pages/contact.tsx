import type { NextPage } from "next";

import Head from "next/head";
import ContactForm from "@/components/ContactForm";

const Page: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Contact Us</title>
        <meta content="contact form" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className="container page">
        <h1 className="page__title"> Contact Us</h1>
        <ContactForm />
      </main>

      <style jsx>{`
        .page {
          background: #fff;
          padding: var(--padding);
          border: var(--border);
          hight: min-content;
        }
        .page__title {
          padding: var(--padding-xs) 0 var(--padding-sm);
          margin-bottom: var(--padding);
          border-bottom: 2px solid var(--light-gray);
        }
      `}</style>
    </div>
  );
};
export default Page;
