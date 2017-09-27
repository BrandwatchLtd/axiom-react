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
    lng: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      lng: 'en',
    };

    this.handleSwitchLanguage = this.handleSwitchLanguage.bind(this);
  }

  getChildContext() {
    return {
      lng: this.state.lng,
      pathname: this.props.location.pathname,
    };
  }

  handleSwitchLanguage(lng) {
    this.setState({ lng });
  }

  render() {
    const { children } = this.props;

    return (
      <Layout>
        <LayoutHeader>
          Axiom
        </LayoutHeader>

        <LayoutSidebar handleSwitchLanguage={ this.handleSwitchLanguage }>
          <Navigation />
        </LayoutSidebar>

        <LayoutMain>
          { children }
        </LayoutMain>
      </Layout>
    );
  }
}
