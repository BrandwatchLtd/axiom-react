import React, { Children, Component, PropTypes } from 'react';
import classnames from 'classnames';
import Base from '../base/Base';
import { findComponent } from '../../utils';
import LabelIcon from './LabelIcon';

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
      className,
      children,
      color,
      full,
      ...rest
    } = this.props;

    const classes = classnames(className,
      'ax-label', {
        [`ax-label--${color}`]: color,
        'ax-label--full': full === true,
        [`ax-label--full--${full}`]: full & full !== true,
      },
    );

    const icon = findComponent(children, LabelIcon);
    const filteredChildren = Children.toArray(children)
      .filter(({ type }) => type !== LabelIcon);

    return (
      <Base { ...rest } Component="span" className={ classes }>
        { filteredChildren }
        { icon }
      </Base>
    );
  }
}
