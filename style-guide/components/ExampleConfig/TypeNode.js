import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TypeNodeChildrenCount from './TypeNodeChildrenCount';
import TypeNodeChildrenOptions from './TypeNodeChildrenOptions';

export default class TypeNode extends Component {
  static propTypes = {
    prop: PropTypes.string.isRequired,
    propOptions: PropTypes.shape({
      count: PropTypes.number,
      options: PropTypes.array,
    }).isRequired,
  };

  render() {
    const { prop, propOptions } = this.props;
    const { count, options } = propOptions;

    if (prop === 'children' && options) {
      return <TypeNodeChildrenOptions { ...this.props } />;
    } else if (prop === 'children' && count !== undefined) {
      return <TypeNodeChildrenCount { ...this.props } />;
    }

    return null;
  }
}
