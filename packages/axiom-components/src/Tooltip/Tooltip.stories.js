import React, { useRef } from "react";
import Tooltip from "./Tooltip";
import TooltipTarget from "./TooltipTarget";
import TooltipSource from "./TooltipSource";
import TooltipContext from "./TooltipContext";
import TooltipContent from "./TooltipContent";
import IconButton from "../Icon/IconButton";
import Button from "../Button/Button";
import Heading from "../Typography/Heading";
import Paragraph from "../Typography/Paragraph";

export default {
  title: "Tooltip",
  component: Tooltip,
  subcomponents: {
    TooltipTarget,
    TooltipSource,
    TooltipContent,
    TooltipContext,
  },
};

export function Simple() {
  return (
    <Tooltip
      content="50%"
      target={<IconButton name="question-mark" size="small" />}
    />
  );
}

export function SimpleComplexContent() {
  const content = () => (
    <>
      <Heading textSize="headtitle">New! Brandwatch Feature</Heading>
      <Paragraph>
        Brandwatch Feature is an instant engine. It collects data on any topic.
      </Paragraph>
    </>
  );

  return (
    <Tooltip
      content={content()}
      target={<IconButton name="question-mark" size="small" />}
    />
  );
}

export function ContextColor() {
  return (
    <Tooltip position="bottom">
      <TooltipTarget>
        <IconButton name="question-mark" size="small" />
      </TooltipTarget>

      <TooltipSource>
        <TooltipContext color="info">
          <TooltipContent>50%</TooltipContent>
        </TooltipContext>
      </TooltipSource>
    </Tooltip>
  );
}

export function ContextWidth() {
  return (
    <Tooltip position="bottom">
      <TooltipTarget>
        <IconButton name="question-mark" size="small" />
      </TooltipTarget>

      <TooltipSource>
        <TooltipContext width="auto">
          <TooltipContent>50%</TooltipContent>
        </TooltipContext>
      </TooltipSource>
    </Tooltip>
  );
}

export function ContextMaxHeight() {
  return (
    <Tooltip position="bottom">
      <TooltipTarget>
        <IconButton name="question-mark" size="small" />
      </TooltipTarget>

      <TooltipSource>
        <TooltipContext maxHeight="99px">
          <TooltipContent>
            <div style={{ height: "300px" }}>a</div>
            <div>z</div>
          </TooltipContent>
        </TooltipContext>
      </TooltipSource>
    </Tooltip>
  );
}

export function ContentTextSize() {
  return (
    <Tooltip position="bottom">
      <TooltipTarget>
        <IconButton name="question-mark" size="small" />
      </TooltipTarget>

      <TooltipSource>
        <TooltipContext>
          <TooltipContent size="tiny">50%</TooltipContent>
        </TooltipContext>
      </TooltipSource>
    </Tooltip>
  );
}

export function ContentSize() {
  return (
    <Tooltip position="bottom">
      <TooltipTarget>
        <IconButton name="question-mark" size="small" />
      </TooltipTarget>

      <TooltipSource>
        <TooltipContext>
          <TooltipContent size="small">50%</TooltipContent>
        </TooltipContext>
      </TooltipSource>
    </Tooltip>
  );
}

export function Default() {
  return (
    <Tooltip position="bottom">
      <TooltipTarget>
        <IconButton name="question-mark" size="small" />
      </TooltipTarget>

      <TooltipSource width="auto">
        <TooltipContext>
          <TooltipContent size="tiny">50%</TooltipContent>
        </TooltipContext>
      </TooltipSource>
    </Tooltip>
  );
}

export function Disabled() {
  return (
    <Tooltip enabled={false} position="bottom">
      <TooltipTarget>
        <IconButton name="question-mark" size="small" disabled />
      </TooltipTarget>

      <TooltipSource width="auto">
        <TooltipContext>
          <TooltipContent size="tiny">50%</TooltipContent>
        </TooltipContext>
      </TooltipSource>
    </Tooltip>
  );
}

export function DisabledSimple() {
  return (
    <Tooltip
      enabled={false}
      position="bottom"
      content="50%"
      target={<IconButton name="question-mark" size="small" disabled />}
    />
  );
}

export function Delay() {
  return (
    <Tooltip delay position="bottom">
      <TooltipTarget>
        <IconButton name="question-mark" size="small" />
      </TooltipTarget>

      <TooltipSource width="auto">
        <TooltipContext>
          <TooltipContent size="tiny">50%</TooltipContent>
        </TooltipContext>
      </TooltipSource>
    </Tooltip>
  );
}

export function WithRef() {
  const ref = useRef();

  return (
    <React.Fragment>
      <Button
        onClick={() => {
          ref.current.showTooltip();
        }}
      >
        Open
      </Button>
      <Button
        onClick={() => {
          ref.current.hideTooltip();
        }}
        variant="secondary"
      >
        Close
      </Button>
      <Tooltip position="bottom" ref={ref}>
        <TooltipTarget>
          <IconButton name="question-mark" size="small" />
        </TooltipTarget>

        <TooltipSource width="auto">
          <TooltipContext>
            <TooltipContent size="tiny">50%</TooltipContent>
          </TooltipContext>
        </TooltipSource>
      </Tooltip>
    </React.Fragment>
  );
}
