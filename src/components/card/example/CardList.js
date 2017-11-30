import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import Badge from '../../badge/Badge';
import Candytar from '../../candytar/Candytar';
import Card from '../Card';
import CardContent from '../CardContent';
import CardList from '../CardList';
import Cloak from '../../cloak/Cloak';
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
import Link from '../../typography/Link';
import List from '../../list/List';
import ListItem from '../../list/ListItem';
import Paragraph from '../../typography/Paragraph';
import Reveal from '../../reveal/Reveal';
import Strong from '../../typography/Strong';
import TextIcon from '../../typography/TextIcon';

export default class CardExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      CardList: PropTypes.object.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      active: -1,
      hover: -1,
    };
  }

  render() {
    const { active, hover } = this.state;
    const { components } = this.props;
    const propTypes = {
      CardList: components.CardList,
    };

    const initialProps = {
      CardList: {},
    };

    return (
      <ExampleConfig
          initialProps={ initialProps }
          propTypes={ propTypes }>
        <CardList { ...initialProps.CardList }>
          { new Array(3).fill(0).map((_, index) =>
            <Card
                active={ active === index }
                cloakContainer
                hover={ hover === index }
                key={ index }
                onClick={ () => this.setState({ active: active === index ? -1 : index }) }
                size="large">
              <CardContent size="large">
                <Grid
                    responsive={ false }
                    space="x0"
                    verticalAlign="middle">
                  <GridCell hiddenUntil="medium" shrink>
                    <Candytar color="giant-leap" size="4.5rem" />
                  </GridCell>

                  <GridCell>
                    <Grid
                        gutters="tiny"
                        responsive={ false }
                        space="x2"
                        verticalAlign="middle">
                      <GridCell shrink visibleUntil="medium">
                        <Candytar color="giant-leap" size="1.5rem" />
                      </GridCell>

                      <GridCell>
                        <Heading textSize="headtitle">Lorem Ipsum</Heading>
                      </GridCell>
                    </Grid>

                    <Paragraph space="x0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc commodo egestas fringilla. In a arcu erat. Ut vestibulum
                      sollicitudin orci, ut blandit ante. Vestibulum tempus rhoncus
                      vehicula.
                    </Paragraph>

                    <Reveal space="x2" visible={ active === index }>
                      <Grid
                          gutters="small"
                          responsive={ false }
                          space="x0"
                          textColor="subtle"
                          textSize="small"
                          textStrong
                          verticalAlign="middle">
                        <GridCell fit="medium" full>
                          <List style="inline">
                            <ListItem>Lorem <Strong>1.12k</Strong></ListItem>
                            <ListItem>Lorem <Strong>1.12k</Strong></ListItem>
                            <ListItem>Lorem <Strong>1.12k</Strong></ListItem>
                          </List>
                        </GridCell>

                        <GridCell shrink>
                          <Link style="subtle"><TextIcon name="retweet" /> 1</Link>
                        </GridCell>

                        <GridCell shrink>
                          <Link style="subtle"><TextIcon name="heart" /> 6</Link>
                        </GridCell>

                        <GridCell shrink>
                          <Link style="subtle"><TextIcon name="reply" /> 0</Link>
                        </GridCell>

                        <GridCell shrink>
                          <Badge color="success">
                            <TextIcon name="preview" /> 44%
                          </Badge>
                        </GridCell>
                      </Grid>
                    </Reveal>
                  </GridCell>

                  <GridCell onClick={ (e) => e.stopPropagation() } shrink>
                    <Dropdown
                        onRequestClose={ () => this.setState({ hover: -1 }) }
                        onRequestOpen={ () => this.setState({ hover: index }) }>
                      <DropdownTarget>
                        <Cloak invisible={ active !== index && hover !== index }>
                          <IconButton name="ellipsis" size="medium" />
                        </Cloak>
                      </DropdownTarget>

                      <DropdownContent>
                        <Context>
                          <DropdownMenu>
                            <DropdownMenuItem onClick={ (e) => e.stopPropagation() }>
                              Lorem ipsum
                            </DropdownMenuItem>
                          </DropdownMenu>
                        </Context>
                      </DropdownContent>
                    </Dropdown>
                  </GridCell>
                </Grid>
              </CardContent>
            </Card>
          ) }
        </CardList>
      </ExampleConfig>
    );
  }
}
