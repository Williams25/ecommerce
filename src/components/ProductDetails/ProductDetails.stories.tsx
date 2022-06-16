import { Meta, Story } from "@storybook/react/types-6-0";
import { ProductDetails, ProductDetailsProps } from "./index";
import prod from "../../../prod.json";

export default {
  title: "Components/ProductDetails",
  component: ProductDetails,
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  args: {
    product: { ...prod[1] }
  }
} as Meta<ProductDetailsProps>;

export const Basic: Story<ProductDetailsProps> = (args) => (
  <ProductDetails {...args} />
);
