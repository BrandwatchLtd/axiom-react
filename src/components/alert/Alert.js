import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { Base, Grid, GridCell, IconLink, IconIndicator } from 'bw-axiom';

if (__INCLUDE_CSS__) {
  require('./Alert.scss');
}

export default class Alert extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.oneOf(['success', 'warning', 'error', 'info']),
    withIcon: PropTypes.bool,
    onRemoveClick: PropTypes.func,
  };

  static defaultProps = {
    color: 'info',
  };

  render() {
    const { children, color, onRemoveClick, withIcon, ...rest } = this.props;
    const classes = classnames('ax-alert', `ax-alert--${color}`);
    const alertIconMap = {
      success: 'tick',
      warning: 'warning',
      error: 'warning',
      info: 'information',
    };

    return (
      <Base { ...rest } className={ classes }>
        <Grid gutters="small" responsive={ false } vAlign="middle">
          { do { if (withIcon) {
            <GridCell shrink={ true }>
              <IconIndicator color="subtle" name={ alertIconMap[color] } theme="light" />
            </GridCell>;
          } } }

          <GridCell>
            { children }
          </GridCell>

          { do { if (onRemoveClick) {
            <GridCell shrink={ true }>
              <IconLink name="cross" onClick={ onRemoveClick } theme="dark" />
            </GridCell>;
          } } }
        </Grid>
      </Base>
    );
  }
}
