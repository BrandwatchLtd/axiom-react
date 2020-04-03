import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  ButtonGroup,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Heading,
} from "@brandwatch/axiom-components";
import Editor from "./Editor";

export default class TypeArrayOf extends Component {
  static propTypes = {
    setValue: PropTypes.func.isRequired,
    value: PropTypes.array,
  };

  static defaultProps = {
    value: [],
  };

  constructor(props) {
    super(props);
    this.state = {
      content: JSON.stringify(props.value, null, 2),
      isOpen: false,
    };
  }

  open() {
    this.setState({ isOpen: true });
  }

  close() {
    this.setState({ isOpen: false });
  }

  update() {
    const { setValue } = this.props;
    const { content } = this.state;

    this.close();

    if (content) {
      try {
        setValue(JSON.parse(content));
      } catch (e) {
        /* eslint-disable no-console */
        console.error(e);
        /* eslint-enable no-console */
      }
    }
  }

  render() {
    const { content, isOpen } = this.state;

    return [
      <ButtonGroup key="button">
        <Button onClick={() => this.open()} size="small" style="secondary">
          Open Editor
        </Button>
      </ButtonGroup>,
      <Dialog
        contentLabel="Editor"
        isOpen={isOpen}
        key="dialog"
        onRequestClose={() => this.close()}
        size="medium"
      >
        <DialogHeader>
          <Heading textSize="headtitle">Editor</Heading>
        </DialogHeader>

        <DialogBody>
          <Editor
            initialValue={content}
            onChange={({ content }) => this.setState({ content })}
          />
        </DialogBody>

        <DialogFooter>
          <ButtonGroup textRight>
            <Button onClick={() => this.close()} style="secondary">
              Cancel
            </Button>

            <Button onClick={() => this.update()}>Update</Button>
          </ButtonGroup>
        </DialogFooter>
      </Dialog>,
    ];
  }
}
