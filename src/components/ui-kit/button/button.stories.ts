import "./button.scss";
import template from "./button.pug"; // теперь это функция
import type { Meta, StoryObj } from "@storybook/html";

interface ButtonArgs {
  label: string;
  className?: string;
  style?: string;
  onClick?: () => void;
}

const meta: Meta<ButtonArgs> = {
  title: "Components/Button",
  argTypes: {
    label: { control: "text" },
    className: { control: "text" },
    style: { control: "text" },
    onClick: { action: "clicked" },
  },
  render: (args) => {
    const container = document.createElement("div");
    container.innerHTML = template({
      label: args.label,
      className: `button ${args.className || ""}`,
      style: args.style || "",
    });

    if (args.onClick) {
      container
        .querySelector("button")
        ?.addEventListener("click", args.onClick);
    }

    return container;
  },
};

export default meta;
type Story = StoryObj<ButtonArgs>;

export const Primary: Story = {
  args: {
    label: "Primary Button",
    className: "button--primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary Button",
    className: "button--secondary",
  },
};
