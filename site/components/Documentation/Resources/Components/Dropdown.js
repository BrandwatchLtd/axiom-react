import React, { Component } from 'react';
import {
  Button,
  ButtonGroup,
  ButtonIcon,
  Grid,
  GridCell,
  Dropdown,
  DropdownContext,
  DropdownMenu,
  DropdownMenuItem,
  DropdownSource,
  DropdownTarget,
  Link,
  TextIcon,
  TextInput,
  TextInputIcon,
} from '@brandwatch/axiom-components';
import {
  DocumentationApi,
  DocumentationContent,
  DocumentationShowCase,
} from '@brandwatch/axiom-documentation-viewer';

export default class Documentation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'Option 1',
    };
  }

  render() {
    const { selected } = this.state;

    return (
      <DocumentationContent>
        <Grid>
          <GridCell>
            <DocumentationShowCase centered>
              <Dropdown flip="mirror" showArrow={ false }>
                <DropdownTarget>
                  <Link>
                    { selected } <TextIcon name="chevron-down" />
                  </Link>
                </DropdownTarget>

                <DropdownSource>
                  <DropdownContext>
                    <DropdownMenu>
                      <DropdownMenuItem
                          onClick={ () => this.setState({ selected: 'Option 1' }) }
                          selected={ selected === 'Option 1' }>
                        Option 1
                      </DropdownMenuItem>

                      <DropdownMenuItem
                          onClick={ () => this.setState({ selected: 'Option 2' }) }
                          selected={ selected === 'Option 2' }>
                        Option 2
                      </DropdownMenuItem>
                    </DropdownMenu>
                  </DropdownContext>
                </DropdownSource>
              </Dropdown>
            </DocumentationShowCase>
          </GridCell>

          <GridCell>
            <DocumentationShowCase centered>
              <ButtonGroup joined>
                <Button style="secondary">Primary Action</Button>

                <Dropdown>
                  <DropdownTarget>
                    <Button style="secondary">
                      <ButtonIcon name="chevron-down" />
                    </Button>
                  </DropdownTarget>

                  <DropdownSource>
                    <DropdownContext>
                      <DropdownMenu>
                        <DropdownMenuItem>
                          Lorem ipsum
                        </DropdownMenuItem>

                        <DropdownMenuItem>
                          Lorem ipsum
                        </DropdownMenuItem>

                        <DropdownMenuItem>
                          Lorem ipsum
                        </DropdownMenuItem>

                        <DropdownMenuItem>
                          Lorem ipsum
                        </DropdownMenuItem>
                      </DropdownMenu>
                    </DropdownContext>
                  </DropdownSource>
                </Dropdown>
              </ButtonGroup>
            </DocumentationShowCase>
          </GridCell>
        </Grid>

        <DocumentationShowCase centered>
          <Dropdown flip="mirror" showArrow={ false }>
            <DropdownTarget>
              <TextInput
                  onChange={ () => {} }
                  readOnly
                  value={ selected }>
                <TextInputIcon name="chevron-down" />
              </TextInput>
            </DropdownTarget>

            <DropdownSource>
              <DropdownContext>
                <DropdownMenu>
                  <DropdownMenuItem
                      onClick={ () => this.setState({ selected: 'Option 1' }) }
                      selected={ selected === 'Option 1' }>
                    Option 1
                  </DropdownMenuItem>

                  <DropdownMenuItem
                      onClick={ () => this.setState({ selected: 'Option 2' }) }
                      selected={ selected === 'Option 2' }>
                    Option 2
                  </DropdownMenuItem>
                </DropdownMenu>
              </DropdownContext>
            </DropdownSource>
          </Dropdown>
        </DocumentationShowCase>

        <DocumentationApi components={ [
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Dropdown/Dropdown'),
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Dropdown/DropdownContent'),
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Dropdown/DropdownMenu'),
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Dropdown/DropdownMenuItem'),
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Dropdown/DropdownSource'),
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Dropdown/DropdownTarget'),
        ] } />
      </DocumentationContent>
    );
  }
}
