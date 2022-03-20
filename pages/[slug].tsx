import type {NextPage} from "next";

import Head from "next/head";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";

import {getPageBySlug, getAllPageSlugs} from "@/services/pages";
import {pageAdapter} from "@/adapters/pages";
import {GenericPage} from "interfaces";
import Placeholder from "@/components/placeholders/Page";
const Page: NextPage<{ page: GenericPage }> = ({ page }) => {
  if (!page) return <Placeholder />;

  return (
    <div className="container">
      <Head>
        <title>{page.title}</title>
        <meta content={page.description} name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className="container page">
        <h1 className="page__title"> {page.title}</h1>
        <div className="pre">
          {documentToReactComponents(page.content as any)}
        </div>
      </main>

      <style jsx>{`
        .page {
          background: #fff;
          padding: var(--padding);
          border: var(--border);
          box-shadow: var(--box-shadow-lg);
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

export async function getStaticPaths() {
  const res = await getAllPageSlugs();

  const paths = res.data?.pageCollection?.items.map(
    (page: { slug: string }) => ({
      params: { slug: page?.slug },
    }),
  );

  return {
    paths,
    fallback: true,
  };
}
export async function getStaticProps({ params }: { params: { slug: string } }) {
  const data = await getPageBySlug({ slug: params.slug });

  const page = pageAdapter(data);

  if (!page) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { page: null, revalidate: 60 },
  };
}
export default Page;
