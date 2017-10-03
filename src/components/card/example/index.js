import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import Candytar from '../../candytar/Candytar';
import Card from '../Card';
import CardList from '../CardList';
import Grid from '../../grid/Grid';
import GridCell from '../../grid/GridCell';
import Heading from '../../typography/Heading';
import Paragraph from '../../typography/Paragraph';

class CardExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      CardList: PropTypes.object.isRequired,
      Card: PropTypes.object.isRequired,
    }).isRequired,
  };

  render() {
    const { components } = this.props;

    const propTypes = {
      CardList: components.CardList,
      Card: components.Card,
    };

    const initialProps = {
      CardList: {},
      Card: {
        onClick: () => {},
      },
    };

    const initialPropOptions = {
      CardList: {
        children: {
          count: 3,
          max: Infinity,
          min: 1,
        },
      },
    };

    return (
      <ExampleConfig
          initialPropOptions={ initialPropOptions }
          initialProps={ initialProps }
          propTypes={ propTypes }>
        <CardList { ...initialProps.CardList }>
          <Card { ...initialProps.Card }>
            <Grid responsive={ false } snippetReplace verticalAlign="middle">
              <GridCell shrink>
                <Candytar color="lilac" size="4.5rem" />
              </GridCell>

              <GridCell>
                <Heading textSize="headtitle">Lorem Ipsum</Heading>
                <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nunc commodo egestas fringilla. In a arcu erat. Ut vestibulum
                  sollicitudin orci, ut blandit ante. Vestibulum tempus rhoncus
                  vehicula.
                </Paragraph>
              </GridCell>
            </Grid>
          </Card>
        </CardList>
      </ExampleConfig>
    );
  }
}

export default [ CardExample ];
