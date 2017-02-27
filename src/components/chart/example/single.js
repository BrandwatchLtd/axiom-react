import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { ChartPanel, ChartPanelHeader, ChartPanelBody } from 'bw-axiom';
import ChartHeaderContent from './ChartHeaderContent';
import ChartBodyContent from './ChartBodyContent';

export default class ChartPanelExample extends Component {
  render() {
    return (
      <Example name="Singular ChartPanel">
        <Snippet>
          <ChartPanel>
            <ChartPanelHeader>
              <ChartHeaderContent snippetReplace={ true } />
            </ChartPanelHeader>

            <ChartPanelBody>
              <ChartBodyContent snippetReplace={ true } />
            </ChartPanelBody>
          </ChartPanel>
        </Snippet>
      </Example>
    );
  }
}
