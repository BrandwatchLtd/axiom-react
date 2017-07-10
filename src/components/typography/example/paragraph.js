import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import { Paragraph } from 'bw-axiom';

export default class ParagraphExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Paragraph: PropTypes.object,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const propTypes = {
      Paragraph: components.Paragraph,
    };

    const initialProps = {
      Paragraph: {},
    };

    return (
      <ExampleConfig initialProps={ initialProps } propTypes={ propTypes }>
        <Paragraph { ...initialProps.Paragraph }>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac
          accumsan quam, ut ullamcorper nulla.
        </Paragraph>
      </ExampleConfig>
    );
  }
}
