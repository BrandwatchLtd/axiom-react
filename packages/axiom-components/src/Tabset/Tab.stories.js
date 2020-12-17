import React from "react";
import Tabset from "./Tabset";
import Tab from "./Tab";

export default {
  title: "Tab",
  component: Tab,
};

export function Default(props) {
  return (
    <Tabset>
      <Tab title="brandwatch Alerts" {...props}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris
        libero, suscipit eu dignissim eu, consectetur in mauris. Donec semper
        tristique ipsum non vehicula. In eget libero lobortis, sollicitudin
        velit nec, accumsan dolor. Morbi in finibus mauris, id pretium ipsum.
        Sed quis massa tempus nunc molestie ultrices sit amet vel urna.
      </Tab>
      <Tab title="twitter" {...props}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris
        libero, suscipit eu dignissim eu, consectetur in mauris. Donec semper
        tristique ipsum non vehicula. In eget libero lobortis, sollicitudin
        velit nec, accumsan dolor. Morbi in finibus mauris, id pretium ipsum.
        Sed quis massa tempus nunc molestie ultrices sit amet vel urna.
      </Tab>
      <Tab title={<span>facebook channel</span>} {...props}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris
        libero, suscipit eu dignissim eu, consectetur in mauris. Donec semper
        tristique ipsum non vehicula. In eget libero lobortis, sollicitudin
        velit nec, accumsan dolor. Morbi in finibus mauris, id pretium ipsum.
        Sed quis massa tempus nunc molestie ultrices sit amet vel urna.
      </Tab>
    </Tabset>
  );
}
