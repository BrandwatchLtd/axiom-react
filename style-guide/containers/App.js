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
    axiomLanguage: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
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
      pathname: this.props.location.pathname,
    };
  }

  handleSwitchLanguage(axiomLanguage) {
    this.setState({ axiomLanguage });
  }

  render() {
    const { children } = this.props;

    return (
      <Layout>
        <LayoutHeader>
          Axiom
        </LayoutHeader>

        <LayoutSidebar onSwitchLanguage={ this.handleSwitchLanguage }>
          <Navigation />
        </LayoutSidebar>

        <LayoutMain>
          { children }
        </LayoutMain>
      </Layout>
    );
  }
}
