import PropTypes from "prop-types";
import React, { PureComponent } from "react";
import Dropdown from "../Dropdown/Dropdown";
import DropdownContent from "../Dropdown/DropdownContent";
import DropdownContext from "../Dropdown/DropdownContext";
import DropdownSource from "../Dropdown/DropdownSource";
import DropdownTarget from "../Dropdown/DropdownTarget";

import Icon from "../Icon/Icon";
import Link from "../Typography/Link";

/**
 * Shows help text on click
 **/
export default class UsageHint extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    iconName: PropTypes.oneOf(["information-circle", "question-mark-circle"]),
    inline: PropTypes.bool,
    /** Padding size applied to the content area */
    padding: PropTypes.oneOf(["none", "small", "medium", "large"]),
    position: PropTypes.oneOf(["top", "bottom", "left", "right"]),
    showArrow: PropTypes.bool,
    /** Total width of the usageHint dropdown context */
    width: PropTypes.string,
  };

  static defaultProps = {
    inline: false,
    iconName: "question-mark-circle",
    padding: "large",
    showArrow: true,
  };

  render() {
    const { children, inline, iconName, padding, width, ...rest } = this.props;

    return (
      <Dropdown {...rest} showArrow>
        <DropdownTarget>
          <Link style="subtle">
            <Icon inline={inline} name={iconName} size="1rem" />
          </Link>
        </DropdownTarget>
        <DropdownSource>
          <DropdownContext width={width}>
            <DropdownContent padding={padding}>{children}</DropdownContent>
          </DropdownContext>
        </DropdownSource>
      </Dropdown>
    );
  }
}
