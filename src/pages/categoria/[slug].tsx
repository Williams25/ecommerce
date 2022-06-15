import { Home } from "layouts/Home";
import { GetStaticProps, GetStaticPaths } from "next";
import { Params } from "pages/pre-carrinho/[slug]";
import { productService } from "services/products";
import { Products } from "types/Products";

export type CategoriePageProps = {
  products: Products[];
};

const CategoriePage = ({ products }: CategoriePageProps) => {
  return <Home products={products} />;
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = [
    {
      params: { slug: "Gamer" }
    },
    {
      params: { slug: "Monitores" }
    },
    {
      params: { slug: "Hardware" }
    },
    {
      params: { slug: "Celular" }
    },
    {
      params: { slug: "Áudio" }
    }
  ];

  return {
    paths,
    fallback: "blocking"
  };
};

export const getStaticProps: GetStaticProps<CategoriePageProps> = async (
  ctx
) => {
  const { slug } = ctx.params as Params;

  const { data } = await productService.getAll();

  const products = data.filter((p) => p.categorie === slug);

  if (products.length === 0) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      products
    },
    revalidate: 200
  };
};

export default CategoriePage;
