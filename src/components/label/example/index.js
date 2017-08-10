import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import { Label, LabelGroup, LabelIcon } from 'bw-axiom';

class LabelExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Label: PropTypes.object.isRequired,
      LabelGroup: PropTypes.object.isRequired,
      LabelIcon: PropTypes.object.isRequired,
    }).isRequired,
  };

  render() {
    const { components } = this.props;

    const propTypes = {
      Label: components.Label,
      LabelGroup: components.LabelGroup,
      LabelIcon: components.LabelIcon,
    };

    const initialProps = {
      Label: {},
      LabelGroup: {
        textCenter: true,
      },
      LabelIcon: {},
    };

    const initialPropOptions = {
      Label: {
        children: {
          options: [
            { name: 'Text', children: 'Lorem ipsum' },
            { name: 'Text + Icon', children: ['Dolar amet', <LabelIcon name="cross" />] },
          ],
        },
      },
      LabelGroup: {
        children: {
          count: 1,
          min: 1,
          max: Infinity,
        },
      },
    };

    return (
      <ExampleConfig
          initialPropOptions={ initialPropOptions }
          initialProps={ initialProps }
          propTypes={ propTypes }>
        <LabelGroup { ...initialProps.LabelGroup }>
          <Label { ...initialProps.Label }>
            { initialPropOptions.Label.children.options[0].children }
          </Label>
        </LabelGroup>
      </ExampleConfig>
    );
  }
}

module.exports = [ LabelExample ];
