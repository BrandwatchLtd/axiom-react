import React, { Component, PropTypes } from 'react';
import { InlineGroup } from 'bw-axiom';

export default class LabelGroup extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    space: 'small',
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <InlineGroup { ...rest } className="ax-label-group">
        { children }
      </InlineGroup>
    );
  }
}
