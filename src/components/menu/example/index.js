import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import Menu from '../Menu';
import MenuItem from '../MenuItem';

class MenuExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Menu: PropTypes.object,
      MenuItem: PropTypes.object,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }

  render() {
    const { activeIndex } = this.state;
    const { components } = this.props;
    const propTypes = {
      Menu: components.Menu,
      MenuItem: components.MenuItem,
    };

    const initialProps = {
      Menu: { },
      MenuItem: { },
    };

    return (
      <ExampleConfig
          initialProps={ initialProps }
          propTypes={ propTypes }>
        <Menu { ...initialProps.Menu }>
          <MenuItem { ...initialProps.MenuItem }
              active={ activeIndex === 0 }
              onClick={ () => this.setState({ activeIndex: 0 }) }>
            Lorem ipsum dolar
          </MenuItem>

          <MenuItem { ...initialProps.MenuItem }
              active={ activeIndex === 1 }
              onClick={ () => this.setState({ activeIndex: 1 }) }>
            Lorem ipsum dolar
          </MenuItem>

          <MenuItem { ...initialProps.MenuItem }
              active={ activeIndex === 2 }
              onClick={ () => this.setState({ activeIndex: 2 }) }>
            Lorem ipsum dolar
          </MenuItem>
        </Menu>
      </ExampleConfig>
    );
  }
}

module.exports = [ MenuExample ];
