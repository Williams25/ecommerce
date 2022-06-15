import { Meta, Story } from "@storybook/react/types-6-0";
import { Search, SearchProps } from "./index";
import prod from "../../../prod.json";

export default {
  title: "Pages/Search",
  component: Search,
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
} as Meta<SearchProps>;

export const Basic: Story<SearchProps> = (args) => <Search {...args} />;
