import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import AlertIcon from '../alert-icon/AlertIcon';
import Base from '../base/Base';
import Grid from '../grid/Grid';
import GridCell from '../grid/GridCell';
import Icon from '../icon/Icon';
import Link from '../typography/Link';
import './Alert.css';

export default class Alert extends Component {
  static propTypes = {
    /** Content displayed next to the AlertIcon */
    children: PropTypes.node.isRequired,
    /** Size of the Alert */
    size: PropTypes.oneOf(['small', 'medium']),
    /** Type of Alert that affects the coloring and icon */
    type: PropTypes.oneOf(['success', 'warning', 'error', 'info']),
    /** An optional callback that when given adds a removable cross */
    onRemoveClick: PropTypes.func,
  };

  static defaultProps = {
    size: 'small',
    type: 'info',
  };

  render() {
    const { children, size, type, onRemoveClick, ...rest } = this.props;
    const classes = classnames('ax-alert', `ax-alert--${size}`, `ax-alert--${type}`);

    return (
      <Base { ...rest } className={ classes } theme="light">
        <Grid gutters="tiny" responsive={ false } verticalAlign="middle">
          <GridCell shrink>
            <AlertIcon
                style="subtle"
                type={ type } />
          </GridCell>

          <GridCell>
            { children }
          </GridCell>

          { onRemoveClick && (
            <GridCell shrink>
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
