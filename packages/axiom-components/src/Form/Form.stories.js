import React, { useState } from 'react';
import Form from './Form';
import TextInput from './TextInput';
import Button from '../Button/Button';
import AlertBar from '../AlertBar/AlertBar';
import Paragraph from '../Typography/Paragraph';

export default {
  title: 'Components/Form',
  component: Form,
};

export function Default() {
  const [value, setValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = (event, error) => {
    event.preventDefault();
    if (error) setErrorMessage(error);
  };

  return (
    <Form
      onSubmit={onSubmit}
      requiredError="Please complete all required fields"
    >
      {errorMessage && (
        <AlertBar type="error">
          <Paragraph>{errorMessage}</Paragraph>
        </AlertBar>
      )}
      <TextInput
        onChange={event => setValue(event.target.value)}
        required
        value={value}
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
}
