import { Meta, Story } from "@storybook/react/types-6-0";
import { SearchBar, SearchBarProps } from "./index";

export default {
  title: "Components/SearchBar",
  component: SearchBar,
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  args: {
    handleSearch(search, target?) {
      console.log(search, target);
    },
    setSearchProduct(value) {
      console.log(value);
    },
    searchProduct: "",
    type: "name"
  }
} as Meta<SearchBarProps>;

export const Basic: Story<SearchBarProps> = (args) => <SearchBar {...args} />;
