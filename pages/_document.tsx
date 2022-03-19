import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link rel="icon" type="image/png" sizes="228x228" href="/228x228.png" />
        <link rel="icon" type="image/png" sizes="270x270" href="/270x270.png" />
        <link rel="icon" type="image/png" sizes="558x270" href="/558x270.png" />
        <link rel="icon" type="image/png" sizes="558x558" href="/558x558.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />

        <meta
          property="og:title"
          content="TecnoRev | Technology, Development and Much More"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={process.env.HOTS} />
        <meta property="og:site_name" content={"TencoRev"} />
        <meta property="og:image" content="TecoRev-org-1200x630.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:description"
          content="Technology that matters – smartphones, hardware, games and applications. On TecnoRev you can find news, tips and tutorials and stay on top of Internet affairs."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content="TecnoRev | Technology, Development and Much More"
        />
        <meta property="twitter:image" content="TecoRev-org-1200x630.png" />
        <meta name="twitter:image:alt" content="TecnoRev " />
        <meta
          name="description"
          content="Technology that matters – smartphones, hardware, games and applications. On TecnoRev you can find news, tips and tutorials and stay on top of Internet affairs."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": process.env.HOST + "/#organization",
                  name: "TencoRev",
                  url: process.env.HOST,
                  sameAs: [
                    "https://linkedin.com/in/brisa-díaz",
                    "https://brisa-diaz.netlify.app",
                    "https://github.com/BrisaDiaz",
                    "https://mobile.twitter.com/Brisa_A_Diaz",
                  ],
                  logo: {
                    "@type": "ImageObject",
                    "@id": process.env.HOST + "/#logo",
                    inLanguage: "pt-BR",
                    url: process.env.HOST + "/TecoRev-org-1200x630.png",
                    contentUrl: process.env.HOST + "/TecoRev-org-1200x630.png",
                    width: 1200,
                    height: 630,
                    caption: "TencoRev",
                  },
                  image: { "@id": process.env.HOST + "/#logo" },
                },
                {
                  "@type": "WebSite",
                  "@id": process.env.HOST + "/#website",
                  url: process.env.HOST,
                  name: "TecnoRev",

                  description: "Technology that matters",
                  publisher: { "@id": process.env.HOST + "/#organization" },
                  potentialAction: [
                    {
                      "@type": "SearchAction",
                      target: {
                        "@type": "EntryPoint",
                        urlTemplate:
                          process.env.HOST + "?search={search_term_string}",
                      },
                      "query-input": "required name=search_term_string",
                    },
                  ],
                  inLanguage: "pt-BR",
                },
                {
                  "@type": "CollectionPage",
                  "@id": process.env.HOST + "/#webpage",
                  url: process.env.HOST,
                  name: "Technology that matters",
                  isPartOf: { "@id": process.env.HOST + "/#website" },
                  about: { "@id": process.env.HOST + "/#organization" },
                  description:
                    "Technology that matters – smartphones, hardware, games and applications. On TecnoRev you can find news, tips and tutorials and stay on top of Internet affairs.",
                  breadcrumb: {
                    "@id": process.env.HOST + "/#breadcrumb",
                  },
                  inLanguage: "pt-BR",
                  potentialAction: [
                    { "@type": "ReadAction", target: [process.env.HOST] },
                  ],
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": process.env.HOST + "/#breadcrumb",
                  itemListElement: [
                    { "@type": "ListItem", position: 1, name: "home" },
                  ],
                },
              ],
            }),
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
