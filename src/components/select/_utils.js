export function defaultInputDisplayValue(props) {
  const { multiselect, selection, displayValue } = props;

  return multiselect
    ? selection.map((item) => displayValue(item)).join(', ')
    : displayValue(selection);
}

function compare(a, b, identifier) {
  return identifier(a) === identifier(b);
}

export function buildSelectableItem(value, props) {
  const { multiselect, selection, displayValue, identifier } = props;
  const isSelected = !!selection && (multiselect
    ? selection.some(item => compare(value, item, identifier))
    : compare(value, selection, identifier));

  return {
    value,
    isSelected,
    displayValue: displayValue(value, isSelected),
  };
}

export function buildSelectableItems(props, state) {
  const { hideSelected, items } = props;
  const { activeIndex, filterText } = state;

  return items
    .map((value) => buildSelectableItem(value, props))
    .filter(({ displayValue }) => !filterText ||
      displayValue.toLowerCase().includes(filterText.toLowerCase()))
    .filter(({ isSelected }) => !hideSelected || !isSelected)
    .map((item, index) => {
      return {
        ...item,
        isActive: activeIndex === index,
      };
    });
}
