import React, { Component } from 'react';
import { Slider } from '@brandwatch/axiom-components';
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
          <div style={ { width: '20rem', maxWidth: '100%' } }>
            <Slider
                max={ 200 }
                min={ 0 }
                onChange={ (setValue, getValue, value) =>
                  setValue('Slider', 'value', value) }
                size="small"
                space="x4"
                value={ 50 } />

            <Slider
                max={ 200 }
                min={ 0 }
                onChange={ (setValue, getValue, value) =>
                  setValue('Slider', 'value', value) }
                size="medium"
                space="x4"
                value={ 150 } />
          </div>
        </DocumentationShowCase>

        <DocumentationApi components={ [
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Slider/Slider'),
        ] } />
      </DocumentationContent>
    );
  }
}
