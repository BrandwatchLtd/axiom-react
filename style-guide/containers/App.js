import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Layout, LayoutHeader, LayoutSidebar, LayoutMain } from '../components/Layout';
import Navigation from './Navigation';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.any,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  };

  static childContextTypes = {
    pathname: PropTypes.string.isRequired,
  };

  getChildContext() {
    return {
      pathname: this.props.location.pathname,
    };
  }

  render() {
    const { children } = this.props;

    return (
      <Layout>
        <LayoutHeader>
          Axiom
        </LayoutHeader>

        <LayoutSidebar>
          <Navigation />
        </LayoutSidebar>

        <LayoutMain>
          { children }
        </LayoutMain>
      </Layout>
    );
  }
}
