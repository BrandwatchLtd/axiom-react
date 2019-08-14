import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../Base/Base';
import Grid from '../Grid/Grid';
import GridCell from '../Grid/GridCell';
import Icon from '../Icon/Icon';
import Link from '../Typography/Link';

export default class ConsoleHeader extends Component {
  /** If you change the propTypes it would be great if you could also change the typescript file (axiom-components/src/index.d.ts) */
  static propTypes = {
    children: PropTypes.node,
    separator: PropTypes.bool,
    shade: PropTypes.oneOf(['shade-2', 'shade-3', 'shade-4']),
    size: PropTypes.oneOf(['small', 'large']),
  };

  static contextTypes = {
    onConsoleClose: PropTypes.func,
    consolePosition: PropTypes.string.isRequired,
  };

  static defaultProps = {
    shade: 'shade-3',
    size: 'large',
  };

  render() {
    const { onConsoleClose, consolePosition } = this.context;
    const { children, separator, shade, size, ...rest } = this.props;
    const classes = classnames(
      'ax-platform__console-header',
      `ax-platform__console-header--${shade}`,
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
