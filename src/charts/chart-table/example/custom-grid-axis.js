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
import { labels, data } from '../../dot-plot/example/data';

export default class ChartTableExample extends Component {
  render() {
    return (
      <Example name="ChartTable with DotPlots">
        <Snippet>
          <ChartTable labelColumnWidth="11rem" responsive={ false }>
            <ChartTableGrid count={ 6 }>
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
            <ChartTableAxis
                labels={ ['0%', '20%', '40%', '60%', '80%', '100%'] }
                title="% of each something" />
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
