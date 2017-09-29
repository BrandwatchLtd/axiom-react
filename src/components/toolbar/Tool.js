import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ListItem from '../list/ListItem';

export default class Tool extends Component {
  static propTypes = {
    /** Content to be placed inside the Tool */
    children: PropTypes.node.isRequired,
  }

  render() {
    const { children, ...rest } = this.props;

    return (
      <ListItem { ...rest }>
        { children }
      </ListItem>
    );
  }
}
