import PropTypes from 'prop-types';
import React, { Component } from 'react';
import InlineGroup from '../layout/InlineGroup';

export default class LabelGroup extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <InlineGroup space="x4" { ...rest } className="ax-label-group">
        { children }
      </InlineGroup>
    );
  }
}
