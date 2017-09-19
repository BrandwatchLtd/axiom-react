import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TypeInstanceOfDate from './TypeInstanceOfDate';

const InstaceOfMap = {
  Date: TypeInstanceOfDate,
};

export default class TypeInstanceOf extends Component {
  static propTypes = {
    type: PropTypes.shape({
      value: PropTypes.string.isRequired,
    }).isRequired,
  };

  render() {
    const { type: { value } } = this.props;
    const InstanceOfEditor = InstaceOfMap[value];


    return (
      <InstanceOfEditor { ...this.props } />
    );
  }
}
