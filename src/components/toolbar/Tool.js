import React, { PropTypes, Component } from 'react';
import { ListItem } from 'bw-axiom';

export default class Tool extends Component {
  static propTypes = {
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
