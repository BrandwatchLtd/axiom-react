import PropTypes from "prop-types";
import React, { Component } from "react";
import classnames from "classnames";
import Base from "../Base/Base";
import Grid from "../Grid/Grid";
import GridCell from "../Grid/GridCell";
import Icon from "../Icon/Icon";
import Link from "../Typography/Link";

export default class DialogHeader extends Component {
  static propTypes = {
    /** Header content inside the Dialog, a good place for a title */
    children: PropTypes.node,
    /** Class name to be appended to the element */
    className: PropTypes.string,
  };

  static contextTypes = {
    onRequestClose: PropTypes.func.isRequired,
  };

  render() {
    const { onRequestClose } = this.context;
    const { children, className, ...rest } = this.props;

    const classes = classnames("ax-dialog__header", className);

    return (
      <Base {...rest} className={classes}>
        <Grid responsive={false} verticalAlign="middle">
          <GridCell>{children}</GridCell>

          <GridCell shrink>
            <Link onClick={onRequestClose} style="subtle">
              <Icon name="cross" size="1.5rem" />
            </Link>
          </GridCell>
        </Grid>
      </Base>
    );
  }
}
