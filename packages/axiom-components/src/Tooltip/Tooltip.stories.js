import React, { useRef } from "react";
import Tooltip from "./Tooltip";
import TooltipTarget from "./TooltipTarget";
import TooltipSource from "./TooltipSource";
import TooltipContext from "./TooltipContext";
import TooltipContent from "./TooltipContent";
import IconButton from "../Icon/IconButton";
import Button from "../Button/Button";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
  subcomponents: {
    TooltipTarget,
    TooltipSource,
    TooltipContent,
    TooltipContext,
  },
};

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
        style="secondary"
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
