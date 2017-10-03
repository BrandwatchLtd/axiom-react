import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import Bar from '../Bar';
import Bars from '../Bars';

class BarsExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Bars: PropTypes.object,
      Bar: PropTypes.object,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const propTypes = {
      Bars: components.Bars,
      Bar: components.Bar,
    };

    const initialProps = {
      Bars: {
        direction: 'up',
      },
      Bar: {
        color: 'pink',
        showLabel: true,
        onClick: () => {},
      },
    };

    return (
      <ExampleConfig initialProps={ initialProps } propTypes={ propTypes }>
        <div snippetIgnore style={ { display: 'flex', minHeight: '10rem' } }>
          <Bars { ...initialProps.Bars }>
            <Bar { ...initialProps.Bar } percent={ 0 } />
            <Bar { ...initialProps.Bar } percent={ 25 } />
            <Bar { ...initialProps.Bar } percent={ 50 } />
            <Bar { ...initialProps.Bar } percent={ 75 } />
            <Bar { ...initialProps.Bar } percent={ 100 } />
          </Bars>
        </div>
      </ExampleConfig>
    );
  }
}

export default [
  BarsExample,
];
