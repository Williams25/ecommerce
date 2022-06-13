import { Meta, Story } from "@storybook/react/types-6-0";
import { Home, HomeProps } from "./index";
import prod from "../../../prod.json";

export default {
  title: "Pages/Home",
  component: Home,
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
} as Meta<HomeProps>;

export const Basic: Story<HomeProps> = (args) => <Home {...args} />;
