import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import {
  ChartKey,
  ChartKeyItem,
  ChartTable,
  ChartTableAxis,
  ChartTableGrid,
  ChartTableKey,
  ChartTableRows,
  ChartTableRow,
  ChartTableLabel,
  ChartTableVisual,
  DataPoints,
  DataPoint,
  Bars,
  Bar,
} from 'bw-axiom';
import { labels, data } from './data';

export default class BarsExample extends Component {
  render() {
    return (
      <Example name="ChartTable with Bars">
        <Snippet>
          <ChartTable>
            <ChartTableGrid>
              <ChartTableRows>
                { data.map(({ label, data }, i) =>
                  <ChartTableRow key={ label } snippetSkip={ i > 0 }>
                    <ChartTableLabel>{ label }</ChartTableLabel>
                    <ChartTableVisual>
                      <Bars direction="right">
                        { data.map((value, index) =>
                          <Bar
                              color={ labels[index].color }
                              key={ index }
                              percent={ value } />
                        ) }
                      </Bars>
                    </ChartTableVisual>
                  </ChartTableRow>
                ) }
              </ChartTableRows>
            </ChartTableGrid>
            <ChartTableAxis title="% of each something" />
            <ChartTableKey>
              <ChartKey>
                { labels.map(({ name, color }) =>
                  <ChartKeyItem key={ name } label={ name }>
                    <DataPoints height="0.75rem">
                      <DataPoint color={ color } />
                    </DataPoints>
                  </ChartKeyItem>
                ) }
              </ChartKey>
            </ChartTableKey>
          </ChartTable>
        </Snippet>
      </Example>
    );
  }
}
