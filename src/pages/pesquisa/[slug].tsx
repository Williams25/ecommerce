import { Search } from "layouts/Search";
import type { GetServerSideProps } from "next";
import { Params } from "pages/pre-carrinho/[slug]";
import { productService } from "services/products";
import { Products } from "types/Products";
import { decoded } from "utils/base64";

export type SearchPageProps = {
  products: Products[];
};

const SearchPage = ({ products }: SearchPageProps) => {
  return (
    <>
      <Search products={products} />{" "}
    </>
  );
};

export const getServerSideProps: GetServerSideProps<SearchPageProps> = async (
  ctx
) => {
  const { slug } = ctx.params as Params;
  const { data } = await productService.getAll();

  const products: Products[] = [];
  const slugProducts = JSON.parse(decoded(slug)) as string[];

  for (let i = 0; i < slugProducts.length; i++) {
    const filter = data.filter((p) => p.id === slugProducts[i]);
    if (filter) {
      products.push(...filter);
    }
  }

  if (products.length === 0) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      products
    }
  };
};

export default SearchPage;
