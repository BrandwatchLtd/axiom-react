import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { LabelGroup, Label } from 'bw-axiom';

export default class LabelExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Label: PropTypes.shape({
        full: PropTypes.shape({
          values: PropTypes.array.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const { Label: { full } } = components;

    return (
      <Example name="Full width Labels">
        <Snippet>
          <LabelGroup snippetIgnore={ true }>
            <Label full={ true }>Always full width</Label>

            { full.values.map((at) =>
              <Label full={ at } key={ at }>Full width at { at }</Label>
            ) }
          </LabelGroup>
        </Snippet>
      </Example>
    );
  }
}
