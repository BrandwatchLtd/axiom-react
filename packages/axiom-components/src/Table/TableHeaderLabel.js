import PropTypes from "prop-types";
import React, { Component } from "react";
import classnames from "classnames";
import Base from "../Base/Base";
import TextIcon from "../Typography/TextIcon";
import EllipsisTooltip from "../EllipsisTooltip/EllipsisTooltip";

export default class TableHeaderLabel extends Component {
  static propTypes = {
    /** Table header label */
    children: PropTypes.node,
    className: PropTypes.node,
    /** Expands table column (Incompatible with 'width') */
    grow: PropTypes.bool,
    /** Makes label clickable */
    onClick: PropTypes.func,
    /** Shrinks table column (Incompatible with 'width') */
    shrink: PropTypes.bool,
    /** Selects the column and sets the sort direction */
    sortDirection: PropTypes.oneOf(["ascending", "descending"]),
    /** Indicates the column is sortable if false it will remove the cloaked icon
    indicating sort direction */
    sortable: PropTypes.bool,
    /** Set text-align */
    textAlign: PropTypes.oneOf(["left", "right", "centre"]),
    /** Set percentage column width (Incompatible with 'grow' and 'shink') */
    width: PropTypes.number,
    /** Allow label text wrapping */
    wrap: PropTypes.bool,
  };

  static defaultProps = {
    textAlign: "left",
    sortable: true,
    wrap: false,
  };

  render() {
    const {
      children,
      className,
      grow,
      onClick,
      shrink,
      sortDirection,
      textAlign,
      sortable,
      width,
      wrap,
      ...rest
    } = this.props;

    const classes = classnames(
      "ax-table__header-label",
      `ax-table__header-label--align-${textAlign}`,
      {
        "ax-table__header-label--grow": grow && !width,
        "ax-table__header-label--selected": sortDirection !== undefined,
        "ax-table__header-label--shrink": shrink && !width,
      },
      className
    );

    const styles = width && {
      width: `${Math.max(0, Math.min(width, 100))}%`,
    };

    return (
      <Base {...rest} Component="th" className={classes} style={styles}>
        <div
          className="ax-table__header-button"
          disabled={!onClick}
          onClick={onClick}
          role="button"
        >
          {wrap ? (
            <EllipsisTooltip className="ax-table__header-tooltip--wrap">
              {children}
            </EllipsisTooltip>
          ) : (
            children
          )}
          {sortable && (
            <TextIcon
              className="ax-table__header-icon"
              cloak={sortDirection === undefined}
              name={
                sortDirection === "descending" ? "triangle-down" : "triangle-up"
              }
              spaceLeft={textAlign === "left" ? "x2" : undefined}
              spaceRight={textAlign === "right" ? "x2" : undefined}
            />
          )}
        </div>
      </Base>
    );
  }
}
