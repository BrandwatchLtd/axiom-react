import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { ChartPanels, ChartPanel, ChartPanelHeader, ChartPanelBody } from 'bw-axiom';
import ChartHeaderContent from './ChartHeaderContent';
import ChartBodyContent from './ChartBodyContent';

export default class ChartPanelExample extends Component {
  render() {
    return (
      <Example name="Double ChartPanel">
        <Snippet>
          <ChartPanels>
            <ChartPanel>
              <ChartPanelHeader>
                <ChartHeaderContent snippetReplace={ true } />
              </ChartPanelHeader>

              <ChartPanelBody>
                <ChartBodyContent snippetReplace={ true } />
              </ChartPanelBody>
            </ChartPanel>

            <ChartPanel>
              <ChartPanelHeader>
                <ChartHeaderContent snippetReplace={ true } />
              </ChartPanelHeader>

              <ChartPanelBody>
                <ChartBodyContent snippetReplace={ true } />
              </ChartPanelBody>
            </ChartPanel>
          </ChartPanels>
        </Snippet>
      </Example>
    );
  }
}
