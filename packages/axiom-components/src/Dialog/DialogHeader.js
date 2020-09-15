import PropTypes from "prop-types";
import React, { useContext } from "react";
import classnames from "classnames";
import Base from "../Base/Base";
import Grid from "../Grid/Grid";
import GridCell from "../Grid/GridCell";
import Icon from "../Icon/Icon";
import Link from "../Typography/Link";
import DialogContext from "./DialogContext";

export default function DialogHeader(props) {
  const { children, className, ...rest } = props;
  const { onRequestClose } = useContext(DialogContext);
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

DialogHeader.propTypes = {
  /** Header content inside the Dialog, a good place for a title */
  children: PropTypes.node,
  /** Class name to be appended to the element */
  className: PropTypes.string,
};
