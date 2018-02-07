import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import AlertIcon from '../alert-icon/AlertIcon';
import Base from '../base/Base';
import Grid from '../grid/Grid';
import GridCell from '../grid/GridCell';
import Icon from '../icon/Icon';
import Link from '../typography/Link';
import './AlertBar.css';

export default class AlertBar extends Component {
  static propTypes = {
    /** Content displayed next to the AlertIcon */
    children: PropTypes.node.isRequired,
    /** An optional callback that when given adds a removable cross */
    onRemoveClick: PropTypes.func,
    /** Size of the AlertBar */
    size: PropTypes.oneOf(['small', 'medium']),
    /** Type of AlertBar that affects the coloring and icon */
    type: PropTypes.oneOf(['success', 'warning', 'error', 'info']),
  };

  static defaultProps = {
    size: 'small',
    type: 'info',
  };

  render() {
    const { children, size, type, onRemoveClick, ...rest } = this.props;
    const classes = classnames('ax-alert-bar', `ax-alert-bar--${size}`, `ax-alert-bar--${type}`);

    return (
      <Base { ...rest } className={ classes }>
        <Grid gutters="tiny" responsive={ false } verticalAlign="middle">
          <GridCell shrink>
            <AlertIcon
                style="subtle"
                theme="day"
                type={ type } />
          </GridCell>

          <GridCell textColor="night" textStrong>
            { children }
          </GridCell>

          { onRemoveClick && (
            <GridCell shrink>
              <Link onClick={ onRemoveClick } style="night">
                <Icon name="cross" />
              </Link>
            </GridCell>
          ) }
        </Grid>
      </Base>
    );
  }
}
