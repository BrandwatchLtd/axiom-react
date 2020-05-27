import React from "react";
import Heading from "./Heading";

export default {
  title: "Heading",
  component: Heading,
};

export function Default(props) {
  return <Heading {...props}>Heading</Heading>;
}
