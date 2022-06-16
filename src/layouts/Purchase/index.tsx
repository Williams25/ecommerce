import { Header } from "components/Header";
import Link from "next/link";
import styled from "./styles.module.scss";

export const Purchase = () => {
  return (
    <>
      <Header />

      <div className={styled.contentPurchase}>
        <h1>Compra finalizada com sucesso</h1>

        <Link href="/">
          <a>Voltar para home</a>
        </Link>
      </div>
    </>
  );
};
