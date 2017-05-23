import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import {
  ChartKey,
  ChartKeyItem,
  ChartTable,
  ChartTableAxis,
  ChartTableGrid,
  ChartTableKey,
  ChartTableLabel,
  ChartTableRow,
  ChartTableRows,
  ChartTableVisual,
  DataPoint,
  DataPoints,
  Dot,
  DotPlot,
  DotPlotLine,
} from 'bw-axiom';
import { labels, data } from './data';

export default class ChartTableExample extends Component {
  render() {
    return (
      <Example name="ChartTable with DotPlots">
        <Snippet>
          <ChartTable
              labelColumnWidth="11rem">
            <ChartTableGrid>
              <ChartTableRows>
                { data.map(({ label, data }, i) =>
                  <ChartTableRow key={ label } snippetSkip={ i > 0 }>
                    <ChartTableLabel>{ label }</ChartTableLabel>
                    <ChartTableVisual>
                      <DotPlot>
                        { data.map((value, index) =>
                          <Dot
                              color={ labels[index].color }
                              key={ index }
                              percent={ value } />
                        ) }
                      </DotPlot>
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
                    <DataPoints size="0.75rem">
                      <DataPoint color={ color } />
                    </DataPoints>
                  </ChartKeyItem>
                ) }

                <ChartKeyItem label="Size of Difference">
                  <DotPlotLine width="0.75rem" />
                </ChartKeyItem>
              </ChartKey>
            </ChartTableKey>
          </ChartTable>
        </Snippet>
      </Example>
    );
  }
}
