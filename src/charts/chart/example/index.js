import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import Chart from '../Chart';
import ChartBody from '../ChartBody';
import ChartHeader from '../ChartHeader';
import ChartTitle from '../ChartTitle';
import DotPlotChart from '../../dot-plot/DotPlotChart';
import ProgressInfinite from '../../../components/progress/ProgressInfinite';
import Strong from '../../../components/typography/Strong';
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

    const initialProps = {
      Chart: {
        minimumHeight: '15rem',
      },
      ChartBody: {
        verticalAlign: 'middle',
      },
    };

    const initialPropOptions = {
      ChartBody: {
        children: {
          options: [{
            name: 'With a DotPlot visual',
            children: (
              <DotPlotChart
                  axisTitle="% of each something"
                  chartKey={ chartKey }
                  chartKeyDifferenceLabel="Size of Difference"
                  collapsedVisibleRowCount={ 6 }
                  data={ data }
                  expandButtonSuffix="Categories"
                  labelColumnWidth="11rem"
                  snippetReplace />
            ),
          }, {
            name: 'With a ProgressInfinite',
            children: (
              <ProgressInfinite size="medium" />
            ),
          }],
        },
      },
    };

    return (
      <ExampleConfig
          initialPropOptions={ initialPropOptions }
          initialProps={ initialProps }
          propTypes={ propTypes }>
        <Chart { ...initialProps.Chart }>
          <ChartHeader>
            <ChartTitle>
              <Strong snippetReplace>Lorem Ipsum</Strong> (dolor sit amet)
            </ChartTitle>
          </ChartHeader>
          <ChartBody { ...initialProps.ChartBody }>
            { initialPropOptions.ChartBody.children.options[0].children }
          </ChartBody>
        </Chart>
      </ExampleConfig>
    );
  }
}

export default [
  ChartExample,
];

