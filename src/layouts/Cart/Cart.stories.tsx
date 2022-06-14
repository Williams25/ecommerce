import { Meta, Story } from "@storybook/react/types-6-0";
import { Cart } from "./index";

export default {
  title: "Pages/Cart",
  component: Cart,
  parameters: {
    layout: "fullscreen",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
} as Meta;

export const Basic: Story = (args) => <Cart {...args} />;
