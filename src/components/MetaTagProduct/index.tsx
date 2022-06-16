import Head from "next/head";
import { Products } from "types/Products";
import { encoded } from "utils/base64";

export type MetaTagProductProps = {
  product: Products;
};

export const MetaTagProduct = ({ product }: MetaTagProductProps) => {
  return (
    <Head>
      <meta
        property="og:url"
        content={`https://desafio-osf.williams25.vercel.app/`}
      />
      <meta property="og:description" content={product.description} />
      <meta property="og:title" content={product.name} />
      <meta property="og:locale" content={`/produto/${encoded(product.id)}`} />
      <meta property="og:image" content={product.image} />
      <meta property="product:availability" content="in stock" />
      <meta property="product:condition" content="new" />
      <meta property="product:price:currency" content="BRL" />
      <meta property="product:availability" content="in stock" />
      <meta property="product:brand" content={product.categorie} />
      <meta property="product:price:amount" content={String(product.price)} />
      <meta property="product:retailer_item_id" content={product.id} />
    </Head>
  );
};
