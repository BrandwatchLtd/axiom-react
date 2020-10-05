import React, { useContext } from "react";
import PropTypes from "prop-types";
import DropdownMenuItem from "../Dropdown/DropdownMenuItem";
import SelectContext from "./SelectContext";

export default function SelectOption({ children, onClick, value, ...rest }) {
  const { selectedOptionValue, handleSelectOption } = useContext(SelectContext);

  const handleClick = (event) => {
    handleSelectOption(value);
    if (onClick) onClick(event);
  };

  const selected =
    (Array.isArray(selectedOptionValue) &&
      selectedOptionValue.indexOf(value) !== -1) ||
    value === selectedOptionValue;

  return (
    <DropdownMenuItem {...rest} onClick={handleClick} selected={selected}>
      {children}
    </DropdownMenuItem>
  );
}

SelectOption.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  value: PropTypes.any.isRequired,
};
