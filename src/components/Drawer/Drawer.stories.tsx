import { Meta, Story } from "@storybook/react/types-6-0";
import { Drawer, DrawerProps } from "./index";

export default {
  title: "Components/Drawer",
  component: Drawer,
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  args: {
    drawer: true,
    toggleDrawer(toggle) {
      console.log(toggle);
    }
  }
} as Meta<DrawerProps>;

export const Basic: Story<DrawerProps> = (args) => <Drawer {...args} />;
