import React, { useState } from "react";
import EditableTitle from "./EditableTitle";
import EditableLine from "./EditableLine";
import Heading from "../Typography/Heading";

export default {
  title: "Editable",
  component: EditableLine,
};

export function Default() {
  const [value, setValue] = useState("Editable text...");

  return (
    <EditableTitle>
      <Heading textSize="headline">
        <EditableLine
          onChange={(event) => setValue(event.target.value)}
          placeholder="Editable text here"
          value={value}
        />
      </Heading>
    </EditableTitle>
  );
}
