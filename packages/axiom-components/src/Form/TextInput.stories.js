/* eslint-disable no-console */
import React, { useEffect, useRef, useState } from "react";
import Candytar from "../Avatar/Candytar";
import TextInput from "./TextInput";
import TextInputIcon from "./TextInputIcon";
import TextInputIconWrapper from "./TextInputIconWrapper";
import TextInputButton from "./TextInputButton";
import InlineValidation from "../Validation/InlineValidation";

export default {
  title: "Form/TextInput",
  component: TextInput,
  subcomponents: { TextInputButton, TextInputIcon, TextInputIconWrapper },
};

export function Default(args) {
  return <TextInput {...args} />;
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
        "TextInput spreads the props it doesn't use to the underlying HTML Input element. For example here we pass an onKeyPress listener.",
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

export function WithCustomIcon() {
  return (
    <TextInput>
      <TextInputIconWrapper align="left">
        <Candytar size="1rem" color="tiny-clanger" />
      </TextInputIconWrapper>
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

export function WithTooltipIcon() {
  return (
    <TextInput invalid={true} value="ExistingUsername">
      <TextInputIcon
        align="right"
        iconColor="error"
        name="information-circle"
        tooltip="This username exists, please select a different one"
      />
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

export function WithRef() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.value = "Added with a ref";
  }, [inputRef.current]);

  return (
    <TextInput inputRef={inputRef} aria-label="Submit">
      <TextInputButton align="left" name="magnify-glass">
        Submit
      </TextInputButton>
    </TextInput>
  );
}
