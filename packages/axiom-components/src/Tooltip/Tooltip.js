import PropTypes from "prop-types";
import React, { useState, cloneElement } from "react";
import { findComponent } from "@brandwatch/axiom-utils";
import Position from "../Position/Position";
import PositionSource from "../Position/PositionSource";
import PositionTarget from "../Position/PositionTarget";
import { TooltipSourceRef } from "./TooltipSource";
import { TooltipTargetRef } from "./TooltipTarget";

/**
 * Uses the Position component to show content on hover.
 */
const Tooltip = React.forwardRef(
  (
    {
      children,
      delay = false,
      onClick,
      position = "top",
      enabled = true,
      ...rest
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = useState(false);

    React.useImperativeHandle(ref, () => ({
      showTooltip,
      hideTooltip,
    }));

    function showTooltip() {
      if (enabled && !isVisible) {
        setIsVisible(true);
      }
    }

    function hideTooltip() {
      setIsVisible(false);
    }

    return (
      <Position
        {...rest}
        enabled={enabled}
        isVisible={isVisible}
        position={position}
        showArrow
      >
        <PositionTarget delay={delay} onClick={onClick}>
          {cloneElement(findComponent(children, TooltipTargetRef), {
            showTooltip,
            hideTooltip,
          })}
        </PositionTarget>
        <PositionSource>
          {findComponent(children, TooltipSourceRef)}
        </PositionSource>
      </Position>
    );
  }
);

Tooltip.displayName = "Tooltip";

Tooltip.propTypes = {
  /**
   * Children inside Tooltip should contain all of and
   * only TooltipTarget and TooltipSource!
   */
  children: PropTypes.node,
  /**
   * Adds delay to the opening of the tooltip
   */
  delay: PropTypes.bool,
  /**
   * Adds control to enable or disable showing the TooltipSource
   */
  enabled: PropTypes.bool,
  /** @ignore */
  onClick: PropTypes.func,
  /**
   * Controls the starting position around TooltipTarget in which the
   * TooltipSource will attempt to be placed. If that position is not available
   * due to collision, it will be placed according to the flip behaviour  until
   * a valid position is found.
   */
  position: PropTypes.oneOf(["top", "right", "bottom", "left"]),
};

export default Tooltip;
