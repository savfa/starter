import "./button.scss";
import type { Meta, StoryObj } from "@storybook/html";
import buttonHtml from "/build/src/components/ui-kit/button/button.html?raw";

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
    container.innerHTML = buttonHtml;

    let buttonEl = container.querySelector("button")!;

    switch (args.className) {
      case "button--primary":
        buttonEl = container.querySelector(".button--primary")!;
        break;
      case "button--secondary":
        buttonEl = container.querySelector(".button--secondary")!;
        break;
      default:
        break;
    }

    if (args.onClick) {
      buttonEl.querySelector("button")?.addEventListener("click", args.onClick);
    }

    container.innerHTML = ``;
    container.append(buttonEl);
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
