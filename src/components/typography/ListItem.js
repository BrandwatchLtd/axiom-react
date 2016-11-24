import React, { Component, PropTypes } from 'react';
import Base from '../base/Base';

export default class ListItem extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Base { ...rest } Component="li">
        { children }
      </Base>
    );
  }
}
