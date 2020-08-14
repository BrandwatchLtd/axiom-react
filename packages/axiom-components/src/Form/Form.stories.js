import React, { useState } from "react";
import Form from "./Form";
import TextInput from "./TextInput";
import Button from "../Button/Button";
import AlertBar from "../AlertBar/AlertBar";
import Paragraph from "../Typography/Paragraph";

export function Default() {
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
        onChange={(event) => setValue(event.target.value)}
        required
        value={value}
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export function SimpleValidation() {
  const [validationError, setValidationError] = useState(null);
  const [inputText, setInputText] = useState("");

  const handleSubmit = (event, validationError) => {
    event.preventDefault();
    setValidationError(validationError);

    if (!validationError) {
      window.alert("No validation errors! Your form has been submitted.");
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      requiredError="Please complete all the required fields"
    >
      {validationError && (
        <AlertBar space="x1" type="error">
          {validationError}
        </AlertBar>
      )}

      <TextInput
        label="Email"
        placeholder="name@brandwatch.com"
        required
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
      />
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export function CustomValidation() {
  const [validationError, setValidationError] = useState(null);
  const [inputText, setInputText] = useState("");

  const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  const brandwatchRegex = /brandwatch/;

  const handleSubmit = (event, validationError) => {
    event.preventDefault();
    setValidationError(validationError);

    if (!validationError) {
      window.alert("No validation errors! Your form has been submitted.");
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      requiredError="Please complete all the required fields"
    >
      {validationError && (
        <AlertBar space="x1" type="error">
          {validationError}
        </AlertBar>
      )}

      <TextInput
        label="Email"
        placeholder="name@brandwatch.com"
        required
        error={(failedRegex) => {
          if (failedRegex.includes(emailRegex)) {
            return "Please enter a valid email address";
          }
          if (failedRegex.includes(brandwatchRegex)) {
            return "Please enter a Brandwatch email address";
          }
        }}
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
        patterns={[emailRegex, brandwatchRegex]}
      />
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
