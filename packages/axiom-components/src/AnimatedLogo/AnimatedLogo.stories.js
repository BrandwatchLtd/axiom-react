import React, { useState } from "react";
import AnimatedLogo from "./AnimatedLogo";

export default {
  title: "AnimatedLogo",
  component: AnimatedLogo,
};

export function Default({ shouldAnimate, ...rest }) {
  const [hover, setHover] = useState(false);

  return (
    <AnimatedLogo
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      shouldAnimate={shouldAnimate && hover}
      {...rest}
    />
  );
}
