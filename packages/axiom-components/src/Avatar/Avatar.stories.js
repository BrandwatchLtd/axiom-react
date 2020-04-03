import React from "react";
import Avatar from "./Avatar";

export default {
  title: "Components/Avatar",
  component: Avatar,
};

export function Default() {
  return (
    <Avatar size="4rem" src={"/avatar.png"}>
      Default Avatar
    </Avatar>
  );
}
