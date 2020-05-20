import React from "react";
import Progress from "./Progress";
import ProgressFinite from "./ProgressFinite";
import ProgressInfinite from "./ProgressInfinite";

const SvgFilters = () => (
  <svg height="0" width="0" xmlns="http://www.w3.org/2000/svg">
    <linearGradient id="ax-progress-infinite__filter--subtle">
      <stop
        className="ax-progress-infinite__arc-gradient-stop--subtle"
        offset="0%"
      ></stop>
      <stop
        className="ax-progress-infinite__arc-gradient-stop--subtle"
        offset="50%"
      ></stop>
      <stop
        className="ax-progress-infinite__arc-gradient-stop--subtle"
        offset="90%"
      ></stop>
    </linearGradient>
    <linearGradient id="ax-progress-infinite__filter--white">
      <stop
        className="ax-progress-infinite__arc-gradient-stop--white"
        offset="0%"
      ></stop>
      <stop
        className="ax-progress-infinite__arc-gradient-stop--white"
        offset="50%"
      ></stop>
      <stop
        className="ax-progress-infinite__arc-gradient-stop--white"
        offset="90%"
      ></stop>
    </linearGradient>
  </svg>
);

export default {
  title: "Progress",
  component: Progress,
  subcomponents: { ProgressFinite, ProgressInfinite },
  decorators: [
    // eslint-disable-next-line react/display-name
    (storyFn) => (
      <React.Fragment>
        {storyFn()}
        <SvgFilters />
      </React.Fragment>
    ),
  ],
};

export function Default() {
  return (
    <React.Fragment>
      <Progress complete />
      <ProgressFinite percent={50} />
      <ProgressInfinite />
    </React.Fragment>
  );
}

export function Complete() {
  return <Progress complete />;
}

export function Percent() {
  return <ProgressFinite percent={50} />;
}

export function Infinite() {
  return <ProgressInfinite />;
}
