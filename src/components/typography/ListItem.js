import React, { Component } from 'react';
import { enhance, addPropTypes } from '../_utils/components';
import Base from '../base/Base';

export class ListItem extends Component {
  static propTypes = {
    children: { node: true },
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

export default enhance(ListItem)(addPropTypes());
