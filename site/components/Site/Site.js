import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { withRouter, Switch, Route } from 'react-router';
import Documentation from '../Documentation/Documentation';
import Landing from '../Landing/Landing';
import SiteFooter from './SiteFooter';
import './Site.css';

class Site extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
  };

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return (
      <Fragment>
        <Switch>
          <Route component={ Landing } exact path="/" />
          <Route component={ Documentation } path="/docs" />
        </Switch>

        <SiteFooter />
      </Fragment>
    );
  }
}

export default withRouter(Site);
