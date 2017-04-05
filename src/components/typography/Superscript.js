import React, { Component, PropTypes } from 'react';
import { Base } from 'bw-axiom';
import './Superscript.css';

export default class Superscript extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Base { ...rest } Component="sup" className="ax-text--superscript">
        { children }
      </Base>
    );
  }
}
