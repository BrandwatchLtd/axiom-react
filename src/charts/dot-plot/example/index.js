import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import {
  Context,
  ContextBox,
  DataPoint,
  DataPoints,
  DotPlotChart,
  Grid,
  GridCell,
  Heading,
  List,
  ListItem,
  Paragraph,
  Small,
  Strong,
} from 'bw-axiom';
import { chartKey, data } from './data';

class ContextDemoComponent extends Component {
  static propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    data: PropTypes.object.isRequired,
    value: PropTypes.number.isRequired,
  };

  render() {
    const { colors, value, ...rest } = this.props;

    return (
      <Context { ...rest } width="17rem">
        <ContextBox>
          <List inline={ true } textCenter={ true }>
            <ListItem>
              <Grid gutters="tiny" responsive={ false } verticalAlign="middle">
                <GridCell shrink={ true }>
                  <DataPoints size="1.5rem">
                    { colors.map((color) =>
                      <DataPoint color={ color } key={ color } />
                    ) }
                  </DataPoints>
                </GridCell>

                <GridCell shrink={ true }>
                  <Heading textSize="headline">{ value }%</Heading>
                </GridCell>
              </Grid>
            </ListItem>

            <ListItem>
              <Paragraph textCase="upper" textColor="subtle">
                <Small>Lorem ipsum <Strong>{ value }</Strong>%</Small>
              </Paragraph>
            </ListItem>
          </List>
        </ContextBox>

        <ContextBox>
          <Paragraph textColor="subtle">
            Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Duis laoreet gravida mauris vel ultricies.
          </Paragraph>
        </ContextBox>
      </Context>
    );
  }
}

class DotPlotExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      DotPlotChart: PropTypes.object,
    }).isRequired,
  };

  render() {
    const { components } = this.props;

    const propTypes = {
      DotPlotChart: components.DotPlotChart,
    };

    const initialProps = {
      DotPlotChart: {
        ContextComponent: ContextDemoComponent,
        axisTitle: '% of each something',
        chartKey: chartKey,
        chartKeyBenchmarkLabel: 'Benchmark',
        chartKeyDifferenceLabel: 'Size of Difference',
        collapsedVisibleRowCount: 6,
        data: data,
        expandButtonSuffix: 'Categories',
        labelColumnWidth: '11rem',
      },
    };

    return (
      <ExampleConfig
          initialProps={ initialProps }
          propTypes={ propTypes }>
        <DotPlotChart { ...initialProps.DotPlotChart }  />
      </ExampleConfig>
    );
  }
}

module.exports = [
  DotPlotExample,
];
