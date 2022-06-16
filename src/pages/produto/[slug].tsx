import { DetailsProduct, DetailsProductProps } from "layouts/DetailsProduct";
import type { GetStaticProps, GetStaticPaths } from "next";
import { decoded, encoded } from "utils/base64";
import { productService } from "services/products";
import { supJsonParse } from "utils/sup-jsonparse";

const ProductPage = ({ product }: DetailsProductProps) => {
  return <DetailsProduct product={product} />;
};

export type Params = {
  slug: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await productService.getAll();

  const paths = data.map((p) => {
    return {
      params: {
        slug: encoded(p.id)
      }
    };
  });

  return {
    paths,
    fallback: "blocking"
  };
};

export const getStaticProps: GetStaticProps<DetailsProductProps> = async (
  ctx
) => {
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
    },
    revalidate: 200
  };
};

export default ProductPage;
