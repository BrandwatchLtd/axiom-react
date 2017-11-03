import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import Button from '../../button/Button';
import ButtonGroup from '../../button/ButtonGroup';
import ButtonIcon from '../../button/ButtonIcon';
import Context from '../../context/Context';
import Dialog from '../Dialog';
import DialogBody from '../DialogBody';
import DialogFooter from '../DialogFooter';
import DialogHeader from '../DialogHeader';
import Dropdown from '../../dropdown/Dropdown';
import DropdownContent from '../../dropdown/DropdownContent';
import DropdownMenu from '../../dropdown/DropdownMenu';
import DropdownMenuItem from '../../dropdown/DropdownMenuItem';
import DropdownTarget from '../../dropdown/DropdownTarget';
import Heading from '../../typography/Heading';
import List from '../../list/List';
import ListItem from '../../list/ListItem';
import Paragraph from '../../typography/Paragraph';

class DialogExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Dialog: PropTypes.object.isRequired,
      DialogBody: PropTypes.object.isRequired,
      DialogFooter: PropTypes.object.isRequired,
      DialogHeader: PropTypes.object.isRequired,
    }).isRequired,
  };

  render() {
    const { components } = this.props;

    const propTypes = {
      Dialog: components.Dialog,
      DialogBody: components.DialogBody,
      DialogFooter: components.DialogFooter,
      DialogHeader: components.DialogHeader,
    };

    const initialProps = {
      Dialog: {
        isOpen: false,
        onRequestClose: () => {},
        size: 'medium',
      },
    };

    const initialPropOptions = {
      Dialog: {
        onRequestClose: {
          callback: (setProp) => setProp('Dialog', 'isOpen', false),
        },
      },
    };

    return (
      <ExampleConfig
          hasVisual={ false }
          initialPropOptions={ initialPropOptions }
          initialProps={ initialProps }
          propTypes={ propTypes }>
        <Dialog { ...initialProps.Dialog }>
          <DialogHeader { ...initialProps.DialogHeader }>
            <Heading snippetReplace textSize="headtitle">Dialog Title</Heading>
          </DialogHeader>

          <DialogBody { ...initialProps.DialogBody }>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              accumsan imperdiet leo, eget fringilla tellus. Praesent turpis
              libero, maximus lobortis ex vel, feugiat feugiat sapien. Nam in
              velit orci. Donec dignissim rutrum tellus, vitae fermentum augue
              blandit vitae. Vestibulum egestas sapien a tortor placerat, ut
              blandit sapien rhoncus. Aliquam eleifend maximus velit, at euismod
              erat efficitur id. Sed mattis vehicula scelerisque. Ut justo nibh,
              dignissim id lacinia sit amet, fermentum a massa. Phasellus
              ullamcorper augue dolor, eu dapibus enim interdum non. Curabitur
              porttitor nibh a gravida aliquet. Maecenas eros nisi, pretium vel
              dui in, dictum convallis enim.
            </Paragraph>

            <ButtonGroup>
              <Dropdown>
                <DropdownTarget>
                  <Button style="secondary">
                    Dropdown
                    <ButtonIcon key="ButtonIcon" name="chevron-down" />
                  </Button>
                </DropdownTarget>
                <DropdownContent>
                  <Context>
                    <DropdownMenu>
                      <DropdownMenuItem>Lorem ipsum</DropdownMenuItem>
                      <DropdownMenuItem>Lorem ipsum</DropdownMenuItem>
                      <DropdownMenuItem>Lorem ipsum</DropdownMenuItem>
                      <DropdownMenuItem>Lorem ipsum</DropdownMenuItem>
                    </DropdownMenu>
                  </Context>
                </DropdownContent>
              </Dropdown>
            </ButtonGroup>
          </DialogBody>

          <DialogFooter { ...initialProps.DialogFooter } textRight>
            <List style="inline">
              <ListItem>
                <Button style="secondary">Secondary 1</Button>
              </ListItem>

              <ListItem>
                <ButtonGroup snippetReplace textRight>
                  <Button style="secondary">Secondary 2</Button>
                  <Button style="primary">Primary</Button>
                </ButtonGroup>
              </ListItem>
            </List>
          </DialogFooter>
        </Dialog>
      </ExampleConfig>
    );
  }
}

export default [ DialogExample ];
