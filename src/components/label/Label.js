import PropTypes from 'prop-types';
import React, { Children, Component, cloneElement } from 'react';
import classnames from 'classnames';
import { Base, LabelIcon } from 'bw-axiom';
import './Label.css';

export default class Label extends Component {
  static propTypes = {
    /** Content inserted into the Label */
    children: PropTypes.node,
    /** Color of the label */
    color: PropTypes.oneOf(['white', 'success', 'error']),
    /**
     * Controls the full width appearance of the badge either all of the time,
     * with a value of `true` otherwise at one of the breakpoints specified.
     */
    full: PropTypes.oneOf([true, 'small', 'medium', 'large']),
    /** Size of standard shape */
    size: PropTypes.oneOf(['small', 'medium']),
  };

  static defaultProps = {
    color: 'white',
    size: 'medium',
  };

  render() {
    const {
      children,
      color,
      full,
      size,
      ...rest
    } = this.props;

    const classes = classnames('ax-label', {
      [`ax-label--${color}`]: color,
      [`ax-label--${size}`]: size,
      'ax-label--full': full === true,
      [`ax-label--full--${full}`]: typeof full === 'string',
    });

    const mappedChildren = Children.toArray(children).map((child, index, array) =>
      child.type !== LabelIcon ? child : cloneElement(child, {
        isEnd: index === array.length - 1,
        isStart: index === 0,
        color,
        size,
      })
    );

    return (
      <Base { ...rest } Component="span" className={ classes } theme="light">
        { mappedChildren }
      </Base>
    );
  }
}
