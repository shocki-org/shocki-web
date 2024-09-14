import { Meta, StoryObj } from "@storybook/react";
import InputComponent, { Props } from "./Input";
import { useState } from "react";

const meta: Meta<typeof InputComponent> = {
  title: "Components/Input",
  component: InputComponent,
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    visibility: { control: "boolean" },
    state: {
      control: false,
      description: "State of the input",
      table: {
        type: {
          summary: "[string, (value: string) => void]",
        },
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof InputComponent>;

const Input = (args: Omit<Props, "state">) => {
  const [value, setValue] = useState("");
  return <InputComponent {...args} state={[value, setValue]} />;
};

export const Default: Story = {
  render: (args) => <Input {...args} />,
  args: {
    label: "Username",
    placeholder: "Enter your username",
  },
};

export const WithIcon: Story = {
  render: (args) => <Input {...args} />,
  args: {
    label: "Password",
    placeholder: "Enter your password",
    visibility: true,
  },
};
