import { Meta, Story } from "@storybook/react/types-6-0";
import { ProductCard } from "./index";

export default {
  title: "Components/ProductCard",
  component: ProductCard,
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
} as Meta;

export const Basic: Story = (args) => <ProductCard {...args} />;
