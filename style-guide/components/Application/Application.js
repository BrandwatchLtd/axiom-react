import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import {
  Base,
  Dock,
  DockFooter,
  DockItem,
  Canvas,
  CanvasHeader,
  Cloak,
  Console,
  ConsoleHeader,
  Platform,
  PlatformTitle,
} from 'bw-axiom';
import ApplicationNavigation from './ApplicationNavigation';
import ApplicationTools from './ApplicationTools';
import Documentation from '../Documentation';
import GithubLink from '../GithubLink/GithubLink';
import mapExamples from '../../map-examples';
import { getRoutes, normalisePath } from '../../utils/documentation-routes';
import './Application.css';

const leftConsole = { position: 'left', width: '17.5rem' };

export default class Application extends Component {
  static childContextTypes = {
    axiomLanguage: PropTypes.string.isRequired,
  };

  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
    location: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      axiomTheme: 'day',
      axiomLanguage: 'en',
      openConsolePosition: leftConsole.position,
      openConsoleWidth: leftConsole.width,
    };
  }

  getChildContext() {
    return {
      axiomLanguage: this.state.axiomLanguage,
    };
  }

  openConsole({ position, width }) {
    this.setState({
      openConsolePosition: position,
      openConsoleWidth: width,
    });
  }

  render() {
    const {
      axiomLanguage,
      axiomTheme,
      openConsolePosition,
      openConsoleWidth,
    } = this.state;
    const { history, location } = this.props;
    const { pathname } = location;
    const routes = getRoutes();
    const firstRoutPath = routes[0].path;

    return (
      <Platform
          onConsoleClose={ () => this.setState({ openConsolePosition: undefined }) }
          openConsolePosition={ openConsolePosition }
          openConsoleWidth={ openConsoleWidth }
          theme={ axiomTheme }>
        <Dock>
          <DockFooter>
            <DockItem>
              <GithubLink />
            </DockItem>
          </DockFooter>
        </Dock>

        <Console position={ leftConsole.position } width={ leftConsole.width }>
          <ConsoleHeader sticky="0">
            <PlatformTitle>API Docs</PlatformTitle>
          </ConsoleHeader>

          <ApplicationNavigation history={ history } />
        </Console>

        <Canvas>
          <Base sticky="0">
            <CanvasHeader>
              <PlatformTitle textStrong>
                { (routes.filter(({ path }) => path === pathname)[0] || {}).name }
              </PlatformTitle>
            </CanvasHeader>

            <Cloak invisible={ false }>
              <CanvasHeader size="small">
                <ApplicationTools
                    activeLanguage={ axiomLanguage }
                    activeTheme={ axiomTheme }
                    isConsoleOpen={ !!openConsolePosition }
                    onLanguageChange={ (axiomLanguage) => this.setState({ axiomLanguage }) }
                    onOpenConsole={ () => this.openConsole(leftConsole) }
                    onThemeChange={ (axiomTheme) => this.setState({ axiomTheme }) } />
              </CanvasHeader>
            </Cloak>
          </Base>

          <Switch location={ { pathname: normalisePath(pathname) } }>
            <Route exact path="/" render={ () =>
              <Redirect to={ firstRoutPath }/>
            } />

            { Object.keys(mapExamples).map((path) =>
              <Route
                  key={ path }
                  path={ path }
                  render={ (props) => (
                    <Documentation { ...props } examples={ mapExamples[path] } />
                  ) }
                  strict={ false } />
            ) }
          </Switch>
        </Canvas>
      </Platform>
    );
  }
}
