import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { Base, Grid, GridCell, Icon, Link } from 'bw-axiom';
import './Alert.css';

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
        <Grid gutters="small" responsive={ false } verticalAlign="middle">
          <GridCell>
            { children }
          </GridCell>

          { onRemoveClick && (
            <GridCell shrink={ true }>
              <Link onClick={ onRemoveClick } style="light">
                <Icon name="cross" />
              </Link>
            </GridCell>
          ) }
        </Grid>
      </Base>
    );
  }
}
