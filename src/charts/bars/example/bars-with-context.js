import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import {
  Bars,
  Bar,
  Context,
  ContextBox,
  Dropdown,
  DropdownContent,
  DropdownTarget,
  Grid,
  GridCell,
} from 'bw-axiom';
import { data, labels } from './data';

export default class BarsExample extends Component {
  render() {
    return (
      <Example name="Bars with Labels and Context">
        <Snippet>
          <Grid snippetIgnore={ true }>
            { data.map(({ data }, index) =>
              <GridCell key={ index } snippetIgnore={ true }>
                <div snippetIgnore={ true } style={ { height: '10rem' } }>
                  <Bars
                      direction="up"
                      label="30%"
                      snippetSkip={ index !== 0 }>
                    { data.map((value, index) =>
                      <Dropdown
                          key={ index }
                          position="right"
                          snippetSkip={ index !== 0 }>
                        <DropdownTarget>
                          <Bar
                              color={ labels[index].color }
                              percent={ value }
                              showLabel={ true } />
                        </DropdownTarget>
                        <DropdownContent>
                          <Context>
                            <ContextBox>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Duis laoreet gravida mauris vel ultricies.
                            </ContextBox>
                          </Context>
                        </DropdownContent>
                      </Dropdown>
                    ) }
                  </Bars>
                </div>
              </GridCell>
            ) }
          </Grid>

          <Grid snippetSkip={ true }>
            { data.map(({ data }, index) =>
              <GridCell key={ index }>
                <div style={ { height: '10rem' } }>
                  <Bars direction="down" label="50%">
                    { data.map((value, index) =>
                      <Dropdown key={ index } position="right">
                        <DropdownTarget>
                          <Bar
                              color={ labels[index].color }
                              percent={ value }
                              showLabel={ true } />
                        </DropdownTarget>
                        <DropdownContent>
                          <Context>
                            <ContextBox>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Duis laoreet gravida mauris vel ultricies.
                            </ContextBox>
                          </Context>
                        </DropdownContent>
                      </Dropdown>
                    ) }
                  </Bars>
                </div>
              </GridCell>
            ) }
          </Grid>

          <Grid snippetSkip={ true }>
            <GridCell>
              { data.map(({ data }, index) =>
                <Bars direction="left" key={ index } label="70%" space="small">
                  { data.map((value, index) =>
                    <Dropdown key={ index } position="top">
                      <DropdownTarget>
                        <Bar
                            color={ labels[index].color }
                            percent={ value }
                            showLabel={ true } />
                      </DropdownTarget>
                      <DropdownContent>
                        <Context>
                          <ContextBox>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Duis laoreet gravida mauris vel ultricies.
                          </ContextBox>
                        </Context>
                      </DropdownContent>
                    </Dropdown>
                  ) }
                </Bars>
              ) }
            </GridCell>

            <GridCell snippetSkip={ true }>
              { data.map(({ data }, index) =>
                <Bars direction="right" key={ index } label="100%" space="small">
                  { data.map((value, index) =>
                    <Dropdown key={ index } position="top">
                      <DropdownTarget>
                        <Bar
                            color={ labels[index].color }
                            percent={ value }
                            showLabel={ true } />
                      </DropdownTarget>
                      <DropdownContent>
                        <Context>
                          <ContextBox>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Duis laoreet gravida mauris vel ultricies.
                          </ContextBox>
                        </Context>
                      </DropdownContent>
                    </Dropdown>
                  ) }
                </Bars>
              ) }
            </GridCell>
          </Grid>
        </Snippet>
      </Example>
    );
  }
}
