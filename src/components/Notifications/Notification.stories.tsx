import { Meta, Story } from "@storybook/react";
import { Notification, NotificationProps } from "./Notification";

const meta: Meta = {
  title: "Components/Notification",
  component: Notification,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;


const Template: Story<NotificationProps> = (props) => <Notification {...props} />

export const Info = Template.bind({});
Info.args = {
  notification: {
    id: "_id",
    type: "info",
    title: "The info notification",
    message: "The message of the info notification"
  }
}

export const Success = Template.bind({});
Success.args = {
  notification: {
    id: "_id",
    type: "success",
    title: "The success notification",
    message: "The message of the success notification"
  }
}

export const Warning = Template.bind({});
Warning.args = {
  notification: {
    id: "_id",
    type: "warning",
    title: "The warning notification",
    message: "The message of the warning notification"
  }
}

export const Error = Template.bind({});
Error.args = {
  notification: {
    id: "_id",
    type: "error",
    title: "The error notification",
    message: "The message of the error notification"
  }
}