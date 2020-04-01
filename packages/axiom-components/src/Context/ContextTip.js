import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Base from '../Base/Base';
import './ContextTip.css';

export default React.forwardRef(ContextTip);

function ContextTip({ color, direction, children, ...rest }, ref) {
  const classes = classnames(`ax-context-tip--${direction}`, {
    [`ax-context-tip--${color}`]: color,
  });

  return (
    <Base className={classes} {...rest}>
      <span className="ax-context-tip__arrow" ref={ref} />
      <Base className="ax-context-tip__content">{children}</Base>
    </Base>
  );
}

ContextTip.propTypes = {
  /** The content on which the tip should be placed. */
  children: PropTypes.node,
  /** Background color for the tip */
  color: PropTypes.oneOf([
    'success',
    'warning',
    'error',
    'info',
    'shade-1',
    'shade-2',
    'shade-3',
    'shade-4',
    'carbon',
    'white',
  ]),
  /** The direction at which the Tip should be pointing. The directions are opposite, for example,
   * if the arrow should be placed on the 'left', its direction prop should be 'right'. The same applies for 'top' and 'bottom'. */
  direction: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
};
