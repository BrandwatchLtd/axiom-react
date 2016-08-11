import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

if (__INCLUDE_CSS__) {
  require('./LayoutFullHeightContainer.scss');
}

export default class LayoutFullHeightContainer extends Component {
  static propTypes = {
    children: PropTypes.node.isRequiried,
    hAlign: PropTypes.oneOf(['left', 'center', 'right']),
    vAlign: PropTypes.oneOf(['top', 'middle', 'bottom']),
  };

  render() {
    const { children, className, vAlign, hAlign } = this.props;
    const classes = classnames(className,
      'dm-layout__full-height', {
        'dm-layout__full-height--top': vAlign === 'top',
        'dm-layout__full-height--middle': vAlign === 'middle',
        'dm-layout__full-height--bottom': vAlign === 'bottom',
        'dm-layout__full-height--left': hAlign === 'left',
        'dm-layout__full-height--center': hAlign === 'center',
        'dm-layout__full-height--right': hAlign === 'right',
      }
    );

    return (
      <div className={ classes }>
        { children }
      </div>
    );
  }
}
