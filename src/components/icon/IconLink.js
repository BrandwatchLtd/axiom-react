import React, { Component, PropTypes } from 'react';
import { Base, Icon } from 'bw-axiom';

if (__INCLUDE_CSS__) {
  require('./IconLink.scss');
}

export default class IconLink extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.string,
  };

  render() {
    const { name, size, ...rest } = this.props;

    return (
      <Base Component="a" { ...rest } className="ax-icon-link">
        <Icon name={ name } size={ size } />
      </Base>
    );
  }
}
