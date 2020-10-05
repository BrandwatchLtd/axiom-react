import React from "react";
import Menu from "./Menu";
import MenuItem from "./MenuItem";

export default {
  title: "Menu",
  component: Menu,
  subcomponents: { MenuItem },
};

export function Default(props) {
  return (
    <Menu {...props}>
      <MenuItem active>Menu item</MenuItem>
      <MenuItem>Menu item</MenuItem>
      <MenuItem disabled>Menu item</MenuItem>
    </Menu>
  );
}
