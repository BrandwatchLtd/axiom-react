import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import {
  StatCards,
  StatCard,
  StatHeading,
  Stats,
  Stat,
} from 'bw-axiom';
import { randomStatNumber } from './utils';

export default class StatCardExample extends Component {
  render() {
    return (
      <Example name="Single StatCard">
        <Snippet>
          <StatCards>
            <StatCard>
              <StatHeading>Lorem Ipsum</StatHeading>
              <Stats>
                <Stat color="blue">{ randomStatNumber() }</Stat>
                <Stat>{ randomStatNumber() }</Stat>
              </Stats>
            </StatCard>
          </StatCards>
        </Snippet>
      </Example>
    );
  }
}
