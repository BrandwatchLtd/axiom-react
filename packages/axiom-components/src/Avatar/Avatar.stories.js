import React from "react";
import Avatar from "./Avatar";

export default {
  title: "Avatar",
  component: Avatar,
};

export function Default({ border, children, size, shape }) {
  return (
    <Avatar border={border} size={size} shape={shape} src={"/avatar.png"}>
      {children}
    </Avatar>
  );
}

Default.story = { args: { children: "username", size: "4rem" } };
