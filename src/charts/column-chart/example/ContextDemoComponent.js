import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Context from '../../../components/context/Context';
import ContextBox from '../../../components/context/ContextBox';
import DataPoint from '../../data-point/DataPoint';
import DataPoints from '../../data-point/DataPoints';
import Grid from '../../../components/grid/Grid';
import GridCell from '../../../components/grid/GridCell';
import Heading from '../../../components/typography/Heading';
import List from '../../../components/list/List';
import ListItem from '../../../components/list/ListItem';
import Paragraph from '../../../components/typography/Paragraph';
import Small from '../../../components/typography/Small';
import Strong from '../../../components/typography/Strong';

export default class ContextDemoComponent extends Component {
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
          <List style="inline" textCenter>
            <ListItem>
              <Grid gutters="tiny" responsive={ false } verticalAlign="middle">
                <GridCell shrink>
                  <DataPoints size="1.5rem">
                    <DataPoint color={ color } />
                  </DataPoints>
                </GridCell>

                <GridCell shrink>
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
