import React, { useState } from "react";
import Dialog from "./Dialog";
import DialogHeader from "./DialogHeader";
import DialogBody from "./DialogBody";
import DialogFooter from "./DialogFooter";
import Button from "../Button/Button";
import ButtonGroup from "../Button/ButtonGroup";

export default {
  title: "Components/Dialog",
  component: Dialog,
};

export function Default() {
  const [isOpen, setIsOpen] = useState(false);

  const closeDialog = () => setIsOpen(false);
  const openDialog = () => setIsOpen(true);

  return (
    <React.Fragment>
      <Button onClick={openDialog}>Open Dialog</Button>
      <Dialog isOpen={isOpen} onRequestClose={closeDialog} size="large">
        <DialogHeader>Dialog Header</DialogHeader>
        <DialogBody>Dialog Body</DialogBody>
        <DialogFooter>
          <ButtonGroup textRight>
            <Button onClick={closeDialog}>Save</Button>
            <Button onClick={closeDialog} style="secondary">
              Close
            </Button>
          </ButtonGroup>
        </DialogFooter>
      </Dialog>
    </React.Fragment>
  );
}
