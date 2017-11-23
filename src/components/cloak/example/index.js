import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import Candytar from '../../candytar/Candytar';
import Card from '../../card/Card';
import CardList from '../../card/CardList';
import Cloak from '../Cloak';
import Context from '../../context/Context';
import Dropdown from '../../dropdown/Dropdown';
import DropdownContent from '../../dropdown/DropdownContent';
import DropdownMenu from '../../dropdown/DropdownMenu';
import DropdownMenuItem from '../../dropdown/DropdownMenuItem';
import DropdownTarget from '../../dropdown/DropdownTarget';
import Grid from '../../grid/Grid';
import GridCell from '../../grid/GridCell';
import Heading from '../../typography/Heading';
import IconButton from '../../icon/IconButton';
import Paragraph from '../../typography/Paragraph';

class CloakExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Cloak: PropTypes.object.isRequired,
      CloakContainer: PropTypes.object.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  render() {
    const { isOpen } = this.state;
    const { components } = this.props;

    const propTypes = {
      Cloak: components.Cloak,
      CloakContainer: components.CloakContainer,
    };

    const initialProps = {
      Cloak: {
        invisible: !isOpen,
      },
      CloakContainer: {},
    };

    return (
      <ExampleConfig
          initialProps={ initialProps }
          propTypes={ propTypes }>
        <CardList cloakContainer>
          <Card active={ isOpen } cloakContainer onClick={ () => {} }>
            <Grid responsive={ false } snippetReplace verticalAlign="middle">
              <GridCell shrink>
                <Candytar color="serene-sea" size="4.5rem" />
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

              <GridCell shrink>
                <Dropdown
                    onRequestClose={ () => this.setState({ isOpen: false }) }
                    onRequestOpen={ () => this.setState({ isOpen: true }) }>
                  <DropdownTarget>
                    <Cloak { ...initialProps.Cloak }>
                      <IconButton name="ellipsis" />
                    </Cloak>
                  </DropdownTarget>

                  <DropdownContent { ...initialProps.DropdownContent }>
                    <Context>
                      <DropdownMenu { ...initialProps.DropdownMenu }>
                        <DropdownMenuItem { ...initialProps.DropdownMenuItem }>
                          Lorem ipsum
                        </DropdownMenuItem>
                      </DropdownMenu>
                    </Context>
                  </DropdownContent>
                </Dropdown>
              </GridCell>
            </Grid>
          </Card>
        </CardList>
      </ExampleConfig>
    );
  }
}

export default [ CloakExample ];
