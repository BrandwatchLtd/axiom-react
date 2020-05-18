import React, { useState } from "react";
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";
import ButtonIcon from "./ButtonIcon";
import ProgressButton from "../Progress/ProgressButton";

export default {
  title: "Components/Button",
  component: Button,
  subcomponents: { ButtonGroup, ButtonIcon, ProgressButton },
};

export function Example(props) {
  return <Button {...props} />;
}

Example.story = { args: { children: "Button" } };

export function Variant() {
  return (
    <ButtonGroup space="x2">
      <Button size="small" variant="primary">
        Primary
      </Button>
      <Button size="small" variant="secondary">
        Secondary
      </Button>
      <Button size="small" variant="tertiary">
        Tertiary
      </Button>
      <Button size="small" variant="quaternary">
        Quaternary
      </Button>
    </ButtonGroup>
  );
}

export function Size() {
  return (
    <ButtonGroup>
      <Button size="small">small</Button>
      <Button size="medium">medium</Button>
      <Button size="large">large</Button>
    </ButtonGroup>
  );
}

export function Color() {
  return (
    <ButtonGroup>
      <Button color="accent">Accent</Button>
      <Button color="positive">Positive</Button>
      <Button color="negative">Negative</Button>
    </ButtonGroup>
  );
}

export function Shape() {
  return (
    <ButtonGroup>
      <Button shape="circle">
        <ButtonIcon name="refresh" />
      </Button>
      <Button shape="rectangle">►</Button>
      <Button shape="stadium">1000</Button>
    </ButtonGroup>
  );
}

export function Icon() {
  return (
    <ButtonGroup>
      <Button shape="circle" variant="secondary">
        <ButtonIcon name="twitter" />
      </Button>
      <Button shape="circle" variant="quaternary">
        <ButtonIcon name="cross" />
      </Button>
      <Button variant="primary">
        Search
        <ButtonIcon name="magnify-glass" />
      </Button>
    </ButtonGroup>
  );
}

export function State() {
  return (
    <ButtonGroup>
      <Button>Default</Button>
      <Button disabled>Disabled</Button>
      <Button active>Active</Button>
    </ButtonGroup>
  );
}

export function Progress() {
  const [isInProgress, setIsInProgress] = useState(true);

  return (
    <ProgressButton
      isInProgress={isInProgress}
      onClick={() => setIsInProgress((p) => !p)}
    >
      Submit
    </ProgressButton>
  );
}

export function Joined() {
  return (
    <ButtonGroup joined>
      <Button size="small" variant="primary">
        Submit
      </Button>
      <Button size="small" variant="secondary">
        Cancel
      </Button>
    </ButtonGroup>
  );
}

export function IconInButton() {
  return (
    <Button>
      <ButtonIcon name="twitter-mono" /> Authenticate
    </Button>
  );
}
IconInButton.story = {
  parameters: {
    docs: {
      storyDescription:
        "Mono Icons will fill with the color of their parent. This can be useful when the color needs to change to provide contrast to a parent like in this Button.",
    },
  },
};
