import React, { Component } from 'react';
import { DocumentationViewer } from '@brandwatch/axiom-documentation-viewer';
import Colors from './Materials/Colors';

export default class Guidelines extends Component {
  render() {
    return (
      <DocumentationViewer
          config={ [{
            id: 'colours',
            name: 'Colours',
            Component: Colors,
          }] }
          path="/docs/packages/axiom-materials" />
    );
  }
}
