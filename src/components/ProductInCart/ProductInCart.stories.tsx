import { Meta, Story } from "@storybook/react/types-6-0";
import { ProductInCart, ProductInCartProps } from "./index";

export default {
  title: "Components/ProductInCart",
  component: ProductInCart,
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  args: {
    product: {
      image: "https://i.imgur.com/ExJ8WOq.jpg",
      price: 249.9,
      name: "Headset Gamer HyperX Cloud Stinger, Drivers 50mm, Múltiplas Plataformas, P2 e P3 - HX-HSCS-BK/NA",
      id: "1",
      categorie: "Gamer",
      description:
        "Headset Gamer HyperX Cloud Stinger Faça parte da família Cloud da HyperX com o headset Cloud Stinger! Completa e versátil, a linha de headsets Cloud foi projetada para as necessidades de qualquer nível de jogador. Independente do seu sistema, estilo de jogo e características este headset irá te surpreender. O Cloud Stinger é um modelo licenciado oficialmente pela Xbox, perfeito para jogadores de Xbox One! Conforto, tecnologia e design a sua altura. HyperX confortável para todo tipo de rosto Os fones de ouvido giram 90° e ficam bem apoiados confortavelmente em torno do pescoço durante os intervalos de batalhas. Como todo headset HyperX, possui a tecnologia premiada da espuma memory foam. Além do conforto, a qualidade do som é impecável! Este modelo possui drivers de 50mm que oferecem qualidade de som impecáveis com precisão de áudio e garantindo sua imersão no jogo. Ainda para seu conforto possui controles em aço de alta qualidade são projetados para longa durabilidade e estabilidade, se ajustando perfeitamente. Som imersivo para você se sentir no jogo com o Headset HyperX Possui também controle deslizante de volume para sua comodidade. Ele está localizado na parte inferior do fone de ouvido direito. Seu microfone tem cancelamento de ruído que gira para ser silenciado. Também com ruído passivo integrado que reduz o ruído de fundo para uma melhor qualidade de voz em seus jogos multiplayer. Um dos seus diferenciais também é sua leveza, um headset leve e com toda a tecnologia que você precisa. Seu headset HyperX está no KaBuM!",
      stock: 20
    },
    type: "pre-cart"
  }
} as Meta<ProductInCartProps>;

export const Basic: Story<ProductInCartProps> = (args) => (
  <ProductInCart {...args} />
);
