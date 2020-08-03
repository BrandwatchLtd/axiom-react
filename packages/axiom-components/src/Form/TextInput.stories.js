/* eslint-disable no-console */
import React, { useEffect, useRef, useState } from "react";
import TextInput from "./TextInput";
import TextInputIcon from "./TextInputIcon";
import TextInputButton from "./TextInputButton";
import InlineValidation from "../Validation/InlineValidation";

export default {
  title: "Form/TextInput",
  component: TextInput,
  subcomponents: { TextInputButton, TextInputIcon },
};

export function Default() {
  return <TextInput />;
}

export function OnChange() {
  return <TextInput onChange={(event) => console.log(event.target.value)} />;
}

export function InputEvents() {
  const handleOnKeyPress = (event) => console.log(event.key);

  return <TextInput onKeyPress={handleOnKeyPress} />;
}

InputEvents.parameters = {
  docs: {
    description: {
      story:
        "TextInput spreads the props it doesnt use to the underlying HTML Input element. For example here we pass an onKeyPress listener.",
    },
  },
};

export function WithLabel() {
  return <TextInput label="A label" />;
}

export function WithInlineLabel() {
  return <TextInput inlineLabel label="A label" />;
}

export function WithIcon() {
  return (
    <TextInput aria-label="Search">
      <TextInputIcon align="left" name="magnify-glass" />
    </TextInput>
  );
}

export function WithButton() {
  return (
    <TextInput aria-label="Submit">
      <TextInputButton align="left" name="magnify-glass">
        Submit
      </TextInputButton>
    </TextInput>
  );
}

export function WithValidation() {
  const [message, setMessage] = useState(null);
  const [value, setValue] = useState(null);

  return (
    <InlineValidation message={message}>
      <TextInput
        value={value}
        onChange={({ target }) => {
          const newValue = target.value;
          const nonNumeric = /[^0-9]/;

          if (nonNumeric.test(newValue)) return setMessage("Numbers only");

          setMessage(null);
          setValue(target.value);
        }}
        placeholder="Numbers only"
      />
    </InlineValidation>
  );
}

WithValidation.parameters = {
  docs: {
    description: {
      story:
        "To show inline validation message you can wrap your component with InlineValidation and pass the message you want to show or null if there is no error. See the example below or check out this [sandbox](https://codesandbox.io/s/axiom-form-validation-r9g9n?file=/src/index.js).",
    },
  },
};

export function WithRef() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current?.focus();
  }, [inputRef.current]);

  return (
    <TextInput inputRef={inputRef} aria-label="Submit">
      <TextInputButton align="left" name="magnify-glass">
        Submit
      </TextInputButton>
    </TextInput>
  );
}
