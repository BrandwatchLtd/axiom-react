import React from "react";
import Link from "./Link";

export default {
  title: "Link",
  component: Link,
};

export function Default(props) {
  return <Link {...props}>Default Link</Link>;
}
