import React, { useState } from "react";
import Position from "./Position";
import PositionTarget from "./PositionTarget";
import PositionSource from "./PositionSource";
import Context from "../Context/Context";
import ContextMenu from "../Context/ContextMenu";
import Icon from "../Icon/Icon";
import Heading from "../Typography/Heading";
import Toggle from "../Toggle/Toggle";

export default {
  title: "Components/Position",
  component: Position,
  subComponents: { PositionTarget, PositionSource },
};

export function Default() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <Toggle onToggle={() => setIsVisible((v) => !v)}>Show</Toggle>
      <Position isVisible={isVisible} position="bottom" showArrow>
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
    </div>
  );
}
