import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import { Link, TextIcon, Toggle, Toolbar, Tool } from 'bw-axiom';

class ToolbarExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Toolbar: PropTypes.object,
      Tool: PropTypes.object,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const propTypes = {
      Toolbar: components.Toolbar,
      Tool: components.Tool,
    };

    const initialProps = {
      Toolbar: { },
      Tool: { },
    };

    const initialPropOptions = {
      Toolbar: {
        children: {
          count: 2,
          min: 1,
          max: 5,
        },
      },
    };

    return (
      <ExampleConfig
          initialPropOptions={ initialPropOptions }
          initialProps={ initialProps }
          propTypes={ propTypes }>
        <Toolbar { ...initialProps.Toolbar }>
          <Tool { ...initialProps.Tool }>
            <Link style="subtle">
              Lorem Ipsum<TextIcon name="chevron-down" spaceLeft="x1" />
            </Link>
          </Tool>

          <Tool { ...initialProps.Tool }>
            <Toggle
                disabled={ true }
                onToggle={ () => {} }
                toggled={ true } >Toggle</Toggle>
          </Tool>
        </Toolbar>
      </ExampleConfig>
    );
  }
}

module.exports = [ ToolbarExample ];
