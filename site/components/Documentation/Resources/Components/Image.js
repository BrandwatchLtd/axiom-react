import React, { Component } from 'react';
import { AlertBar, Image } from '@brandwatch/axiom-components';
import {
  DocumentationApi,
  DocumentationContent,
  DocumentationShowCase,
} from '@brandwatch/axiom-documentation-viewer';

export default class Documentation extends Component {
  render() {
    return (
      <DocumentationContent>
        <DocumentationShowCase>
          <Image src="/assets/axiom-bg.jpg">
            <AlertBar type="error">Image failed to load</AlertBar>
          </Image>
        </DocumentationShowCase>

        <DocumentationApi
          components={[
            require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Image/Image'),
            require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Image/ImageFallback'),
          ]}
        />
      </DocumentationContent>
    );
  }
}
