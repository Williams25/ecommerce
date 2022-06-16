import { Meta, Story } from "@storybook/react/types-6-0";
import { Coupons } from "./index";

export default {
title: "Components/Coupons",
component: Coupons,
parameters: {
controls: {
matchers: {
color: /(background|color)$/i,
date: /Date$/
}
}
}
} as Meta;

export const Basic: Story = (args) =>
<Coupons {...args} />;