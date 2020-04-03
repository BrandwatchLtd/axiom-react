import React, { Component } from "react";
import {
  Button,
  ButtonGroup,
  ButtonIcon,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Dropdown,
  DropdownContext,
  DropdownMenu,
  DropdownMenuItem,
  DropdownSource,
  DropdownTarget,
  Heading,
  List,
  ListItem,
  Paragraph,
} from "@brandwatch/axiom-components";
import {
  DocumentationApi,
  DocumentationContent,
  DocumentationShowCase,
} from "@brandwatch/axiom-documentation-viewer";

export default class Documentation extends Component {
  render() {
    return (
      <DocumentationContent>
        <DocumentationShowCase hidePreview>
          <Dialog
            isOpen
            onRequestClose={(setValue) => setValue("Dialog", "isOpen", false)}
          >
            <DialogHeader>
              <Heading textSize="headtitle">Dialog Title</Heading>
            </DialogHeader>

            <DialogBody>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                accumsan imperdiet leo, eget fringilla tellus. Praesent turpis
                libero, maximus lobortis ex vel, feugiat feugiat sapien. Nam in
                velit orci. Donec dignissim rutrum tellus, vitae fermentum augue
                blandit vitae. Vestibulum egestas sapien a tortor placerat, ut
                blandit sapien rhoncus. Aliquam eleifend maximus velit, at
                euismod erat efficitur id. Sed mattis vehicula scelerisque. Ut
                justo nibh, dignissim id lacinia sit amet, fermentum a massa.
                Phasellus ullamcorper augue dolor, eu dapibus enim interdum non.
                Curabitur porttitor nibh a gravida aliquet. Maecenas eros nisi,
                pretium vel dui in, dictum convallis enim.
              </Paragraph>

              <ButtonGroup>
                <Dropdown flip="mirror">
                  <DropdownTarget>
                    <Button style="secondary">
                      Dropdown
                      <ButtonIcon key="ButtonIcon" name="chevron-down" />
                    </Button>
                  </DropdownTarget>
                  <DropdownSource>
                    <DropdownContext>
                      <DropdownMenu>
                        <DropdownMenuItem>Lorem ipsum</DropdownMenuItem>
                        <DropdownMenuItem>Lorem ipsum</DropdownMenuItem>
                        <DropdownMenuItem>Lorem ipsum</DropdownMenuItem>
                      </DropdownMenu>
                    </DropdownContext>
                  </DropdownSource>
                </Dropdown>
              </ButtonGroup>
            </DialogBody>

            <DialogFooter textRight>
              <List style="inline">
                <ListItem>
                  <Button style="secondary">Secondary 1</Button>
                </ListItem>

                <ListItem>
                  <ButtonGroup textRight>
                    <Button style="secondary">Secondary 2</Button>
                    <Button style="primary">Primary</Button>
                  </ButtonGroup>
                </ListItem>
              </List>
            </DialogFooter>
          </Dialog>
        </DocumentationShowCase>

        <DocumentationApi
          components={[
            require("!!axiom-documentation-loader!@brandwatch/axiom-components/src/Dialog/Dialog"),
            require("!!axiom-documentation-loader!@brandwatch/axiom-components/src/Dialog/DialogBody"),
            require("!!axiom-documentation-loader!@brandwatch/axiom-components/src/Dialog/DialogFooter"),
            require("!!axiom-documentation-loader!@brandwatch/axiom-components/src/Dialog/DialogHeader"),
          ]}
        />
      </DocumentationContent>
    );
  }
}
