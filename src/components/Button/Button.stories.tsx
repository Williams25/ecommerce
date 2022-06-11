import { Meta, Story } from "@storybook/react/types-6-0";
import { Button, ButtonProps } from "./index";
import { MdShoppingCart } from "react-icons/md";

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  args: {
    title: "Comprar",
    variant: "button-buy",
    size: "small",
    fullWidth: false,
    icon: <MdShoppingCart />,
    positionIcon: "left"
  },
  argTypes: {
    icon: {
      type: "symbol"
    }
  }
} as Meta<ButtonProps>;

export const Basic: Story<ButtonProps> = (args) => <Button {...args} />;
