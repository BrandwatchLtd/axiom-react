import React, { Component, PropTypes } from 'react';
import { Base } from 'bw-axiom';

export default class Paragraph extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Base space="tiny" { ...rest } Component="p" className="ax-paragraph">
        { children }
      </Base>
    );
  }
}
