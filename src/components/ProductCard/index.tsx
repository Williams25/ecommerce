import Image from "next/image";
import styled from "./styles.module.scss";

export const ProductCard = () => {
  return (
    <div className={styled.cardContainer}>
      <div className={styled.boxProduct}>
        <div className={styled.imageBox}>
          <Image
            src="https://i.imgur.com/ExJ8WOq.jpg"
            alt=""
            width={368}
            height={368}
          />
        </div>
        <div className={styled.info}>
          <h1>
            Processador AMD Ryzen 7 5700G, 3.8GHz (4.6GHz Max Turbo), AM4, Vídeo
            Integrado, 8 Núcleos - 100-100000263BOX
          </h1>
          <span className={styled.oldPriceCard}>R$ 5,14</span>
          <h2>R$ 7,99</h2>
          <span className={styled.priceTextCard}>À vista no PIX</span>
        </div>
      </div>

      <button>teste</button>
    </div>
  );
};
