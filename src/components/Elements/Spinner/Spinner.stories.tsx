import { Meta, Story } from "@storybook/react";
import { Spinner, SpinnerProps } from "./Spinner";

const meta: Meta = {
  title: "Components/Elements/Spinner",
  component: Spinner,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;


const Template: Story<SpinnerProps> = (props) => <Spinner {...props} />

export const SpinnerSM = Template.bind({});
SpinnerSM.args = { size: "sm", speed: "normal" }

export const SpinnerMD = Template.bind({});
SpinnerMD.args = { size: "md", speed: "normal" }

export const SpinnerLG = Template.bind({});
SpinnerLG.args = { size: "lg", speed: "normal" }