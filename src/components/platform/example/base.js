import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Platform, Dock, DockItem, Console, Canvas } from 'bw-axiom';

export default class PlatformExample extends Component {
  componentWillMount() {
    this.setActive(0, 0);
  }

  setActive(active, previousActive) {
    this.setState({
      active,
      previousActive,
    });
  }

  render() {
    const { active, previousActive } = this.state;

    const consoleContent = [
      undefined,
      'Console 2',
      'Console 3',
    ];

    const canvasContent = [
      'Canvas 1',
      'Canvas 2',
      undefined,
    ];

    const containerStyle = {
      position: 'relative',
      height: 600,
      width: '100%',
      overflow: 'hidden',
    };

    return (
      <Example name="Platform">
        <div style={ containerStyle }>
          <Platform consoleWidth="26.25rem">
            <Dock>
              <DockItem
                  active={ active === 0 }
                  icon="burger"
                  onClick={ () => this.setActive(0, active) }>

              </DockItem>

              <DockItem
                  active={ active === 1 }
                  icon="twitter"
                  onClick={ () => this.setActive(1, active) }>

              </DockItem>

              <DockItem
                  active={ active === 2 }
                  icon="ellipsis"
                  onClick={ () => this.setActive(2, active) }>

              </DockItem>
            </Dock>

            <Console isVisible={ !!consoleContent[active] }>
              <div style={ { padding: 12 } }>
                { consoleContent[active] ? consoleContent[active] : null }
              </div>
            </Console>

            <Canvas isShifted={ !!consoleContent[active] }>
              <div style={ { padding: 12 } }>
                { canvasContent[active] || canvasContent[previousActive] }
              </div>
            </Canvas>

          </Platform>
        </div>

        <Snippet renderSkip={ true }>
          <Platform consoleWidth="26.25rem">
            <Dock>
              <DockItem active={ true } icon="ellipsis">DockItem</DockItem>
            </Dock>

            <Console isVisible={ true }>Console</Console>
            <Canvas isShifted={ true }>Canvas</Canvas>
          </Platform>
        </Snippet>

      </Example>
    );
  }
}
