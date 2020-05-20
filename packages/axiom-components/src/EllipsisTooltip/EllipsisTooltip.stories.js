import React from "react";
import EllipsisTooltip from "./EllipsisTooltip";

export default {
  title: "EllipsisTooltip",
  component: EllipsisTooltip,
};

export function Default() {
  return (
    <div style={{ width: "100px", display: "block" }}>
      <EllipsisTooltip>Hover to see wrapped text.</EllipsisTooltip>
    </div>
  );
}
