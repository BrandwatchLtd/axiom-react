import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TypeArrayOfData from './TypeArrayOfData';
import TypeArrayOfEnum from './TypeArrayOfEnum';

export default class TypeArrayOf extends Component {
  static propTypes = {
    type: PropTypes.shape({
      value: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  };

  render() {
    const {
      type: {
        value: { name },
      },
    } = this.props;

    if (name === 'enum') {
      return <TypeArrayOfEnum {...this.props} />;
    }

    return <TypeArrayOfData {...this.props} />;
  }
}
