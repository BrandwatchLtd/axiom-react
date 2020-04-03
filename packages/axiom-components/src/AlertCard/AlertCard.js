import PropTypes from "prop-types";
import React, { Component } from "react";
import classnames from "classnames";
import AlertIcon from "../AlertIcon/AlertIcon";
import Card from "../Card/Card";
import CardContent from "../Card/CardContent";
import Icon from "../Icon/Icon";
import Link from "../Typography/Link";
import "./AlertCard.css";

export default class AlertCard extends Component {
  static propTypes = {
    /** Content displayed next to the AlertIcon */
    children: PropTypes.node.isRequired,
    /** An optional callback that when given adds a removable cross */
    onRemoveClick: PropTypes.func,
    /** Shade of the background color */
    shade: PropTypes.oneOf(["shade-1", "shade-2", "shade-3", "shade-4"]),
    /** Increases/decreases the size of the card */
    size: PropTypes.oneOf(["small", "medium", "large"]),
    /** Type of AlertBar that affects the coloring and icon */
    type: PropTypes.oneOf(["success", "warning", "error", "info"]),
  };

  static defaultProps = {
    size: "medium",
    type: "info",
  };

  render() {
    const { children, size, type, onRemoveClick, ...rest } = this.props;
    const classes = classnames("ax-alert-card", `ax-alert-card--${size}`);

    return (
      <Card {...rest} size={size}>
        <CardContent size={size}>
          <div className={classes}>
            <div className="ax-alert-card__icon">
              <AlertIcon type={type} />
            </div>

            <div className="ax-alert-card__content">{children}</div>

            {onRemoveClick && (
              <div className="ax-alert-card__remove">
                <Link onClick={onRemoveClick} style="subtle">
                  <Icon name="cross" />
                </Link>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    );
  }
}
