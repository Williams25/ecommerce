import { Header } from "components/Header";
import Link from "next/link";
import styled from "./styles.module.scss";
export const NotFoundException = () => {
  return (
    <div className={styled.container}>
      <Header />

      <section className={styled.content}>
        <div className={styled.products}>
          <div className={styled.badpage}>
            <h1>Página não encontrada</h1>
            <Link href="/">
              <a>
                volte para home e procure por produtos e adicione em seu
                carrinho!
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
