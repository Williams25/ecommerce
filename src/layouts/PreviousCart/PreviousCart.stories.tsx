import { Meta, Story } from "@storybook/react/types-6-0";
import { PreviousCart, PreviousCartProps } from "./index";
import prod from "../../../prod.json";

export default {
  title: "Pages/PreviousCart",
  component: PreviousCart,
  parameters: {
    layout: "fullscreen",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  args: {
    product: { ...prod[0] }
  }
} as Meta<PreviousCartProps>;

export const Basic: Story<PreviousCartProps> = (args) => (
  <PreviousCart {...args} />
);
