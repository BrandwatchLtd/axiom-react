import React, { Component } from "react";
import {
  ConfirmPasswordInput,
  CurrentPasswordInput,
  NewPasswordInput,
} from "@brandwatch/axiom-composites";
import { Form, Paragraph } from "@brandwatch/axiom-components";
import {
  DocumentationApi,
  DocumentationContent,
  DocumentationShowCase,
} from "@brandwatch/axiom-documentation-viewer";

export default class Documentation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmPassword: "",
      confirmError: "",
      currentPassword: "",
      currentError: "",
      newPassword: "",
      newError: "",
    };
  }

  render() {
    const {
      confirmPassword,
      confirmError,
      currentPassword,
      currentError,
      newPassword,
      newError,
    } = this.state;

    return (
      <DocumentationContent>
        <DocumentationShowCase>
          <Form
            onSubmit={(event, error) => {
              event.preventDefault();
              this.setState({ confirmError: error });
            }}
            requiredError="Password field is required"
          >
            <ConfirmPasswordInput
              onChange={(event) =>
                this.setState({ confirmPassword: event.target.value })
              }
              passwordValue="Password1"
              value={confirmPassword}
            />
            {confirmError && (
              <Paragraph textColor="error">{confirmError}</Paragraph>
            )}
          </Form>
        </DocumentationShowCase>

        <DocumentationApi
          components={[
            require("!!axiom-documentation-loader!@brandwatch/axiom-composites/src/FormInputs/ConfirmPasswordInput"),
          ]}
        />

        <DocumentationShowCase>
          <Form
            onSubmit={(event, error) => {
              event.preventDefault();
              this.setState({ currentError: error });
            }}
            requiredError="Password field is required"
          >
            <CurrentPasswordInput
              invalid={false}
              onChange={(event) =>
                this.setState({ currentPassword: event.target.value })
              }
              value={currentPassword}
            />
            {currentError && (
              <Paragraph textColor="error">{currentError}</Paragraph>
            )}
          </Form>
        </DocumentationShowCase>

        <DocumentationApi
          components={[
            require("!!axiom-documentation-loader!@brandwatch/axiom-composites/src/FormInputs/CurrentPasswordInput"),
          ]}
        />

        <DocumentationShowCase>
          <Form
            onSubmit={(event, error) => {
              event.preventDefault();
              this.setState({ newError: error });
            }}
            requiredError="Password field is required"
          >
            <NewPasswordInput
              onChange={(event) =>
                this.setState({ newPassword: event.target.value })
              }
              value={newPassword}
            />
            {newError && <Paragraph textColor="error">{newError}</Paragraph>}
          </Form>
        </DocumentationShowCase>

        <DocumentationApi
          components={[
            require("!!axiom-documentation-loader!@brandwatch/axiom-composites/src/FormInputs/NewPasswordInput"),
          ]}
        />
      </DocumentationContent>
    );
  }
}
