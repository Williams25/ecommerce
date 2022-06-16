import { DetailsProduct, DetailsProductProps } from "layouts/DetailsProduct";
import type { GetServerSideProps } from "next";
import { decoded } from "utils/base64";
import { productService } from "services/products";
import { supJsonParse } from "utils/sup-jsonparse";

const ProductPage = ({ product }: DetailsProductProps) => {
  return <DetailsProduct product={product} />;
};

export type Params = {
  slug: string;
};

export const getServerSideProps: GetServerSideProps<
  DetailsProductProps
> = async (ctx) => {
  const { slug } = ctx.params as Params;
  const { data } = await productService.getAll();
  const product = data.find((prod) => prod.id === supJsonParse(decoded(slug)));

  if (!product) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      product
    }
  };
};

export default ProductPage;
