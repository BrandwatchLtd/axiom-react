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

/**
 * Selects allow users to choose one or multiple options from a menu [Link].
 */
function Select({
  options,
  label,
  inlineLabel = false,
  selectedValue,
  onChange,
  placeholder,
  disabled = false,
  size = "medium",
  multiSelect = false,
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

  const getSelected = (item) => {
    if (Array.isArray(selectedValue)) {
      return selectedValue.includes(item.id);
    }

    return selectedValue === item.value;
  };

  return (
    <Dropdown position="bottom" offset="end" {...rest}>
      <DropdownTarget>
        <TextInput
          isTarget
          disabled={disabled}
          onChange={() => {}}
          placeholder={placeholder}
          value={selectedValue}
          label={label}
          inlineLabel={inlineLabel}
          size={size}
          inputIconContainerRef={dropdownTargetRef}
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
                multiSelect={multiSelect}
                key={item.id}
                onClick={() => onChange(item.value)}
                selected={getSelected(item)}
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
  inlineLabel: PropTypes.bool,
  disabled: PropTypes.bool,
  multiSelect: PropTypes.bool,
  size: PropTypes.string,
};

export default Select;
