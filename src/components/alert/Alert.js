import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { Base, Grid, GridCell, IconLink } from 'bw-axiom';

if (__INCLUDE_CSS__) {
  require('./Alert.scss');
}

export default class Alert extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.oneOf(['success', 'warning', 'error', 'info']),
    onRemoveClick: PropTypes.func,
  };

  static defaultProps = {
    color: 'info',
  };

  render() {
    const { children, color, onRemoveClick, ...rest } = this.props;
    const classes = classnames('ax-alert', `ax-alert--${color}`);

    return (
      <Base { ...rest } className={ classes }>
        <Grid responsive={ false }>
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
