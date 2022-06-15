import { Meta, Story } from "@storybook/react/types-6-0";
import { NotFoundException } from "./index";

export default {
title: "Pages/NotFoundException",
component: NotFoundException,
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
<NotFoundException {...args} />;