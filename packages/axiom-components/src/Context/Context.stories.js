import React from "react";
import Context from "./Context";
import ContextContent from "./ContextContent";
import ContextMenu from "./ContextMenu";
import ContextMenuItem from "./ContextMenuItem";

export default {
  title: "Context",
  component: Context,
  subcomponents: { ContextContent, ContextMenu, ContextMenuItem },
};

export function Default(props) {
  return <Context {...props}>Default Context</Context>;
}

export function WithContextContent(props) {
  return (
    <Context {...props}>
      <ContextContent paddingVertical="medium" height="50px">
        Good Job
      </ContextContent>
    </Context>
  );
}

WithContextContent.args = { color: "success" };

WithContextContent.parameters = {
  docs: {
    description: {
      story: "ContextContent allows you to configure the contents appearance.",
    },
  },
};

export function WithContextMenu({ ...rest }) {
  return (
    <Context {...rest}>
      <ContextMenu paddingVertical="medium">
        <ContextMenuItem>Top</ContextMenuItem>
        <ContextMenuItem selected>Middle</ContextMenuItem>
        <ContextMenuItem>Bottom</ContextMenuItem>
      </ContextMenu>
    </Context>
  );
}

WithContextMenu.parameters = {
  docs: {
    description: {
      story: "ContextMenu and ContextMenuItem can be used to help build menus.",
    },
  },
};
