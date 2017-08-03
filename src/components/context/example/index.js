import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import {
  Context,
  ContextBox,
  ContextMenu,
  ContextMenuItem,
  ContextTip,
  DropdownMenu,
  DropdownMenuItem,
  Heading,
  Paragraph,
  TextInput,
} from 'bw-axiom';

class ContextExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Context: PropTypes.object.isRequired,
      ContextBox: PropTypes.object.isRequired,
      ContextMenu: PropTypes.object.isRequired,
      ContextMenuItem: PropTypes.object.isRequired,
      ContextTip: PropTypes.object.isRequired,
    }).isRequired,
  };

  render() {
    const { components } = this.props;

    const propTypes = {
      Context: components.Context,
      ContextBox: components.ContextBox,
      ContextMenu: components.ContextMenu,
      ContextMenuItem: components.ContextMenuItem,
      ContextTip: components.ContextTip,
    };

    const initialProps = {
      Context: {},
      ContextBox: {},
      ContextMenu: {},
      ContextMenuItem: {
        onClick: () => {},
      },
      ContextTip: {},
    };

    const initialPropOptions = {
      Context: {
        children: {
          options: [{
            name: 'ContextBox',
            children: (
              <ContextBox>
                <Heading textSize="headtitle">Lorem Ipsum</Heading>
                <Paragraph>
                  Quisque id hendrerit dolor. In congue vulputate mi, et
                  accumsan magna tristique id.
                </Paragraph>
              </ContextBox>
            ),
          }, {
            name: 'ContextMenu',
            children: (
              <ContextMenu>
                <ContextMenuItem>Lorem ipsum dolar</ContextMenuItem>
                <ContextMenuItem>Lorem ipsum dolar</ContextMenuItem>
                <ContextMenuItem>Lorem ipsum dolar</ContextMenuItem>
                <ContextMenuItem>Lorem ipsum dolar</ContextMenuItem>
                <ContextMenuItem>Lorem ipsum dolar</ContextMenuItem>
              </ContextMenu>
            ),
          }, {
            name: 'ContextTip',
            children: (
              <ContextTip>
                <Paragraph>
                  Quisque id hendrerit dolor. In congue vulputate mi, et
                  accumsan magna tristique id.
                </Paragraph>
              </ContextTip>
            ),
          }, {
            name: 'Multiple',
            children: [
              <ContextMenu>
                <ContextMenuItem>Lorem ipsum dolar</ContextMenuItem>
              </ContextMenu>,
              <ContextMenu>
                <ContextMenuItem disabled={ true }>Lorem ipsum dolar</ContextMenuItem>
                <ContextMenuItem selected={ true }>Lorem ipsum dolar</ContextMenuItem>
              </ContextMenu>,
              <ContextBox>
                <Paragraph>Quisque id hendrerit dolor.</Paragraph>
              </ContextBox>,
            ],
          }, {
            name: 'Multiple with Scroll',
            children: [
              <ContextBox>
                <Heading>Lorem ipsum dolar</Heading>
                <TextInput value="" />
              </ContextBox>,
              <DropdownMenu maxHeight="9rem">
                <DropdownMenuItem>Lorem ipsum dolar</DropdownMenuItem>
                <DropdownMenuItem>Lorem ipsum dolar</DropdownMenuItem>
                <DropdownMenuItem>Lorem ipsum dolar</DropdownMenuItem>
                <DropdownMenuItem>Lorem ipsum dolar</DropdownMenuItem>
                <DropdownMenuItem>Lorem ipsum dolar</DropdownMenuItem>
                <DropdownMenuItem>Lorem ipsum dolar</DropdownMenuItem>
              </DropdownMenu>,
            ],
          }],
        },
      },
    };

    return (
      <ExampleConfig
          initialPropOptions={ initialPropOptions }
          initialProps={ initialProps }
          propTypes={ propTypes }>
        <Context { ...initialProps.Context }>
          { initialPropOptions.Context.children.options[0].children }
        </Context>
      </ExampleConfig>
    );
  }
}

module.exports = [ ContextExample ];
