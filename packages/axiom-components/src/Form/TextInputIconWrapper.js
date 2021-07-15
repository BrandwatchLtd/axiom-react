import classnames from "classnames";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { isComponent } from "@brandwatch/axiom-utils";
import Icon from "../Icon/Icon";
import Link from "../Typography/Link";
import Tooltip from "../Tooltip/Tooltip";
import TooltipContent from "../Tooltip/TooltipContent";
import TooltipContext, { TooltipContextRef } from "../Tooltip/TooltipContext";
import TooltipSource from "../Tooltip/TooltipSource";
import TooltipTarget from "../Tooltip/TooltipTarget";

export const TextInputIconWrapperRef = "TextInputIconWrapper";

export default class TextInputIconWrapper extends Component {
  static propTypes = {
    /** Child element */
    children: PropTypes.node.isRequired,
    /** Alignment inside the input field */
    align: PropTypes.oneOf(["left", "right"]),
    /** Click handler, applies styling to indicate it is clickable. */
    onClick: PropTypes.func,
    /** Optional tooltip for the icon. */
    tooltip: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    /** Optional tooltip color. Default is "carbon" */
    tooltipColor: PropTypes.oneOf([
      "success",
      "warning",
      "error",
      "info",
      "carbon",
      "white",
    ]),
  };

  static defaultProps = {
    align: "right",
    tooltipColor: "carbon",
  };

  static typeRef = TextInputIconWrapperRef;

  render() {
    const {
      align,
      onClick,
      tooltip,
      children,
      tooltipColor,
      ...rest
    } = this.props;

    const className = classnames("ax-input__icon", {
      [`ax-input__icon--align-${align}`]: align,
    });

    const icon = tooltip ? (
      <Tooltip isVisible>
        <TooltipTarget>{children}</TooltipTarget>
        <TooltipSource width="auto">
          {isComponent(tooltip, TooltipContextRef) ? (
            tooltip
          ) : (
            <TooltipContext color={tooltipColor}>
              <TooltipContent size="tiny">{tooltip}</TooltipContent>
            </TooltipContext>
          )}
        </TooltipSource>
      </Tooltip>
    ) : (
      children
    );

    return (
      <span className={className}>
        {onClick ? (
          <Link {...rest} onClick={onClick} style="subtle">
            {icon}
          </Link>
        ) : (
          icon
        )}
      </span>
    );
  }
}
