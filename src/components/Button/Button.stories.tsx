import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    label: { control: "text" },
    onClick: { action: "clicked" },
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "negative", "disabled"],
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Primary Button",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary Button",
    variant: "secondary",
  },
};

export const Negative: Story = {
  args: {
    label: "Negative Button",
    variant: "negative",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Button",
    variant: "disabled",
    onClick: undefined, // disabled 상태에서는 클릭이 작동하지 않음
  },
};
