import { Meta, Story } from "@storybook/react/types-6-0";
import { Purchase } from "./index";

export default {
  title: "Pages/Purchase",
  component: Purchase,
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

export const Basic: Story = (args) => <Purchase {...args} />;
