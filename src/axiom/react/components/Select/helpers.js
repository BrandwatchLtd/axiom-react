export function getVisibleItems(items, selection = [], filter = '') {
  let visibleItems = items;

  if (selection.length) {
    visibleItems = visibleItems.filter(item => !selection.includes(item));
  }

  if (filter) {
    visibleItems = visibleItems.filter(item => item.label.toLowerCase().includes(filter.toLowerCase()));
  }

  return visibleItems;
}

export function getMenuStyle(selectEl, flipped) {
  const { top, left, height, width } = selectEl.getBoundingClientRect();

  return {
    top: flipped ? 'auto' : height + top,
    left,
    width,
    bottom: flipped ? (window.innerHeight - top) : 'auto',
  };
}

export function getScrollIntoViewOffset(listEl, itemEl) {
  if (itemEl.offsetTop + itemEl.clientHeight > listEl.clientHeight + listEl.scrollTop) {
    return itemEl.offsetTop + itemEl.clientHeight - listEl.clientHeight;
  }

  if (itemEl.offsetTop <  listEl.scrollTop) {
    return listEl.scrollTop = itemEl.offsetTop;
  }

  return listEl.scrollTop;
}

export function preventDefault(e) {
  e.preventDefault();
}

export function mapValuesToItems(values, items) {
  const mappedItems = values.map(value => items.find(item => item.value === value));

  return mappedItems.filter(item => !!item);
}

export function mapItemsToValues(items) {
  return items.map(item => item.value);
}
