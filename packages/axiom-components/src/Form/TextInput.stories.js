/* eslint-disable no-console */
import React, { useEffect, useRef } from "react";
import TextInput from "./TextInput";
import TextInputIcon from "./TextInputIcon";
import TextInputButton from "./TextInputButton";

export default {
  title: "Components/TextInput",
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

InputEvents.story = {
  parameters: {
    docs: {
      storyDescription:
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
    <TextInput>
      <TextInputIcon align="left" name="magnify-glass" />
    </TextInput>
  );
}

export function WithButton() {
  return (
    <TextInput>
      <TextInputButton align="left" name="magnify-glass">
        Submit
      </TextInputButton>
    </TextInput>
  );
}

export function WithRef() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current?.focus();
  }, [inputRef.current]);

  return (
    <TextInput inputRef={inputRef}>
      <TextInputButton align="left" name="magnify-glass">
        Submit
      </TextInputButton>
    </TextInput>
  );
}
