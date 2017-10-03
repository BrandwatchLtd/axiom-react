import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import Word from '../Word';
import WordCloud from '../WordCloud';
import { wordArray } from './data';

class WordCloudExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      WordCloud: PropTypes.object,
      Word: PropTypes.object,
    }).isRequired,
  };

  render() {
    const { components } = this.props;

    const propTypes = {
      WordCloud: components.WordCloud,
      Word: components.Word,
    };

    const initialProps = {
      WordCloud: {
        height: 300,
        width: 480,
      },
      Word: {
        onClick: () => {},
      },
    };

    return (
      <ExampleConfig initialProps={ initialProps } propTypes={ propTypes }>
        <WordCloud { ...initialProps.WordCloud }>
          { wordArray.map((options, key) =>
            <Word key={ key } { ...options } />
          ) }
        </WordCloud>
      </ExampleConfig>
    );
  }
}


export default [
  WordCloudExample,
];
