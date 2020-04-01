import React, { Component } from 'react';
import { Range, Slider } from '@brandwatch/axiom-components';
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
          <div style={{ width: '20rem', maxWidth: '100%' }}>
            <Slider
              max={200}
              min={0}
              onChange={(setValue, getValue, value) =>
                setValue('Slider', 'value', value)
              }
              size="small"
              space="x4"
              value={50}
            />

            <Slider
              max={200}
              min={0}
              onChange={(setValue, getValue, value) =>
                setValue('Slider', 'value', value)
              }
              size="medium"
              space="x4"
              value={150}
            />
          </div>
        </DocumentationShowCase>

        <DocumentationApi
          components={[
            require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Slider/Slider'),
          ]}
        />

        <DocumentationShowCase centered>
          <div style={{ width: '20rem', maxWidth: '100%' }}>
            <Range
              markerValue={100}
              max={200}
              min={0}
              onChange={(setValue, getValue, values) =>
                setValue('Range', 'values', values)
              }
              size="small"
              space="x4"
              values={[25, 50]}
            />

            <Range
              markerValue={100}
              max={200}
              min={0}
              onChange={(setValue, getValue, values) =>
                setValue('Range', 'values', values)
              }
              size="medium"
              space="x4"
              values={[50, 150]}
            />
          </div>
        </DocumentationShowCase>

        <DocumentationApi
          components={[
            require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Slider/Range'),
          ]}
        />
      </DocumentationContent>
    );
  }
}
