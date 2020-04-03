import PropTypes from "prop-types";
import React, { Component } from "react";
import atIds from "@brandwatch/axiom-automation-testing/ids";
import {
  Avatar,
  Button,
  ButtonGroup,
  Candytar,
  Dropdown,
  DropdownContent,
  DropdownContext,
  DropdownSource,
  DropdownTarget,
  Grid,
  GridCell,
  Heading,
  Link,
  Paragraph,
} from "@brandwatch/axiom-components";
import { translate } from "@brandwatch/axiom-localization";
import { stringToColor } from "@brandwatch/axiom-utils";

const t = translate({
  "Sign out": {
    de: "Abmelden",
    es: "Cerrar Sesión",
    fr: "Se déconnecter",
  },
});

export default class UserMenu extends Component {
  static contextTypes = {
    axiomLanguage: PropTypes.string,
  };

  static propTypes = {
    children: PropTypes.node,
    /** User email address */
    email: PropTypes.string.isRequired,
    /** User first name */
    firstName: PropTypes.string.isRequired,
    /** User image, if none provided it will default to a Candytar */
    imageSrc: PropTypes.string,
    /** User last name */
    lastName: PropTypes.string.isRequired,
    /** Logout handler called when the sign out button is pressed */
    onLogout: PropTypes.func.isRequired,
  };

  render() {
    const {
      children,
      firstName,
      lastName,
      email,
      imageSrc,
      onLogout,
      ...rest
    } = this.props;
    const color = stringToColor(email);
    const { axiomLanguage } = this.context;
    const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`;

    return (
      <Dropdown position="bottom" {...rest}>
        <DropdownTarget>
          <Link data-ax-at={atIds.UserMenu.activate}>
            <Avatar size="2rem" src={imageSrc}>
              <Candytar color={color} initials={initials} size="2rem" />
            </Avatar>
          </Link>
        </DropdownTarget>

        <DropdownSource>
          <DropdownContext width="auto">
            <DropdownContent>
              <Grid gutters="large" responsive={false} verticalAlign="middle">
                <GridCell fill>
                  <Heading space="x0" textSize="headtitle">
                    {firstName} {lastName}
                  </Heading>
                  <Paragraph space="x0" textColor="subtle">
                    {email}
                  </Paragraph>
                  <ButtonGroup space="x4">
                    <Button
                      data-ax-at={atIds.UserMenu.logout}
                      onClick={onLogout}
                    >
                      {t("Sign out", axiomLanguage)}
                    </Button>
                  </ButtonGroup>
                </GridCell>

                <GridCell shrink>
                  <Avatar size="4.5rem" src={imageSrc}>
                    <Candytar color={color} initials={initials} size="4.5rem" />
                  </Avatar>
                </GridCell>
              </Grid>
            </DropdownContent>

            {children}
          </DropdownContext>
        </DropdownSource>
      </Dropdown>
    );
  }
}
