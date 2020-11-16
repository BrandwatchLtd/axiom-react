import React from "react";
import Tab from "./Tab";
import Tabset from "./Tabset";

export default {
  title: "Tabset",
  component: Tabset,
  subcomponents: { Tab },
};

export function Default({ size, space, activeTabIndex }) {
  return (
    <Tabset size={size} space={space} activeTabIndex={activeTabIndex}>
      <Tab title="Tab 1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris
        libero, suscipit eu dignissim eu, consectetur in mauris. Donec semper
        tristique ipsum non vehicula. In eget libero lobortis, sollicitudin
        velit nec, accumsan dolor. Morbi in finibus mauris, id pretium ipsum.
        Sed quis massa tempus nunc molestie ultrices sit amet vel urna.
      </Tab>
      <Tab title="Tab 2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris
        libero, suscipit eu dignissim eu, consectetur in mauris. Donec semper
        tristique ipsum non vehicula. In eget libero lobortis, sollicitudin
        velit nec, accumsan dolor. Morbi in finibus mauris, id pretium ipsum.
        Sed quis massa tempus nunc molestie ultrices sit amet vel urna.
      </Tab>
      <Tab title="disabled" disabled>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris
        libero, suscipit eu dignissim eu, consectetur in mauris. Donec semper
        tristique ipsum non vehicula. In eget libero lobortis, sollicitudin
        velit nec, accumsan dolor. Morbi in finibus mauris, id pretium ipsum.
        Sed quis massa tempus nunc molestie ultrices sit amet vel urna.
      </Tab>
    </Tabset>
  );
}
