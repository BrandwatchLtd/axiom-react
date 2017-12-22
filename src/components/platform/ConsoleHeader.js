import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../base/Base';
import Icon from '../icon/Icon';
import Link from '../typography/Link';
import Grid from '../grid/Grid';
import GridCell from '../grid/GridCell';

export default class ConsoleHeader extends Component {
  static propTypes = {
    children: PropTypes.node,
    separator: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'large']),
  };

  static contextTypes = {
    onConsoleClose: PropTypes.func,
    consolePosition: PropTypes.string.isRequired,
  };

  static defaultProps = {
    size: 'large',
  };

  render() {
    const { onConsoleClose, consolePosition } = this.context;
    const { children, separator, size, ...rest } = this.props;
    const classes = classnames(
      'ax-platform__console-header',
      `ax-platform__console-header--${size}`, {
        'ax-platform__console-header--separator': separator,
      },
    );

    return (
      <Base { ...rest } className={ classes }>
        <Grid gutters="small" responsive={ false } verticalAlign="middle">
          { onConsoleClose && size === 'large' && consolePosition === 'right' && (
            <GridCell shrink>
              <Link onClick={ onConsoleClose } style="subtle">
                <Icon name="cross" size="1.5rem" />
              </Link>
            </GridCell>
          ) }

          <GridCell>
            { children }
          </GridCell>

          { onConsoleClose && size === 'large' && consolePosition === 'left' && (
            <GridCell shrink>
              <Link onClick={ onConsoleClose } style="subtle">
                <Icon name="cross" size="1.5rem" />
              </Link>
            </GridCell>
          ) }
        </Grid>
      </Base>
    );
  }
}
