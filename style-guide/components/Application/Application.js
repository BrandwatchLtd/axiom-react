import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Status404 } from 'bw-axiom';
import { getRoutes } from '../../utils/documentation-routes';
import { Layout, LayoutHeader, LayoutSidebar, LayoutMain } from '../Layout';
import Documentation from '../Documentation';
import mapExamples from '../../map-examples';
import Navigation from '../Navigation';
import './Application.css';

export default class Application extends Component {
  static childContextTypes = {
    axiomLanguage: PropTypes.string.isRequired,
  };

  static propTypes = {
    location: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      axiomLanguage: 'en',
    };

    this.handleSwitchLanguage = this.handleSwitchLanguage.bind(this);
  }

  getChildContext() {
    return {
      axiomLanguage: this.state.axiomLanguage,
    };
  }

  handleSwitchLanguage(axiomLanguage) {
    this.setState({ axiomLanguage });
  }

  render() {
    const { location } = this.props;
    const routes = getRoutes();
    const firstRoutPath = routes[0].path;

    return (
      <Layout>
        <LayoutHeader>
          Axiom
        </LayoutHeader>

        <LayoutSidebar onSwitchLanguage={ this.handleSwitchLanguage }>
          <Navigation />
        </LayoutSidebar>

        <LayoutMain>
          <Switch location={ location }>
            <Route exact path="/" render={ () =>
              <Redirect to={ firstRoutPath }/>
            } />

            { routes.map(({ name, path }) =>
              <Route
                  key={ path }
                  path={ path }
                  render={ (props) => (
                    <Documentation { ...props }
                        examples={ mapExamples[path] }
                        name={ name } />
                  ) }
                  strict={ false } />
            ) }

            <Route render={ () => (
              <Status404
                  contactUsLocation="https://www.brandwatch.com/"
                  homeLocation="/"
                  theme="light" />
            ) } />
          </Switch>
        </LayoutMain>
      </Layout>
    );
  }
}
