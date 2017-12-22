import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Button,
  ButtonIcon,
  ButtonGroup,
  Cloak,
  Context,
  Dropdown,
  DropdownContent,
  DropdownMenu,
  DropdownMenuItem,
  DropdownTarget,
  Grid,
  GridCell,
} from 'bw-axiom';

const languages = [
  { code: 'en', title: 'English' },
  { code: 'de', title: 'German' },
  { code: 'es', title: 'Spanish' },
  { code: 'fr', title: 'French' },
];

const themes = [
  { code: 'day', title: 'Day' },
  { code: 'night', title: 'Night' },
];

export default class ApplicationTools extends Component {
  static propTypes = {
    activeLanguage: PropTypes.string.isRequired,
    activeTheme: PropTypes.string.isRequired,
    isConsoleOpen: PropTypes.bool.isRequired,
    onLanguageChange: PropTypes.func.isRequired,
    onOpenConsole: PropTypes.func,
    onThemeChange: PropTypes.func.isRequired,
  };

  render() {
    const {
      activeLanguage,
      activeTheme,
      isConsoleOpen,
      onLanguageChange,
      onOpenConsole,
      onThemeChange,
    } = this.props;

    return (
      <Grid
          gutters="small"
          horizontalAlign="between"
          responsive={ false }
          shrink>
        { onOpenConsole && (
          <GridCell>
            <Cloak invisible={ isConsoleOpen }>
              <ButtonGroup>
                <Button
                    onClick={ () => onOpenConsole() }
                    size="small"
                    style="secondary">
                  Open Console
                  <ButtonIcon name="chevron-right" />
                </Button>
              </ButtonGroup>
            </Cloak>
          </GridCell>
        ) }

        <GridCell>
          <ButtonGroup>
            <Dropdown flip="mirror">
              <DropdownTarget>
                <Button size="small" style="secondary">
                  Theme
                  <ButtonIcon name="chevron-down" />
                </Button>
              </DropdownTarget>

              <DropdownContent>
                <Context>
                  <DropdownMenu>
                    { themes.map(({ code, title }) =>
                      <DropdownMenuItem
                          key={ code }
                          onClick={ () => onThemeChange(code) }
                          selected={ activeTheme === code }
                          title={ title }>
                        { title }
                      </DropdownMenuItem>
                    ) }
                  </DropdownMenu>
                </Context>
              </DropdownContent>
            </Dropdown>

            <Dropdown flip="mirror">
              <DropdownTarget>
                <Button size="small" style="secondary">
                  Language
                  <ButtonIcon name="chevron-down" />
                </Button>
              </DropdownTarget>

              <DropdownContent>
                <Context>
                  <DropdownMenu>
                    { languages.map(({ code, title }) =>
                      <DropdownMenuItem
                          key={ code }
                          onClick={ () => onLanguageChange(code) }
                          selected={ activeLanguage === code }
                          title={ title }>
                        { title }
                      </DropdownMenuItem>
                    ) }
                  </DropdownMenu>
                </Context>
              </DropdownContent>
            </Dropdown>
          </ButtonGroup>
        </GridCell>
      </Grid>
    );
  }
}
