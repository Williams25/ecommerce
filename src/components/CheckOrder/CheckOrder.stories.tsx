import { Meta, Story } from "@storybook/react/types-6-0";
import { CheckOrder, CheckOrderProps } from "./index";

export default {
  title: "Components/CheckOrder",
  component: CheckOrder,
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  args: {
    order: {
      toPay: 99,
      totalProducts: 2,
      valueProducts: 83
    },
    verifyCoupon(coupon) {
      console.log(coupon);
    },
    activeCoupons: {
      discount: 30,
      name: "50%OFF",
      id: 1
    }
  }
} as Meta<CheckOrderProps>;

export const Basic: Story<CheckOrderProps> = (args) => <CheckOrder {...args} />;
