import React, { useState } from "react";
import Dialog from "./Dialog";
import DialogHeader from "./DialogHeader";
import DialogBody from "./DialogBody";
import DialogFooter from "./DialogFooter";
import Button from "../Button/Button";
import ButtonGroup from "../Button/ButtonGroup";
import Heading from "../Typography/Heading";

export default {
  title: "Components/Dialog",
  component: Dialog,
  subcomponents: { DialogHeader, DialogBody, DialogFooter },
};

export function Default() {
  const [isOpen, setIsOpen] = useState(false);

  const closeDialog = () => setIsOpen(false);
  const openDialog = () => setIsOpen(true);

  return (
    <React.Fragment>
      <Button onClick={openDialog}>Open Dialog</Button>
      <Dialog
        isOpen={isOpen}
        onRequestClose={closeDialog}
        shouldCloseOnEsc
        width="380px"
      >
        <DialogHeader>
          <Heading textSize="headtitle">Create New Report</Heading>
        </DialogHeader>
        <DialogBody>
          You will be redirected to the Report Builder. All your data will be
          automatically saved.
        </DialogBody>
        <DialogFooter>
          <ButtonGroup textRight>
            <Button onClick={closeDialog} variant="secondary">
              Cancel
            </Button>
            <Button onClick={closeDialog}>Continue</Button>
          </ButtonGroup>
        </DialogFooter>
      </Dialog>
    </React.Fragment>
  );
}
