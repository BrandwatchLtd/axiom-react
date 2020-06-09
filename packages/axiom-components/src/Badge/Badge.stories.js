import React from "react";
import Badge from "./Badge";
import BadgeGroup from "./BadgeGroup";

export default {
  title: "Badge",
  component: Badge,
};

export function Default(props) {
  return (
    <Badge color="blast-off" {...props}>
      99%
    </Badge>
  );
}

export function GroupedBadges(props) {
  return (
    <BadgeGroup>
      <Badge color="moon-lagoon">128%</Badge>
      <Badge color="blast-off">+30031</Badge>
    </BadgeGroup>
  );
}
