import PropTypes from 'prop-types';
import { Component, cloneElement } from 'react';

export default class PositionContent extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children, ...rest } = this.props;

    return cloneElement(children, rest);
  }
}
