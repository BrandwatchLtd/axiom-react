import React, { Component } from 'react';
import Base from '../Base/Base';
import './ConsoleMenu.css';

export default class ConsoleMenu extends Component {
  render() {
    return (
      <Base
        {...this.props}
        Component="ul"
        className="ax-console-menu"
        space="x2"
      />
    );
  }
}
