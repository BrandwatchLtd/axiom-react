import { Component, PropTypes } from 'react';

export default class PositionTarget extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return this.props.children;
  }
}
