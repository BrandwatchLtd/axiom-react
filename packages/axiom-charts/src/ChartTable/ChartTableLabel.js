import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Base,
  Grid,
  GridCell,
  Icon,
  Link,
  Text,
} from "@brandwatch/axiom-components";

export default class ChartTableLabel extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    onToggleRowVisibility: PropTypes.func,
    width: PropTypes.string.isRequired,
  };

  render() {
    const {
      children,
      disabled,
      onToggleRowVisibility,
      width,
      ...rest
    } = this.props;

    return (
      <Base {...rest} className="ax-chart-table__label" style={{ width }}>
        <Grid
          gutters="tiny"
          onClick={onToggleRowVisibility}
          responsive={false}
          verticalAlign="middle"
        >
          <GridCell>
            <Text textColor={disabled ? "disabled" : null}>{children}</Text>
          </GridCell>
          {onToggleRowVisibility && (
            <GridCell cloak={!disabled} shrink>
              <Link style="subtle">
                <Icon name="preview" />
              </Link>
            </GridCell>
          )}
        </Grid>
      </Base>
    );
  }
}
