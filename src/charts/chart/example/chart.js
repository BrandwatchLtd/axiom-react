import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import {
  Chart,
  ChartBody,
  ChartHeader,
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
  ChartTitle,
  DataPoints,
  DataPoint,
  Dot,
  DotPlot,
  DotPlotLine,
  Strong,
} from 'bw-axiom';
import { labels, data } from '../../dot-plot/example/data';

export default class ChartExample extends Component {
  render() {
    return (
      <Example name="Chart">
        <Snippet>
          <Chart>
            <ChartHeader>
              <ChartTitle>
                <Strong snippetReplace={ true }>Lorem Ipsum</Strong> (dolor sit amet)
              </ChartTitle>
            </ChartHeader>
            <ChartBody>
              <ChartTable
                  collapsedVisibleRowCount={ 6 }
                  expandButtonSuffix="Categories"
                  labelColumnWidth="11rem"
                  snippetReplace={ true }>
                <ChartTableGrid>
                  <ChartTableRows>
                    { data.map(({ label, data }) =>
                      <ChartTableRow key={ label }>
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
                        <DataPoints height="0.75rem">
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
            </ChartBody>
          </Chart>
        </Snippet>
      </Example>
    );
  }
}


