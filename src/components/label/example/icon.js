import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Label, LabelIcon, LabelGroup } from 'bw-axiom';

export default class LabelExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Label: PropTypes.shape({
        color: PropTypes.shape({
          values: PropTypes.array.isRequired,
        }).isRequired,
        size: PropTypes.shape({
          values: PropTypes.array.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const { Label: { color, size } } = components;

    return (
      <Example name="Label actions with icons">
        <Snippet>
          <LabelGroup>
            { color.values.map((color) =>
              size.values.map((size) =>
                <Label
                    color={ color }
                    key={ `${color}-${size}` }
                    size={ size }>
                  {`${ size } ${ color }`}
                  <LabelIcon name="cross" />
                </Label>
              )
            ) }
          </LabelGroup>
        </Snippet>
      </Example>
    );
  }
}
