import React, { Component } from 'react';
import { Base } from '@brandwatch/axiom-components';
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
          <Base>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            in risus sit amet dolor tempus ornare ac eget dolor. Pellentesque
            ultrices iaculis nunc, tempor tempus magna vehicula ut. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Aliquam iaculis
            quam ut metus finibus, et facilisis risus porta.
          </Base>
        </DocumentationShowCase>

        <DocumentationApi
          components={[
            require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Base/Base'),
          ]}
        />
      </DocumentationContent>
    );
  }
}
