import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  PanelBody,
} from 'bw-axiom';

export default class DataPickerBody extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children, ...rest } = this.props;
    return (
      <PanelBody { ...rest }>
        { children }
      </PanelBody>
    );
  }
}

