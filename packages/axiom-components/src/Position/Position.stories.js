import React, { useState } from "react";
import Position from "./Position";
import PositionTarget from "./PositionTarget";
import PositionSource from "./PositionSource";
import Context from "../Context/Context";
import ContextContent from "../Context/ContextContent";
import ContextMenu from "../Context/ContextMenu";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";
import IconButton from "../Icon/IconButton";
import ButtonGroup from "../Button/ButtonGroup";
import ButtonIcon from "../Button/ButtonIcon";
import Heading from "../Typography/Heading";
import Paragraph from "../Typography/Paragraph";
import Strong from "../Typography/Strong";
import Toggle from "../Toggle/Toggle";

import "./Position.stories.css";

export default {
  title: "Position",
  component: Position,
  subComponents: { PositionTarget, PositionSource },
};

export function Default(props) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <Toggle onToggle={() => setIsVisible((v) => !v)}>Show</Toggle>
      <Position isVisible={isVisible} position="bottom" showArrow {...props}>
        <PositionTarget>
          {isVisible ? (
            <Icon name="lock" size="2rem" />
          ) : (
            <Icon name="heart" size="2rem" />
          )}
        </PositionTarget>

        <PositionSource>
          <Context>
            <ContextMenu>
              <Heading textCenter textStrong>
                I'm sorry Dave, I'm afraid I can't do that
              </Heading>
            </ContextMenu>
          </Context>
        </PositionSource>
      </Position>
    </>
  );
}

export function PassModifiersToPopperJs(props) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <Toggle onToggle={() => setIsVisible((v) => !v)}>Show</Toggle>
      <Position isVisible={isVisible} position="bottom" showArrow {...props}>
        <PositionTarget>
          <IconButton name="question-mark" size="small" />
        </PositionTarget>

        <PositionSource>
          <Context width="496px">
            <ContextContent padding="none">
              <div className="call-to-action-tooltip__content">
                <div className="call-to-action-tooltip__content__image-container">
                  <Icon name="magnify-glass" size="3rem" textcolor="subtle" />
                </div>
                <div className="call-to-action-tooltip__content__text-container">
                  <Heading textSize="headtitle">
                    <Strong>New!</Strong> Brandwatch Feature
                  </Heading>
                  <Paragraph>
                    Brandwatch Feature is an instant engine. It collects data on
                    any topic.
                  </Paragraph>
                  <Paragraph>
                    Using powerful AI, Brandwatch Feature identifies the data
                    you are looking for.
                  </Paragraph>
                  <Paragraph>
                    And there’s no need for writing long, complex boolean. Just
                    start typing.
                  </Paragraph>
                  <ButtonGroup>
                    <Button>Got it</Button>
                    <Button variant="tertiary">
                      Find out more <ButtonIcon name="open" />
                    </Button>
                  </ButtonGroup>
                </div>
              </div>
            </ContextContent>
          </Context>
        </PositionSource>
      </Position>
    </>
  );
}

PassModifiersToPopperJs.args = {
  popperModifiers: [
    {
      name: "preventOverflow",
      options: {
        padding: 15,
      },
    },
    {
      name: "offset",
      options: {
        offset: [0, 60],
      },
    },
  ],
};

PassModifiersToPopperJs.parameters = {
  docs: {
    description: {
      story:
        "You can pass an array of Popper modifiers to Position which will be based to PopperJs see the [Popper docs](https://popper.js.org/docs/v2/modifiers/) for more details. Note: If you pass a modifier that Axiom is already setting you will overwrite Axiom's modifiers.",
    },
  },
};
