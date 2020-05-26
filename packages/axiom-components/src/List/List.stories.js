import React from "react";
import List from "./List";
import ListItem from "./ListItem";

export default {
  title: "List",
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

export function Inline() {
  return (
    <List style="inline">
      <ListItem>List item</ListItem>
      <ListItem>List item</ListItem>
      <ListItem>List item</ListItem>
    </List>
  );
}

export function Ordered() {
  return (
    <List style="ordered">
      <ListItem>List item</ListItem>
      <ListItem>List item</ListItem>
      <ListItem>List item</ListItem>
    </List>
  );
}

export function None() {
  return (
    <List style="none">
      <ListItem>List item</ListItem>
      <ListItem>List item</ListItem>
      <ListItem>List item</ListItem>
    </List>
  );
}
