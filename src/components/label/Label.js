import React, { Children, Component, PropTypes, cloneElement } from 'react';
import classnames from 'classnames';
import { Base, LabelIcon } from 'bw-axiom';

if (__INCLUDE_CSS__) {
  require('./Label.scss');
}

export default class Label extends Component {
  static propTypes = {
    children: PropTypes.node,
    color: PropTypes.oneOf(['white', 'grey', 'valid', 'invalid']),
    full: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(['small', 'medium', 'large']),
    ]),
  };

  static defaultProps = {
    color: 'grey',
  };

  render() {
    const {
      children,
      color,
      full,
      ...rest
    } = this.props;

    const classes = classnames('ax-label', {
      [`ax-label--${color}`]: color,
      'ax-label--full': full === true,
      [`ax-label--full--${full}`]: full & full !== true,
    });

    const mappedChildren = Children.toArray(children).map((child, index, array) =>
      child.type !== LabelIcon ? child : cloneElement(child, {
        isEnd: index === array.length - 1,
        isStart: index === 0,
      })
    );

    return (
      <Base { ...rest } Component="span" className={ classes }>
        { mappedChildren }
      </Base>
    );
  }
}
