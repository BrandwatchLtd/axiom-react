import React from "react";
import Menu from "./Menu";
import MenuItem from "./MenuItem";

export default {
  title: "Menu",
  component: Menu,
  subcomponents: { MenuItem },
};

export function Default() {
  return (
    <Menu>
      <MenuItem active>Menu item</MenuItem>
      <MenuItem>Menu item</MenuItem>
      <MenuItem disabled>Menu item</MenuItem>
    </Menu>
  );
}
