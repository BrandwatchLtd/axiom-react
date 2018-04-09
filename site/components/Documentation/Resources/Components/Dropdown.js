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
      multiSelection: ['Option 1'],
    };
  }

  handleMultiSelection(value) {
    this.setState(({ multiSelection }) => ({
      multiSelection: multiSelection.indexOf(value) >= 0
        ? multiSelection.filter((v) => v !== value)
        : [...multiSelection, value],
    }));
  }

  render() {
    const { selected, multiSelection } = this.state;

    return (
      <DocumentationContent>
        <Grid>
          <GridCell>
            <DocumentationShowCase centered>
              <Dropdown flip="mirror" showArrow={ false }>
                <DropdownTarget>
                  <Link tabIndex="0">
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
                  value={ multiSelection.join(', ') }>
                <TextInputIcon name="chevron-down" />
              </TextInput>
            </DropdownTarget>

            <DropdownSource>
              <DropdownContext>
                <DropdownMenu>
                  <DropdownMenuItem
                      multiSelect
                      onClick={ () => this.handleMultiSelection('Option 1') }
                      selected={ multiSelection.indexOf('Option 1') >= 0 }>
                    Option 1
                  </DropdownMenuItem>

                  <DropdownMenuItem
                      multiSelect
                      onClick={ () => this.handleMultiSelection('Option 2') }
                      selected={ multiSelection.indexOf('Option 2') >= 0 }>
                    Option 2
                  </DropdownMenuItem>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuItem
                      disabled
                      multiSelect
                      onClick={ () => this.handleMultiSelection('Option 3') }
                      selected={ multiSelection.indexOf('Option 3') >= 0 }>
                    Option 3
                  </DropdownMenuItem>

                  <DropdownMenuItem
                      multiSelect
                      onClick={ () => this.handleMultiSelection('Option 4') }
                      selected={ multiSelection.indexOf('Option 4') >= 0 }>
                    Option 4
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
