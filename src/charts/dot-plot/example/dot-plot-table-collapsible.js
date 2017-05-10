import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import {
  Button,
  ButtonGroup,
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
  Dot,
  DotPlot,
  DotPlotLine,
} from 'bw-axiom';
import { labels, data } from './data';

export default class DotPlotExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nextRowCount: 8,
      rowData: data.slice(0, 7),
    };
  }

  addRow() {
    this.setState((state) => ({
      nextRowCount: state.nextRowCount + 1,
      rowData: data.slice(0, state.nextRowCount),
    }));
  }

  render() {
    const { rowData } = this.state;

    return (
      <Example name="DotPlot inside collapsible ChartTable">
        <ButtonGroup>
          <Button
              disabled={ rowData.length === data.length }
              onClick={ () => this.addRow() }>
            Add another row of data
          </Button>
        </ButtonGroup>

        <Snippet>
          <ChartTable
              collapsedVisibleRowCount={ 6 }
              expandButtonSuffix="Categories"
              labelColumnWidth="11rem">
            <ChartTableGrid snippetSkip={ true }>
              <ChartTableRows>
                { rowData.map(({ label, data }, i) =>
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
            <ChartTableAxis  snippetSkip={ true } title="% of each something" />
            <ChartTableKey snippetSkip={ true }>
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
        </Snippet>
      </Example>
    );
  }
}
