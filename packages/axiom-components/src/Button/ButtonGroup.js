import PropTypes from "prop-types";
import React from "react";
import Base from "../Base/Base";
import InlineGroup from "../InlineGroup/InlineGroup";

export default function ButtonGroup({ children, joined, ...rest }) {
  const mappedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        joined,
      });
    }
    return child;
  });

  return (
    <Base
      space="x6"
      {...rest}
      Component={joined ? "div" : InlineGroup}
      className="ax-button-group"
      textBreak={joined ? "none" : null}
    >
      {mappedChildren}
    </Base>
  );
}

ButtonGroup.propTypes = {
  /** Content inserted into the group, ideally Buttons */
  children: PropTypes.node.isRequired,
  /** Whether the child Buttons should be joined */
  joined: PropTypes.bool,
};
