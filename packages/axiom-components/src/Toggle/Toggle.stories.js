import React, { useState } from "react";
import Toggle from "./Toggle";

export default {
  title: "Toggle",
  component: Toggle,
};

export function Default({ children, ...rest }) {
  const [toggled, setToggled] = useState(false);

  return (
    <Toggle onToggle={() => setToggled((t) => !t)} toggled={toggled} {...rest}>
      {children}
    </Toggle>
  );
}

Default.args = { children: "label" };
