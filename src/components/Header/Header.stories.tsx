import { Meta, Story } from "@storybook/react/types-6-0";
import { Header } from "./index";

export default {
  title: "Components/Header",
  component: Header,
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

export const Basic: Story = (args) => <Header {...args} />;
