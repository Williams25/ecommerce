import Head from "next/head";
import { Products } from "types/Products";

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
      <meta property="product:availability" content="in stock" />
      <meta property="product:condition" content="new" />
      <meta property="product:price:currency" content="BRL" />
      <meta property="product:availability" content="in stock" />
      <meta property="og:image" content={product.image} />
      <meta property="product:brand" content={product.categorie} />
      <meta property="product:price:amount" content={String(product.price)} />
      <meta property="product:retailer_item_id" content={product.id} />
    </Head>
  );
};
