import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { CodeSnippet, Example, ExampleConfig } from 'style-guide';
import Heading from '../../typography/Heading';
import Paragraph from '../../typography/Paragraph';
import Strong from '../../typography/Strong';

class ValidateExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Validate: PropTypes.object,
      Validation: PropTypes.object,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const propTypes = {
      Validate: components.Validate,
      Validation: components.Validation,
    };

    return [
      <Example key="example">
        <Paragraph>
          The validation components are here to provide a consistent approach to
          form validation. They work using React's render callback pattern
          (functions as children), that are provided with information of singular
          input validity and the overal validity of the form.
        </Paragraph>

        <Paragraph>
          The pattern set out is to provide clear and not overwheling feedback
          to the user around invalid inputs. To acheive this, feedback of the
          overall validity of a form is performed on submit, and individual
          validation is run inline on the first invalid input only.
        </Paragraph>

        <Heading space="x4"><Strong>Validation example</Strong></Heading>

        <CodeSnippet language="js">{`
const handleClick = (validate) => {
  const validationError = validate();

  this.setState({ validationError });

  if (!validationError) {
    console.log('Submit!');
  }
};`}
        </CodeSnippet>

        <CodeSnippet language="jsx">{`
const { validationError } = this.state;

<Validation requiredError="All fields must be filled in!">
  { (validate) => (
    <Validate required value="somevalue">
      { (isValid) => isValid === true }
    </Validate>

    <Validate
        error={ () => 'Needs a capital letter!' }
        patterns={ [/^.*[A-Z].*$/] }
        required
        value="somevalue">
      { (isValid) => isValid === false }
    </Validate>

    { validationError }

    <Button onClick={ () => handleClick(validate) }>
      Validate
    </Button>
  ) }
</Validation>`}
        </CodeSnippet>
      </Example>,

      <ExampleConfig
          hasCode={ false }
          hasVisual={ false }
          key="props"
          propTypes={ propTypes } />,
    ];
  }
}

export default [ ValidateExample ];
