import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import {
  Base,
  Grid,
  GridCell,
  Icon,
  AlertIcon,
  Link,
} from 'bw-axiom';
import './Alert.css';

export default class Alert extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(['success', 'warning', 'error', 'info']),
    onRemoveClick: PropTypes.func,
  };

  static defaultProps = {
    type: 'info',
  };

  render() {
    const { children, type, onRemoveClick, ...rest } = this.props;
    const classes = classnames('ax-alert', `ax-alert--${type}`);

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
