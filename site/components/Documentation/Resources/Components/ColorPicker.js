import React, { Component } from 'react';
import { ColorPicker } from '@brandwatch/axiom-components';
import {
  DocumentationApi,
  DocumentationContent,
  DocumentationShowCase,
} from '@brandwatch/axiom-documentation-viewer';

export default class Documentation extends Component {
  render() {
    return (
      <DocumentationContent>
        <DocumentationShowCase centered>
          <ColorPicker
            onSelectColor={(setValue, getValue, color) =>
              setValue('ColorPicker', 'selected', color)
            }
          />
        </DocumentationShowCase>

        <DocumentationApi
          components={[
            require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/ColorPicker/ColorPicker'),
            require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/ColorPicker/ColorPickerOption'),
          ]}
        />
      </DocumentationContent>
    );
  }
}
