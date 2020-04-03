import PropTypes from "prop-types";
import React, { useContext } from "react";
import Base from "../Base/Base";
import PlatformContext from "./PlatformContext";

export default function Canvas({ children, ...rest }) {
  const { openConsoleWidth, openConsolePosition } = useContext(PlatformContext);

  const style = {
    marginLeft: openConsolePosition === "left" && openConsoleWidth,
    marginRight: openConsolePosition === "right" && openConsoleWidth,
  };

  return (
    <Base {...rest} className="ax-platform__canvas" style={style}>
      {children}
    </Base>
  );
}

Canvas.propTypes = {
  children: PropTypes.node,
};
