import React, { Component } from 'react';
import { Bar, Bars } from '@brandwatch/axiom-charts';
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
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', minHeight: '10rem' }}>
              <Bars direction="up">
                <Bar
                  color="critical-mass"
                  onClick={() => {}}
                  percent={0}
                  showLabel
                />
                <Bar
                  color="paradise-lost"
                  onClick={() => {}}
                  percent={25}
                  showLabel
                />
                <Bar
                  color="serene-sea"
                  onClick={() => {}}
                  percent={50}
                  showLabel
                />
                <Bar
                  color="giant-leap"
                  onClick={() => {}}
                  percent={75}
                  showLabel
                />
                <Bar
                  color="moon-lagoon"
                  onClick={() => {}}
                  percent={100}
                  showLabel
                />
              </Bars>
            </div>
          </div>
        </DocumentationShowCase>

        <DocumentationApi
          components={[
            require('!!axiom-documentation-loader!@brandwatch/axiom-charts/src/Bar/Bar'),
            require('!!axiom-documentation-loader!@brandwatch/axiom-charts/src/Bar/Bars'),
          ]}
        />
      </DocumentationContent>
    );
  }
}
