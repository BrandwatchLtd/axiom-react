import React, { Component, useContext } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Base from "../Base/Base";
import MenuContext from "./MenuContext";

export default function MenuItem({ children, active, disabled, ...rest }) {
  const size = useContext(MenuContext);

  const classes = classnames("ax-menu__item", {
    "ax-menu__item--active": active,
    "ax-menu__item--disabled": disabled,
  });

  const textSize = {
    medium: "headtitle",
    large: "headline",
  }[size];

  return (
    <Base Component="li" className={classes} textSize={textSize} textStrong>
      <button {...rest} className="ax-menu__item-button" disabled={disabled}>
        {children}
      </button>
    </Base>
  );
}

MenuItem.propTypes = {
  /** Applies styling to indicate it is active */
  active: PropTypes.bool,
  /** Content inside the MenuItem */
  children: PropTypes.node,
  /** Applies styling to indicate it is disabled, and blocks interactions */
  disabled: PropTypes.bool,
};
