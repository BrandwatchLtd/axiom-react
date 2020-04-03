import PropTypes from "prop-types";
import React, { Component } from "react";
import Base from "../Base/Base";
import classnames from "classnames";

export default class TableBody extends Component {
  static propTypes = {
    /** TableRows */
    children: PropTypes.node,
    className: PropTypes.string,
  };

  render() {
    const { children, className, ...rest } = this.props;

    const classes = classnames("ax-table__body", className);

    return (
      <Base {...rest} Component="tbody" className={classes}>
        {children}
      </Base>
    );
  }
}
