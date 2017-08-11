import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import { Tabset, Tab } from 'bw-axiom';

class TabsetExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Tabset: PropTypes.object,
      Tab: PropTypes.object,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const propTypes = {
      Tabset: components.Tabset,
      Tab: components.Tab,
    };

    const initialProps = {
      Tabset: { },
      Tab: {
        title: 'Lorem ipsum',
      },
    };

    const initialPropOptions = {
      Tabset: {
        children: {
          count: 4,
          min: 1,
          max: 6,
        },
      },
      Tab: {
        disabled: {
          applyToIndex: 2,
        },
      },
    };

    return (
      <ExampleConfig
          initialPropOptions={ initialPropOptions }
          initialProps={ initialProps }
          propTypes={ propTypes }>
        <Tabset { ...initialProps.Tabset }>
          <Tab { ...initialProps.Tab }>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nulla mauris libero, suscipit eu dignissim eu, consectetur in mauris.
            Donec semper tristique ipsum non vehicula. In eget libero lobortis,
            sollicitudin velit nec, accumsan dolor. Morbi in finibus mauris, id pretium
            ipsum. Sed quis massa tempus nunc molestie ultrices sit amet vel urna.
          </Tab>
        </Tabset>
      </ExampleConfig>
    );
  }
}

module.exports = [ TabsetExample ];
