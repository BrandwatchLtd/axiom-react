import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import {
  Context,
  ContextTip,
  Dropdown,
  DropdownContent,
  DropdownTarget,
  Grid,
  GridCell,
  Icon,
  Link,
  Paragraph,
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
      <Example name="StatCard with Help">
        <Snippet>
          <StatCards>
            <StatCard>
              <StatHeading>
                <Grid responsive={ false } verticalAlign="middle">
                  <GridCell>
                    Lorem Ipsum
                  </GridCell>

                  <GridCell shrink={ true }>
                    <Dropdown position="right">
                      <DropdownTarget>
                        <Link style="subtle">
                          <Icon name="question-mark-circle" />
                        </Link>
                      </DropdownTarget>

                      <DropdownContent>
                        <Context>
                          <ContextTip>
                            <Paragraph>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Integer quis iaculis lectus, id dictum nibh.
                            </Paragraph>
                          </ContextTip>
                        </Context>
                      </DropdownContent>
                    </Dropdown>
                  </GridCell>
                </Grid>
              </StatHeading>
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
