import React, { Component } from 'react';
import { Base } from '@brandwatch/axiom-components';
import './DocumentationMenu.css';

export default class DocumentationMenu extends Component {
  render() {
    return (
      <Base { ...this.props }
          Component="ul"
          className="ax-documentation-viewer__menu" />
    );
  }
}
