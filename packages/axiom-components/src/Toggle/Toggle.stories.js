import React, { useState } from "react";
import Toggle from "./Toggle";

export default {
  title: "Toggle",
  component: Toggle,
};

export function Default() {
  const [toggled, setToggled] = useState(false);

  return (
    <Toggle onToggle={() => setToggled((t) => !t)} toggled={toggled}>
      Toggle label
    </Toggle>
  );
}
