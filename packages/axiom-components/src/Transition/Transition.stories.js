/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Transition from "./Transition";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import "./Transition.stories.css";

export default {
  title: "Transition",
  component: Transition,
  decorators: [(storyFn) => <WrapperComponet storyFn={storyFn} />],
};

function WrapperComponet({ storyFn }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      {storyFn({ activeIndex })}
      <div className="controls-wrapper">
        <Button
          disabled={activeIndex === 0}
          onClick={() => setActiveIndex((i) => i - 1)}
          shape="circle"
          size="small"
          variant="secondary"
        >
          <Icon name="chevron-left" />
        </Button>

        <Button
          disabled={activeIndex === 4}
          onClick={() => setActiveIndex((i) => i + 1)}
          shape="circle"
          size="small"
          variant="secondary"
        >
          <Icon name="chevron-right" />
        </Button>
      </div>
    </div>
  );
}

function ColorBox({ color }) {
  return (
    <div
      style={{
        height: "50px",
        backgroundColor: `var(--color-product-${color})`,
      }}
    />
  );
}

export function Default(props, { activeIndex }) {
  return (
    <Transition activeIndex={activeIndex} height="50px" width="150px">
      <ColorBox color="paradise-lost" />
      <ColorBox color="moon-lagoon" />
      <ColorBox color="forbidden-planet" />
      <ColorBox color="sun-maker" />
      <ColorBox color="future-shock" />
    </Transition>
  );
}
