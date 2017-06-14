import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import {
  BarChart,
  Context,
  ContextBox,
  DataPoint,
  DataPoints,
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
    color: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
    value: PropTypes.number.isRequired,
  };

  render() {
    const { color, value, ...rest } = this.props;

    return (
      <Context { ...rest } width="17rem">
        <ContextBox>
          <List inline={ true } textCenter={ true }>
            <ListItem>
              <Grid gutters="tiny" responsive={ false } verticalAlign="middle">
                <GridCell shrink={ true }>
                  <DataPoints size="1.5rem">
                    <DataPoint color={ color } />
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

export default class BarChartExample extends Component {
  render() {
    return (
      <Example name="BarChart with Context and Component Labels">
        <Snippet>
          <BarChart
              ContextComponent={ ContextDemoComponent }
              axisTitle="% of something"
              chartKey={ chartKey }
              collapsedVisibleRowCount={ 6 }
              data={ data.map(datum => ({
                ...datum,
                label: <Paragraph>{ datum.label }</Paragraph>,
              })) }
              expandButtonSuffix="Categories"
              labelColumnWidth="11rem" />
        </Snippet>
      </Example>
    );
  }
}
