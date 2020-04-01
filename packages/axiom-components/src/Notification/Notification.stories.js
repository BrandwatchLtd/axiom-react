import React from "react";
import Notification from "./Notification";
import Notifications from "./Notifications";

export default {
  title: "Components/Notification",
  component: Notification,
};

export function Default() {
  return (
    <Notifications>
      <Notification type="success">Success notification</Notification>
      <Notification type="error">Error notification</Notification>
      <Notification type="warning">Warning notification</Notification>
      <Notification type="info">Info notification</Notification>
    </Notifications>
  );
}
