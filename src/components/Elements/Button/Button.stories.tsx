import { Meta, Story } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

const meta: Meta = {
  title: "Components/Elements/Button",
  component: Button,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;


const Template: Story<ButtonProps> = (props) => <Button {...props} />

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary Button",
  variant: "primary"
}

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Secondary Button",
  variant: "secondary"
}

export const Danger = Template.bind({});
Danger.args = {
  children: "Danger Button",
  variant: "danger"
}


export const Contrast = Template.bind({});
Contrast.args = {
  children: "Contrast Button",
  variant: "contrast"
}