import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import LogoPage from '../LogoPage';
import Paragraph from '../../../components/typography/Paragraph';

class LogoPageExample extends Component {

  static propTypes = {
    components: PropTypes.shape({
      LogoPage: PropTypes.object,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const propTypes = {
      LogoPage: components.LogoPage,
    };

    const initialProps = {
      LogoPage: {
        theme: 'day',
      },
    };

    return (
      <ExampleConfig initialProps={ initialProps } propTypes={ propTypes }>
        <div snippetIgnore style={ { height: '30rem' } }>
          <LogoPage { ...initialProps.LogoPage }>
            <Paragraph textCenter>Content goes here...</Paragraph>
          </LogoPage>
        </div>
      </ExampleConfig>
    );
  }
}

export default [ LogoPageExample ];
