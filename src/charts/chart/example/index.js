import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import {
  Chart,
  ChartHeader,
  ChartBody,
  ChartTitle,
  DotPlotChart,
  Strong,
} from 'bw-axiom';
import { chartKey, data } from '../../dot-plot/example/data';

class ChartExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Chart: PropTypes.object,
      ChartHeader: PropTypes.object,
      ChartBody: PropTypes.object,
      ChartTitle: PropTypes.object,
    }).isRequired,
  };

  render() {
    const { components } = this.props;

    const propTypes = {
      Chart: components.Chart,
      ChartHeader: components.ChartHeader,
      ChartBody: components.ChartBody,
      ChartTitle: components.ChartTitle,
    };

    return (
      <ExampleConfig propTypes={ propTypes }>
        <Chart>
          <ChartHeader>
            <ChartTitle>
              <Strong snippetReplace={ true }>Lorem Ipsum</Strong> (dolor sit amet)
            </ChartTitle>
          </ChartHeader>
          <ChartBody>
            <DotPlotChart
                axisTitle="% of each something"
                chartKey={ chartKey }
                chartKeyDifferenceLabel="Size of Difference"
                collapsedVisibleRowCount={ 6 }
                data={ data }
                expandButtonSuffix="Categories"
                labelColumnWidth="11rem"
                snippetReplace={ true } />
          </ChartBody>
        </Chart>
      </ExampleConfig>
    );
  }
}

module.exports = [
  ChartExample,
];

