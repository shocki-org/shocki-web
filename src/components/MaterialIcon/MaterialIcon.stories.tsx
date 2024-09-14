import { Meta, StoryObj } from "@storybook/react";
import MaterialIcon from "./MaterialIcon";

const meta: Meta<typeof MaterialIcon> = {
  title: "Components/Material Icon",
  component: MaterialIcon,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large", "x-large"],
    },
    color: { control: "color" },
    children: { control: "text", description: "Icon name" },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MaterialIcon>;

export const Small: Story = {
  args: {
    children: "home",
    size: "small",
    color: "var(--text-status-unselected)",
  },
};

export const Medium: Story = {
  args: {
    children: "star",
    size: "medium",
    color: "var(--background-positive-default)",
  },
};

export const Large: Story = {
  args: {
    children: "favorite",
    size: "large",
    color: "var(--background-negative-default)",
  },
};

export const ExtraLarge: Story = {
  args: {
    children: "settings",
    size: "x-large",
    color: "var(--background-warning-default)",
  },
};
