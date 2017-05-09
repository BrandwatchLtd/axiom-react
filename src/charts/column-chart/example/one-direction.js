import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import {
  Bars,
  Bar,
  ColumnChart,
  ColumnChartBars,
  ColumnChartRow,
  ColumnChartVisual,
  ColumnChartXAxis,
  ColumnChartXAxisLabel,
} from 'bw-axiom';
import { data, labels } from './data';

export default class ColumnChartExample extends Component {
  render() {
    return (
      <Example name="Single Direction ColumnChart">
        <Snippet>
          <ColumnChart height="20rem">
            <ColumnChartRow>
              <ColumnChartVisual>
                { data.map(({ data }, index) =>
                  <ColumnChartBars key={ index } snippetSkip={ index !== 0 }>
                    <Bars direction="up" label="30%">
                      { data.map((value, index) =>
                        <Bar
                            color={ labels[index].color }
                            key={ index }
                            percent={ value }
                            showLabel={ true } />
                      ) }
                    </Bars>
                  </ColumnChartBars>
                ) }
              </ColumnChartVisual>
            </ColumnChartRow>

            <ColumnChartXAxis>
              { data.map(({ label }, index) =>
                <ColumnChartXAxisLabel key={ index } snippetSkip={ index > 0 }>
                  { label }
                </ColumnChartXAxisLabel>
              ) }
            </ColumnChartXAxis>
          </ColumnChart>
        </Snippet>
      </Example>
    );
  }
}
