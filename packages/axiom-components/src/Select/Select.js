import React, { useState, useEffect } from "react";
import useResizeObserver from "use-resize-observer";
import PropTypes from "prop-types";
import Dropdown from "../Dropdown/Dropdown";
import DropdownSource from "../Dropdown/DropdownSource";
import DropdownTarget from "../Dropdown/DropdownTarget";
import DropdownContext from "../Dropdown/DropdownContext";
import DropdownMenu from "../Dropdown/DropdownMenu";
import DropdownMenuItem from "../Dropdown/DropdownMenuItem";
import TextInput from "../Form/TextInput";
import TextInputIcon from "../Form/TextInputIcon";

function Select({
  options,
  label,
  selectedValue,
  onChange,
  placeholder,
  ...rest
}) {
  const [dropdownMenuRef, setDropdownMenuRef] = useState(null);
  const [dropdownSourceWidth, setDropdownSourceWidth] = useState();

  const { ref: dropdownTargetRef } = useResizeObserver({
    onResize: ({ width }) => {
      setDropdownSourceWidth(`${width}px`);
    },
  });

  useEffect(() => {
    if (!dropdownMenuRef) return;

    const selectedItem = dropdownMenuRef?.querySelector(
      ".ax-context-menu__item--selected"
    );
    selectedItem?.focus({ preventScroll: true });
    selectedItem?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [dropdownMenuRef]);

  return (
    <Dropdown {...rest}>
      <DropdownTarget baseRef={dropdownTargetRef}>
        <TextInput
          isTarget
          onChange={() => {}}
          placeholder={placeholder}
          value={selectedValue}
          label={label}
        >
          <TextInputIcon name="chevron-down" />
        </TextInput>
      </DropdownTarget>
      <DropdownSource>
        <DropdownContext width={dropdownSourceWidth}>
          <DropdownMenu
            baseRef={(ele) => {
              setDropdownMenuRef(ele);
            }}
          >
            {options.map((item) => (
              <DropdownMenuItem
                key={item.id}
                onClick={() => onChange(item.value)}
                selected={selectedValue === item.value}
              >
                {item.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenu>
        </DropdownContext>
      </DropdownSource>
    </Dropdown>
  );
}

Select.propTypes = {
  options: PropTypes.array.isRequired,
  selectedValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
};

export default Select;
