import PropTypes from 'prop-types';
import React, { Component } from 'react';
import CardContent from '../card/CardContent';

export default class DataPickerBody extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children, ...rest } = this.props;
    return (
      <CardContent { ...rest }>
        { children }
      </CardContent>
    );
  }
}

