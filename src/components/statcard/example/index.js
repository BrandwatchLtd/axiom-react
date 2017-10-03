import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import Stat from '../Stat';
import StatCard from '../StatCard';
import StatCards from '../StatCards';
import StatHeading from '../StatHeading';
import Stats from '../Stats';
import tinyNumber from '../../../materials/number/tinyNumber';

const randomStatNumber = (l = 30000, u = 999999) =>
  tinyNumber(Math.floor(Math.random() * (u - l + 1) + l), 1);

class StatCardsExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      StatCards: PropTypes.object,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const propTypes = {
      StatCards: components.StatCards,
      StatCard: components.StatCard,
      StatHeading: components.StatHeading,
      Stats: components.Stats,
      Stat: components.Stat,
    };

    const initialProps = {
      StatCards: {},
      StatCard: {},
      StatHeading: {},
      Stats: {},
      Stat: {},
    };

    const initialPropOptions = {
      StatCards: {
        children: {
          count: 3,
          min: 1,
          max: Infinity,
        },
      },
      Stat: {
        color: {
          applyToIndex: 0,
        },
      },
    };

    return (
      <ExampleConfig
          initialPropOptions={ initialPropOptions }
          initialProps={ initialProps }
          propTypes={ propTypes }>
        <StatCards { ...initialProps.StatCards }>
          <StatCard { ...initialProps.StatCard }>
            <StatHeading { ...initialProps.StatHeading }>
              Lorem Ipsum
            </StatHeading>
            <Stats { ...initialProps.Stats }>
              <Stat color="blue" { ...initialProps.Stat }>{ randomStatNumber() }</Stat>
              <Stat { ...initialProps.Stat }>{ randomStatNumber() }</Stat>
            </Stats>
          </StatCard>
        </StatCards>
      </ExampleConfig>
    );
  }
}

export default [ StatCardsExample ];
