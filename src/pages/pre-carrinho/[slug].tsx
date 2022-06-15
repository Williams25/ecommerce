import { PreviousCart, PreviousCartProps } from "layouts/PreviousCart";
import type { GetServerSideProps } from "next";
import { decoded } from "utils/base64";
import { productService } from "services/products";

const PreviousCartPage = ({ product }: PreviousCartProps) => {
  return <PreviousCart product={product} />;
};

export type Params = {
  slug: string;
};

export const getServerSideProps: GetServerSideProps<PreviousCartProps> = async (
  ctx
) => {
  const { slug } = ctx.params as Params;
  const { data } = await productService.getAll();
  const product = data.find((prod) => prod.id === JSON.parse(decoded(slug)));

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

export default PreviousCartPage;
