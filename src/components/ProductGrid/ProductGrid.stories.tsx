import { Meta, Story } from "@storybook/react/types-6-0";
import { ProductGrid } from "./index";

export default {
title: "Components/ProductGrid",
component: ProductGrid,
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
<ProductGrid {...args} />;