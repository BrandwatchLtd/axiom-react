import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
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
    data: PropTypes.arrayOf(PropTypes.shape({
      color: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })).isRequired,
    value: PropTypes.number.isRequired,
  };

  render() {
    const { colors, value, ...rest } = this.props;

    return (
      <Context { ...rest } width="17rem">
        <ContextBox>
          <List inline={ true } textCenter={ true }>
            <ListItem>
              <Grid gutters="tiny" verticalAlign="middle">
                <GridCell shrink={ true }>
                  <DataPoints size="1.5rem">
                    { colors.map((color) =>
                      <DataPoint color={ color } key={ color } />
                    ) }
                  </DataPoints>
                </GridCell>

                <GridCell shrink={ true }>
                  <Heading style="headline">{ value }%</Heading>
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

export default class DotPlotExample extends Component {
  render() {
    return (
      <Example name="DotPlot with Context">
        <Snippet>
          <DotPlotChart
              ContextComponent={ ContextDemoComponent }
              axisTitle="% of each something"
              chartKey={ chartKey }
              chartKeyLineLabel="Size of Difference"
              collapsedVisibleRowCount={ 6 }
              data={ data }
              expandButtonSuffix="Categories"
              labelColumnWidth="11rem" />
        </Snippet>
      </Example>
    );
  }
}
