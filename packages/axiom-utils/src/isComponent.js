import { isValidElement } from "react";

export default (element, Component) =>
  isValidElement(element) &&
  (typeof Component === "string"
    ? element.type.typeRef === Component
    : element.type === Component);
