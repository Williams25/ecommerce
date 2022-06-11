import { Meta, Story } from "@storybook/react/types-6-0";
import { ProductGrid, ProductGridProps } from "./index";
import prod from "../../../prod.json";

export default {
  title: "Components/ProductGrid",
  component: ProductGrid,
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  args: {
    products: prod
  }
} as Meta<ProductGridProps>;

export const Basic: Story<ProductGridProps> = (args) => (
  <ProductGrid {...args} />
);
