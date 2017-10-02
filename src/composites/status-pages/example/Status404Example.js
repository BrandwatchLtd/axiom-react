import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import Status404 from '../Status404';

export default class Status404Example extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Status404: PropTypes.object,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const propTypes = {
      Status404: components.Status404,
    };

    const initialProps = {
      Status404: {
        contactUsLocation: '/',
        homeLocation: '/',
        theme: 'light',
      },
    };

    return (
      <ExampleConfig initialProps={ initialProps } propTypes={ propTypes }>
        <div snippetIgnore style={ { height: '30rem' } }>
          <Status404 { ...initialProps.Status404 } />
        </div>
      </ExampleConfig>
    );
  }
}
