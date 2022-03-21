import {Html, Head, Main, NextScript} from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link href="/apple-icon-57x57.png" rel="apple-touch-icon" sizes="57x57" />
        <link href="/apple-icon-60x60.png" rel="apple-touch-icon" sizes="60x60" />
        <link href="/apple-icon-72x72.png" rel="apple-touch-icon" sizes="72x72" />
        <link href="/apple-icon-76x76.png" rel="apple-touch-icon" sizes="76x76" />
        <link href="/apple-icon-114x114.png" rel="apple-touch-icon" sizes="114x114" />
        <link href="/apple-icon-120x120.png" rel="apple-touch-icon" sizes="120x120" />
        <link href="/apple-icon-144x144.png" rel="apple-touch-icon" sizes="144x144" />
        <link href="/apple-icon-152x152.png" rel="apple-touch-icon" sizes="152x152" />
        <link href="/apple-icon-180x180.png" rel="apple-touch-icon" sizes="180x180" />
        <link href="/android-icon-192x192.png" rel="icon" sizes="192x192" type="image/png" />
        <link href="/228x228.png" rel="icon" sizes="228x228" type="image/png" />
        <link href="/270x270.png" rel="icon" sizes="270x270" type="image/png" />
        <link href="/558x270.png" rel="icon" sizes="558x270" type="image/png" />
        <link href="/558x558.png" rel="icon" sizes="558x558" type="image/png" />
        <link href="/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
        <link href="/favicon-96x96.png" rel="icon" sizes="96x96" type="image/png" />
        <link href="/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
        <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
        <link href="/manifest.json" rel="manifest" />
        <meta content="#ffffff" name="msapplication-TileColor" />
        <meta content="/ms-icon-144x144.png" name="msapplication-TileImage" />
        <meta content="#ffffff" name="theme-color" />
        <link href="/favicon.ico" rel="icon" />
        <meta charSet="utf-8" />

        <meta content="TecnoRev | Technology, Development and Much More" property="og:title" />
        <meta content="website" property="og:type" />
        <meta content={process.env.HOTS} property="og:url" />
        <meta content={"TencoRev"} property="og:site_name" />
        <meta content="TecoRev-org-1200x630.png" property="og:image" />
        <meta content="image/png" property="og:image:type" />
        <meta content="1200" property="og:image:width" />
        <meta content="630" property="og:image:height" />
        <meta
          content="Technology that matters – smartphones, hardware, games and applications. On TecnoRev you can find news, tips and tutorials and stay on top of Internet affairs."
          property="og:description"
        />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="TecnoRev | Technology, Development and Much More" property="twitter:title" />
        <meta content="TecoRev-org-1200x630.png" property="twitter:image" />
        <meta content="TecnoRev " name="twitter:image:alt" />
        <meta
          content="Technology that matters – smartphones, hardware, games and applications. On TecnoRev you can find news, tips and tutorials and stay on top of Internet affairs."
          name="description"
        />
        <script
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
                  image: {"@id": process.env.HOST + "/#logo"},
                },
                {
                  "@type": "WebSite",
                  "@id": process.env.HOST + "/#website",
                  url: process.env.HOST,
                  name: "TecnoRev",

                  description: "Technology that matters",
                  publisher: {"@id": process.env.HOST + "/#organization"},
                  potentialAction: [
                    {
                      "@type": "SearchAction",
                      target: {
                        "@type": "EntryPoint",
                        urlTemplate: process.env.HOST + "?search={search_term_string}",
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
                  isPartOf: {"@id": process.env.HOST + "/#website"},
                  about: {"@id": process.env.HOST + "/#organization"},
                  description:
                    "Technology that matters – smartphones, hardware, games and applications. On TecnoRev you can find news, tips and tutorials and stay on top of Internet affairs.",
                  breadcrumb: {
                    "@id": process.env.HOST + "/#breadcrumb",
                  },
                  inLanguage: "pt-BR",
                  potentialAction: [{"@type": "ReadAction", target: [process.env.HOST]}],
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": process.env.HOST + "/#breadcrumb",
                  itemListElement: [{"@type": "ListItem", position: 1, name: "home"}],
                },
              ],
            }),
          }}
          lang="en"
          type="application/ld+json"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
