import React, { Component, PropTypes } from 'react';
import LabelGroup from '../LabelGroup';
import Label from '../Label';
import Heading from '../../typography/Heading';
import Example from 'style-guide/components/Example/Example';
import Snippet from 'style-guide/components/Example/Snippet';

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
