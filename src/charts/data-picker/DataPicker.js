import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Panel } from 'bw-axiom';

export default class DataPicker extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Panel { ...rest }>
        { children }
      </Panel>
    );
  }
}

