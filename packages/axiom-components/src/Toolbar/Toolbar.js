import PropTypes from 'prop-types';
import React, { Component } from 'react';
import List from '../List/List';

export default class Toolbar extends Component {
  static propTypes = {
    /** Tools along the Toolbar */
    children: PropTypes.node.isRequired,
  }

  render() {
    const { children } = this.props;

    return (
      <List style="inline">
        { children }
      </List>
    );
  }
}
