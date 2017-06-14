import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Panels, Panel, PanelHeader, PanelBody } from 'bw-axiom';
import ChartHeaderContent from './ChartHeaderContent';
import ChartBodyContent from './ChartBodyContent';

export default class PanelExample extends Component {
  render() {
    return (
      <Example name="Double Panel">
        <Snippet>
          <Panels>
            <Panel>
              <PanelHeader>
                <ChartHeaderContent snippetReplace={ true } />
              </PanelHeader>

              <PanelBody>
                <ChartBodyContent snippetReplace={ true } />
              </PanelBody>
            </Panel>

            <Panel>
              <PanelHeader>
                <ChartHeaderContent snippetReplace={ true } />
              </PanelHeader>

              <PanelBody>
                <ChartBodyContent snippetReplace={ true } />
              </PanelBody>
            </Panel>
          </Panels>
        </Snippet>
      </Example>
    );
  }
}
