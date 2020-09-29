import React from "react";
import Heading from "./Heading";

export default {
  title: "Heading",
  component: Heading,
};

export function Default(props) {
  return <Heading {...props}>Heading</Heading>;
}

export function PassingBaseStyles(props) {
  return (
    <Heading {...props} textStrong>
      Heading
    </Heading>
  );
}

PassingBaseStyles.parameters = {
  docs: {
    description: {
      story:
        "As props passed to heading as spread to Base you can pass in the Text styles offered by [Base](/docs/base--text)",
    },
  },
};
