import "../styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";

import { UserProvider } from "@auth0/nextjs-auth0";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import Layout from "@/components/layout";
function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <UserProvider>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Hydrate>{" "}
      </QueryClientProvider>
    </UserProvider>
  );
}

export default MyApp;
