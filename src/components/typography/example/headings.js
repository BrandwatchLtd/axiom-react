import React, { Component, PropTypes } from 'react';
import { Example, Snippet } from 'style-guide';
import { Heading, Strong, Weak } from 'bw-axiom';

export default class TypeExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Heading: PropTypes.shape({
        style: PropTypes.shape({
          values: PropTypes.array.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const { Heading: { style } } = components;

    return (
      <Example name="Headings">
        <Snippet>
          { style.values.map((style) =>
            <Heading key={ style } style={ style }>
              { style }: [
              <Weak> Weak </Weak>/
              Standard/
              <Strong> Strong </Strong>
              ]
            </Heading>
          ) }
        </Snippet>
      </Example>
    );
  }
}
