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
  filterFunction,
  onClear,
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

  const getSelectedItem = (item) => {
    if (Array.isArray(selectedValue)) {
      return selectedValue.some((value) => value.id === item.id);
    }

    return selectedValue?.value === item.value;
  };

  const getSelectedValue = (item) => {
    if (Array.isArray(selectedValue)) {
      return selectedValue.map((value) => value.name);
    }

    return selectedValue?.name;
  };

  return (
    <Dropdown position="bottom" flip="mirror" offset="end" {...rest}>
      <DropdownTarget>
        {filterFunction ? (
          <TextInput
            disabled={disabled}
            onChange={(event) => filterFunction(event)}
            placeholder={placeholder}
            value={selectedValue?.name}
            label={label}
            inlineLabel={inlineLabel}
            size={size}
            inputIconContainerRef={dropdownTargetRef}
            onClear={onClear}
          >
            <TextInputIcon name="chevron-down" />
          </TextInput>
        ) : (
          <TextInput
            isTarget
            disabled={disabled}
            onChange={() => {}}
            placeholder={placeholder}
            value={getSelectedValue()}
            label={label}
            inlineLabel={inlineLabel}
            size={size}
            inputIconContainerRef={dropdownTargetRef}
          >
            <TextInputIcon name="chevron-down" />
          </TextInput>
        )}
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
                onClick={() => onChange(item)}
                selected={getSelectedItem(item)}
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
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      id: PropTypes.number,
    })
  ).isRequired,
  selectedValue: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  inlineLabel: PropTypes.bool,
  disabled: PropTypes.bool,
  multiSelect: PropTypes.bool,
  size: PropTypes.string,
};

export default Select;
