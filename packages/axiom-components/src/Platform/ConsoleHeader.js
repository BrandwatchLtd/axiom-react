import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Base from '../Base/Base';
import Grid from '../Grid/Grid';
import GridCell from '../Grid/GridCell';
import Icon from '../Icon/Icon';
import Link from '../Typography/Link';
import PlaformContext from './PlatformContext';
import ConsoleContext from './ConsoleContext';

export default function ConsoleHeader({
  children,
  separator,
  shade = 'shade-3',
  size = 'large',
  ...rest
}) {
  const { onConsoleClose } = useContext(PlaformContext);
  const consolePosition = useContext(ConsoleContext);
  const classes = classnames(
    'ax-platform__console-header',
    `ax-platform__console-header--${shade}`,
    `ax-platform__console-header--${size}`,
    {
      'ax-platform__console-header--separator': separator,
    }
  );

  const showCloseOnRight = () =>
    onConsoleClose && size === 'large' && consolePosition === 'left';
  const showCloseOnLeft = () =>
    onConsoleClose && size === 'large' && consolePosition === 'right';

  const CloseLink = () => (
    <GridCell shrink>
      <Link onClick={ onConsoleClose } style="subtle">
        <Icon name="cross" size="1.5rem" />
      </Link>
    </GridCell>
  );

  return (
    <Base { ...rest } className={ classes }>
      <Grid gutters="small" responsive={ false } verticalAlign="middle">
        { showCloseOnLeft() && <CloseLink /> }

        <GridCell>{ children }</GridCell>

        { showCloseOnRight() && <CloseLink /> }
      </Grid>
    </Base>
  );
}

ConsoleHeader.propTypes = {
  children: PropTypes.node,
  separator: PropTypes.bool,
  shade: PropTypes.oneOf(['shade-2', 'shade-3', 'shade-4']),
  size: PropTypes.oneOf(['small', 'large']),
};
