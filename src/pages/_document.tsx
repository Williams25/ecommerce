import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class FreshManiaDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="theme-color" />
          <link rel="icon" href="/favicon/favicon1.svg" type="image/svg+xml" />
        </Head>
        <body id="body">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
