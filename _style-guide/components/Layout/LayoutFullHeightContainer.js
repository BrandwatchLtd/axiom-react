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
      'dm-layout__full-height-container', {
        'dm-layout__full-height-container--top': vAlign === 'top',
        'dm-layout__full-height-container--middle': vAlign === 'middle',
        'dm-layout__full-height-container--bottom': vAlign === 'bottom',
        'dm-layout__full-height-container--left': hAlign === 'left',
        'dm-layout__full-height-container--center': hAlign === 'center',
        'dm-layout__full-height-container--right': hAlign === 'right',
      }
    );

    return (
      <div className={ classes }>
        { children }
      </div>
    );
  }
}
