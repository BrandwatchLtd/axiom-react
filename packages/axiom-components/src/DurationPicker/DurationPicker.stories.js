import React, { useState } from "react";
import DurationPicker from "./DurationPicker";

export default {
  title: "Components/DurationPicker",
  component: DurationPicker,
};

export function Default() {
  const [duration, setDuration] = useState("P7M");

  return (
    <div>
      <DurationPicker
        onChange={(value) => setDuration(value)}
        value={duration}
      />
      <pre>Duration: {duration}</pre>
    </div>
  );
}
