import { Meta, Story } from "@storybook/react/types-6-0";
import { DetailsProduct, DetailsProductProps } from "./index";
import prod from "../../../prod.json";

export default {
  title: "Pages/DetailsProduct",
  component: DetailsProduct,
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
    product: { ...prod[1] }
  }
} as Meta<DetailsProductProps>;

export const Basic: Story<DetailsProductProps> = (args) => (
  <DetailsProduct {...args} />
);
