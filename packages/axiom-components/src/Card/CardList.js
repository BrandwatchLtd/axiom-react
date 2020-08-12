import PropTypes from "prop-types";
import React from "react";
import classnames from "classnames";
import Base from "../Base/Base";

const cardListStyleProps = {
  divided: {
    border: false,
    shadow: false,
    space: "x0",
  },
  seamless: {
    border: false,
    shadow: false,
    space: "x0",
  },
  separate: {
    border: true,
    shadow: false,
    space: "x2",
  },
};

export default function CardList({
  children,
  className,
  style = "separate",
  ...rest
}) {
  const classes = classnames(
    "ax-card-list",
    `ax-card-list--${style}`,
    className
  );

  const mappedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        ...cardListStyleProps[style],
      });
    }
    return child;
  });

  return (
    <Base {...rest} className={classes}>
      {mappedChildren}
    </Base>
  );
}

CardList.propTypes = {
  /** Cards to be inserted in the CardList */
  children: PropTypes.node.isRequired,
  /** Class name to be appended to the element */
  className: PropTypes.string,
  /** Style of the list */
  style: PropTypes.oneOf(["divided", "seamless", "separate"]),
};
