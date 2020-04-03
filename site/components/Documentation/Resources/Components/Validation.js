import React, { Component } from "react";
import {
  AlertBar,
  Button,
  Form,
  TextInput,
} from "@brandwatch/axiom-components";
import {
  DocumentationApi,
  DocumentationShowCase,
  DocumentationContent,
} from "@brandwatch/axiom-documentation-viewer";

export default class Documentation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
      input1: "",
      input2: "",
      input3: "",
    };
  }

  handleSubmit(event, error) {
    event.preventDefault();
    this.setState({ error });
  }

  render() {
    return (
      <DocumentationContent
        description="The validation components are here to provide a consistent approach to
            form validation. They work using React's render callback pattern
            (functions as children), that are provided with information of singular
            input validity and the overal validity of the form."
      >
        <DocumentationShowCase
          description="The pattern set out is to provide clear and not overwhelming feedback
              to the user around invalid inputs. To acheive this, feedback of the
              overall validity of a form is performed on submit, and individual
              validation is run inline on the first invalid input only."
        >
          <Form
            onSubmit={(event, error) => this.handleSubmit(event, error)}
            requiredError="Oops, some required fields are still missing"
          >
            {this.state.error && (
              <AlertBar type="error">{this.state.error}</AlertBar>
            )}

            <TextInput
              error={() => "The first inputs needs a number"}
              onChange={(event) =>
                this.setState({ input1: event.target.value })
              }
              patterns={[/^.*[0-9].*$/]}
              placeholder="1 numeric character"
              required
              value={this.state.input1}
            />
            <TextInput
              onChange={(event) =>
                this.setState({ input2: event.target.value })
              }
              placeholder="Required"
              required
              value={this.state.input2}
            />
            <TextInput
              error={() => 'The second inputs has to be "Brandwatch"'}
              onChange={(event) =>
                this.setState({ input3: event.target.value })
              }
              patterns={[() => this.state.input3 === "Brandwatch"]}
              placeholder="Must match 'Brandwatch'"
              value={this.state.input3}
            />

            <Button type="submit">Submit (and run validation)</Button>
          </Form>
        </DocumentationShowCase>

        <DocumentationApi
          components={[
            require("!!axiom-documentation-loader!@brandwatch/axiom-components/src/Validation/Validation"),
            require("!!axiom-documentation-loader!@brandwatch/axiom-components/src/Validation/Validate"),
          ]}
        />
      </DocumentationContent>
    );
  }
}
