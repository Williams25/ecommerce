import { Meta, Story } from "@storybook/react/types-6-0";
import { AddQuantityControl, AddQuantityControlProps } from "./index";

export default {
  title: "Components/AddQuantityControl",
  component: AddQuantityControl,
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  args: {
    onChangeQuantity(quantity, op) {
      console.log(quantity, op);
    },
    quantity: 1
  }
} as Meta<AddQuantityControlProps>;

export const Basic: Story<AddQuantityControlProps> = (args) => (
  <AddQuantityControl {...args} />
);
