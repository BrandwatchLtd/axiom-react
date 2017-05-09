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
  ColumnChartYAxis,
  Heading,
  Weak,
} from 'bw-axiom';
import { data, labels } from './data';

export default class ColumnChartExample extends Component {
  render() {
    return (
      <Example name="Mirrored ColumnChart">
        <Snippet>
          <ColumnChart
              height="20rem"
              yAxisWidth="10rem">
            <ColumnChartRow>
              <ColumnChartYAxis align="bottom">
                <Heading snippetReplace={ true } style="display">
                  <Weak>57%</Weak>
                </Heading>
              </ColumnChartYAxis>

              <ColumnChartVisual>
                { data.map(({ data }, index) =>
                  <ColumnChartBars key={ index } snippetSkip={ index > 0 }>
                    <Bars direction="up">
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

            <ColumnChartRow>
              <ColumnChartYAxis align="top">
                <Heading snippetReplace={ true } style="display">
                  <Weak>87%</Weak>
                </Heading>
              </ColumnChartYAxis>

              <ColumnChartVisual>
                { data.map(({ data }, index) =>
                  <ColumnChartBars key={ index } snippetSkip={ index > 0 }>
                    <Bars direction="down">
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
          </ColumnChart>
        </Snippet>
      </Example>
    );
  }
}
