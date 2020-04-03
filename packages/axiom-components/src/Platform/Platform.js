import PropTypes from "prop-types";
import React, { useMemo } from "react";
import classnames from "classnames";
import Base from "../Base/Base";
import PlaformContext from "./PlatformContext";
import "./Platform.css";

export default function Platform({
  children,
  onConsoleClose,
  openConsolePosition,
  openConsoleWidth,
  responsive,
  shade = "shade-1",
  ...rest
}) {
  const classes = classnames("ax-platform", `ax-platform--${shade}`, {
    "ax-platform--responsive": responsive,
    "ax-platform--console-open": openConsolePosition,
  });

  const providerValue = useMemo(
    () => ({
      onConsoleClose,
      openConsolePosition,
      openConsoleWidth,
    }),
    [onConsoleClose, openConsolePosition, openConsoleWidth]
  );

  return (
    <PlaformContext.Provider value={providerValue}>
      <Base {...rest} className={classes}>
        {children}
        <div
          className="ax-platform__mask"
          onClick={() => onConsoleClose && onConsoleClose()}
        />
      </Base>
    </PlaformContext.Provider>
  );
}

Platform.propTypes = {
  children: PropTypes.node.isRequired,
  onConsoleClose: PropTypes.func,
  openConsolePosition: PropTypes.oneOf(["left", "right"]),
  openConsoleWidth: PropTypes.string,
  responsive: PropTypes.bool,
  shade: PropTypes.oneOf(["shade-1", "shade-2"]),
};
