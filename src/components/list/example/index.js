import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import { List, ListItem } from 'bw-axiom';

class ListExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      List: PropTypes.object,
      ListItem: PropTypes.object,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const propTypes = {
      List: components.List,
      ListItem: components.ListItem,
    };

    const initialProps = {
      List: { },
      ListItem: { },
    };

    const initialPropOptions = {
      List: {
        children: {
          count: 5,
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
        <List { ...initialProps.List }>
          <ListItem { ...initialProps.ListItem }>
            Lorem ipsum dolor sit amet
          </ListItem>
        </List>
      </ExampleConfig>
    );
  }
}

module.exports = [ ListExample ];
