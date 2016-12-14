import React, { Component, PropTypes } from 'react';
import { Example, Snippet } from 'style-guide';
import { Heading, Label, LabelGroup } from 'bw-axiom';

export default class LabelExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Label: PropTypes.shape({
        color: PropTypes.shape({
          values: PropTypes.array.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const { Label: { color } } = components;

    return (
      <Example name="Colored Labels">
        <Heading>Plaette Colors</Heading>
        <Snippet>
          <LabelGroup snippetIgnore={ true }>
            { color.values.map((id) =>
              <Label color={ id } key={ id }>{ id }</Label>
            ) }
          </LabelGroup>
        </Snippet>
      </Example>
    );
  }
}
