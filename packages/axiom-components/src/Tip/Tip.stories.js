import React from "react";
import Tip from "./Tip";
import AlertCard from "../AlertCard/AlertCard";
import Base from "../Base/Base";

export default {
  title: "Tip",
  component: Tip,
};

export function Default() {
  return (
    <Base container>
      <Tip color="shade-2" shadow={false} size="medium">
        <AlertCard onRemoveClick={() => {}} shade="shade-2" space="x2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit
          amet pulvinar lorem. Aliquam porta eros at dui commodo posuere.
        </AlertCard>
      </Tip>
    </Base>
  );
}
