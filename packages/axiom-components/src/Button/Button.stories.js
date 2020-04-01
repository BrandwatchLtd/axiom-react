import React, { useState } from "react";
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";
import ButtonIcon from "./ButtonIcon";
import ProgressButton from "../Progress/ProgressButton";

export default {
  title: "Components / Button",
  component: Button,
  subcomponents: { ButtonGroup, ButtonIcon, ProgressButton },
};

export function Style() {
  return (
    <ButtonGroup space="x2">
      <Button size="small" style="primary">
        Primary
      </Button>
      <Button size="small" style="secondary">
        Secondary
      </Button>
      <Button size="small" style="tertiary">
        Tertiary
      </Button>
      <Button size="small" style="quaternary">
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
      <Button shape="circle" style="secondary">
        <ButtonIcon name="twitter" />
      </Button>
      <Button shape="circle" style="quaternary">
        <ButtonIcon name="cross" />
      </Button>
      <Button style="primary">
        Search
        <ButtonIcon name="magnify-glass" />
      </Button>
    </ButtonGroup>
  );
}

export function Disabled() {
  return <Button disabled>Disabled</Button>;
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
      <Button size="small" style="primary">
        Submit
      </Button>
      <Button size="small" style="secondary">
        Cancel
      </Button>
    </ButtonGroup>
  );
}
