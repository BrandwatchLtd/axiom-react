import React, { Component } from 'react';
import { DocumentationViewer } from '@brandwatch/axiom-documentation-viewer';
import Animations from './Materials/Animations';
import Colors from './Materials/Colors';
import Opacities from './Materials/Opacities';
import Sizing from './Materials/Sizing';

export default class Guidelines extends Component {
  render() {
    return (
      <DocumentationViewer
          config={ [{
            id: 'animations',
            name: 'Animations',
            Component: Animations,
          }, {
            id: 'colors',
            name: 'Colors',
            Component: Colors,
          }, {
            id: 'opacities',
            name: 'Opacities',
            Component: Opacities,
          }, {
            id: 'sizing',
            name: 'Sizing',
            Component: Sizing,
          }] }
          path="/docs/packages/axiom-materials" />
    );
  }
}
