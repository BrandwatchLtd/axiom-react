import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Menu, MenuItem } from 'bw-axiom';

export default class MenuExample extends Component {
  componentWillMount() {
    this.setState({
      activeIndex: 0,
      disabledIndex: 1,
    });
  }

  render() {
    const { activeIndex, disabledIndex } = this.state;

    return (
      <Example name="Menu">
        <Snippet>
          <Menu>
            <MenuItem
                active={ activeIndex === 0 }
                disabled={ disabledIndex === 0 }
                onClick={ () => this.setState({ activeIndex: 0 }) }>
              Lorem ipsum
            </MenuItem>

            <MenuItem
                active={ activeIndex === 1 }
                disabled={ disabledIndex === 1 }
                onClick={ () => this.setState({ activeIndex: 1 }) }>
              Lorem ipsum
            </MenuItem>

            <MenuItem
                active={ activeIndex === 2 }
                disabled={ disabledIndex === 2 }
                onClick={ () => this.setState({ activeIndex: 2 }) }>
              Lorem ipsum
            </MenuItem>
          </Menu>

          <Menu size="large">
            <MenuItem
                active={ activeIndex === 0 }
                disabled={ disabledIndex === 0 }
                onClick={ () => this.setState({ activeIndex: 0 }) }>
              Lorem ipsum
            </MenuItem>

            <MenuItem
                active={ activeIndex === 1 }
                disabled={ disabledIndex === 1 }
                onClick={ () => this.setState({ activeIndex: 1 }) }>
              Lorem ipsum
            </MenuItem>

            <MenuItem
                active={ activeIndex === 2 }
                disabled={ disabledIndex === 2 }
                onClick={ () => this.setState({ activeIndex: 2 }) }>
              Lorem ipsum
            </MenuItem>
          </Menu>
        </Snippet>
      </Example>
    );
  }
}
