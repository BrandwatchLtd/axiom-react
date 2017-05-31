import React, { PropTypes, Component } from 'react';
import { List } from 'bw-axiom';

export default class Toolbar extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    const { children } = this.props;

    return (
      <List inline={ true }>
        { children }
      </List>
    );
  }
}
