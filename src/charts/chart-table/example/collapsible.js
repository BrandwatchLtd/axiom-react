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
  constructor(props) {
    super(props);
    this.state = {
      rowData: data.slice(0, 7),
    };
  }

  addRow() {
    this.setState(({ rowData }) => ({
      rowData: data.slice(0, rowData.length + 1),
    }));
  }

  removeRow() {
    this.setState(({ rowData }) => ({
      rowData: data.slice(0, rowData.length - 1),
    }));
  }

  render() {
    const { rowData } = this.state;

    return (
      <Example name="Collapsible ChartTable">
        <ButtonGroup>
          <Button
              disabled={ rowData.length === data.length }
              onClick={ () => this.addRow() }>
            Add a row of data
          </Button>
          <Button
              disabled={ rowData.length === 0 }
              onClick={ () => this.removeRow() }>
            Remove a row of data
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
