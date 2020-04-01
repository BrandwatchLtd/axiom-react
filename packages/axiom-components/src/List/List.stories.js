import React from "react";
import List from "./List";
import ListItem from "./ListItem";

export default {
  title: "Components/List",
  component: List,
  subcomponents: { ListItem },
};

export function Default() {
  return (
    <List>
      <ListItem>List item</ListItem>
      <ListItem>List item</ListItem>
      <ListItem>List item</ListItem>
    </List>
  );
}
