import { Meta, Story } from "@storybook/react/types-6-0";
import { Categories, CategoriesProps } from "./index";
import prod from "../../../prod.json";

export default {
  title: "Pages/Categories",
  component: Categories,
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
    products: prod
  }
} as Meta<CategoriesProps>;

export const Basic: Story<CategoriesProps> = (args) => <Categories {...args} />;
