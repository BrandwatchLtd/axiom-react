import React from "react";
import TextArea from "./TextArea";

export default {
  title: "Form/TextArea",
  component: TextArea,
};

export function Default() {
  return <TextArea label="Short Bio" placeholder="Tell us about yourself" />;
}
