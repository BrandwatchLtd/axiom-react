import React from "react";
import Badge from "./Badge";
import BadgeGroup from "./BadgeGroup";

export default {
  title: "Badge",
  component: Badge,
};

export function Default() {
  return (
    <BadgeGroup>
      <Badge color="moon-lagoon">128%</Badge>
      <Badge color="blast-off">+30031</Badge>
      <Badge color="giant-leap">Beta</Badge>
      <Badge color="new-horizon">NEW</Badge>
    </BadgeGroup>
  );
}
