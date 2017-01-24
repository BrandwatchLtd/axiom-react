import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { Base, Grid, GridCell, Icon, Link } from 'bw-axiom';

if (__INCLUDE_CSS__) {
  require('./Alert.scss');
}

export default class Alert extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.oneOf(['grey', 'valid', 'invalid']),
    onRemoveClick: PropTypes.func,
  };

  static defaultProps = {
    color: 'grey',
  };

  render() {
    const { children, color, onRemoveClick, ...rest } = this.props;
    const classes = classnames('ax-alert', `ax-alert--${color}`);

    return (
      <Base { ...rest } className={ classes }>
        <Grid responsive={ false } >
          <GridCell>
            { children }
          </GridCell>

          { do { if (onRemoveClick) {
            <GridCell shrink={ true }>
              <Link inheritColor={ true } onClick={ onRemoveClick }>
                <Icon name="cross" />
              </Link>
            </GridCell>;
          } } }
        </Grid>
      </Base>
    );
  }
}
