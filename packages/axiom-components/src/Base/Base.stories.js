/* eslint-disable no-console */
import React, { useEffect, useRef } from "react";
import Base from "./Base";
import Paragraph from "../Typography/Paragraph";
import Card from "../Card/Card";
import CardContent from "../Card/CardContent";

export default {
  title: "Components/Base",
  component: Base,
};

export function Default() {
  return (
    <React.Fragment>
      <Base space="x5">
        By Default Base renders a blank div, this is not very useful
      </Base>
      <Base space="x5">
        However You can pass props into Base to apply styles.
      </Base>
      <Base space="x5">Here we use space to apply vertical margin.</Base>
      <Base space="x5">To create a stack of spaced out elements</Base>
    </React.Fragment>
  );
}

export function Component() {
  return (
    <Base Component="h2">
      You can use the Component prop to change what component or HTML element is
      rendered
    </Base>
  );
}

export function SpreadPropsToBase() {
  return <Paragraph textStrike>Strike Text</Paragraph>;
}

SpreadPropsToBase.story = {
  parameters: {
    docs: {
      storyDescription:
        "Internally nearly all components in Axiom render Base. This means you can pass Base properites via parent components and they will be spread into Base. In the example below Paragraph passes textStrike to Base",
    },
  },
};

export function Text() {
  return (
    <Paragraph textEmphasize textSize="large">
      Text styles
    </Paragraph>
  );
}

Text.story = {
  parameters: {
    docs: { storyDescription: "Base supports a number of text styles" },
  },
};

export function BaseRef() {
  const baseRef = useRef();

  useEffect(() => {
    if (baseRef.current) {
      console.log("ref", baseRef.current);
    }
  }, [baseRef]);

  return (
    <Card baseRef={baseRef} shade="shade-4">
      <CardContent>A Card</CardContent>
    </Card>
  );
}

BaseRef.story = {
  parameters: {
    docs: {
      storyDescription:
        "You can use BaseRef to get a reference to the underlying DOM element for each component.",
    },
  },
};
