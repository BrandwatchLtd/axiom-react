import PropTypes from 'prop-types';
import { Component, cloneElement } from 'react';

export const PositionContentRef = 'PositionContent';

export default class PositionContent extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  static typeRef = PositionContentRef;

  render() {
    const { children, ...rest } = this.props;

    return cloneElement(children, rest);
  }
}
