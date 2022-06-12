import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { QueryClientProvider, Hydrate } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { queryClient } from "services/queryClient";
import { ProductProvider } from "context/ProductProvider";
import Head from "next/head";
import { CartProvider } from "context/CartProvider";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Desafio OSF</title>
      </Head>
      <ReactQueryDevtools initialIsOpen position="bottom-right" />
      <Hydrate state={pageProps.dehydratedState}>
        <ProductProvider>
          <CartProvider>
            <Component {...pageProps} />
          </CartProvider>
        </ProductProvider>
      </Hydrate>
    </QueryClientProvider>
  );
};

export default App;
