import React, { Component, PropTypes } from 'react';
import {
  Avatar,
  Button,
  ButtonGroup,
  Context,
  ContextBox,
  Candytar,
  Dropdown,
  DropdownButton,
  DropdownMenu,
  Grid,
  GridCell,
  Heading,
  Link,
  Paragraph,
} from 'bw-axiom';
import './UserMenu.css';

function stringToColor(string) {
  return (colors) =>  colors[
    string.split('').reduce((acc, val) =>acc + val.charCodeAt(), 0)
      % (colors.length -1)
  ];
}

export default class UserMenu extends Component {
  static propTypes = {
    children: PropTypes.node,
    email: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    imageSrc: PropTypes.string,
    lastName: PropTypes.string.isRequired,
    onLogout: PropTypes.func.isRequired,
  };

  render() {
    const { children, firstName, lastName, email, imageSrc, onLogout } = this.props;
    const userColorPicker = stringToColor(email);

    return (
      <Dropdown position="bottom">
        <DropdownButton>
          <Link>
            <Avatar size="2rem" src={ imageSrc }>
              <Candytar picker={ userColorPicker } size="2rem" />
            </Avatar>
          </Link>
        </DropdownButton>

        <DropdownMenu>
          <Context width="auto">
            <ContextBox>
              <Grid gutters="large" responsive={ false } verticalAlign="middle">
                <GridCell fill={ true }>
                  <Heading space="none" style="title">{ firstName } { lastName }</Heading>
                  <Paragraph space="none" textColor="subtle">{ email }</Paragraph>
                  <ButtonGroup space="small">
                    <Button data-tid="logout" onClick={ onLogout }>Sign Out</Button>
                  </ButtonGroup>
                </GridCell>

                <GridCell shrink={ true }>
                  <Avatar size="4.5rem" src={ imageSrc }>
                    <Candytar picker={ userColorPicker } size="4.5rem" />
                  </Avatar>
                </GridCell>
              </Grid>
            </ContextBox>

            { do { if (children) {
              <div className="ax-user-menu__content">
                { children }
              </div>;
            } } }
          </Context>
        </DropdownMenu>
      </Dropdown>
    );
  }
}
