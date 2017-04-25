import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Label, LabelGroup } from 'bw-axiom';

export default class LabelExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Label: PropTypes.shape({
        size: PropTypes.shape({
          values: PropTypes.array.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const { Label: { size } } = components;

    return (
      <Example name="Sized Labels">
        <Snippet>
          <LabelGroup snippetIgnore={ true }>
            { size.values.map((id) =>
              <Label key={ id } size={ id }>{ id }</Label>
            ) }
          </LabelGroup>
        </Snippet>
      </Example>
    );
  }
}
