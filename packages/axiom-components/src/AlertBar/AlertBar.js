import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import AlertIcon from '../AlertIcon/AlertIcon';
import Base from '../Base/Base';
import Grid from '../Grid/Grid';
import GridCell from '../Grid/GridCell';
import Icon from '../Icon/Icon';
import Link from '../Typography/Link';
import './AlertBar.css';

export default class AlertBar extends Component {
  /** If you change the propTypes it would be great if you could also change the typescript file (axiom-components/src/index.d.ts) */
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
