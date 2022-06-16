import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ProductProvider } from "context/ProductProvider";
import Head from "next/head";
import { CartProvider } from "context/CartProvider";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Desafio OSF</title>
      </Head>
      <ProductProvider>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </ProductProvider>
    </>
  );
};

export default App;
