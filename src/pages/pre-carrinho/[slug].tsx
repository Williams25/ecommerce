import { PreviousCart, PreviousCartProps } from "layouts/PreviousCart";
import type { GetServerSideProps } from "next";
import prod from "../../../prod.json";

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

  const product = prod.find((prod) => prod.id === slug);

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
