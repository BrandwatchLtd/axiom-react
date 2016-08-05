import React, { PropTypes } from 'react';
import SelectionItem from './SelectionItem';

const Selection = ({ selection = [], onUnselectItem }) => {
  if (!selection.length) {
    return null;
  }

  return (
    <ul className="pickadilly__selection">
      {
        selection.map((item, index) => (
          <SelectionItem key={ index } label={ item.label } onUnselectItem={ onUnselectItem.bind(this, item) } />
        ))
      }
    </ul>
  );
};

Selection.propTypes = {
  selection: PropTypes.array,
  onUnselectItem: PropTypes.func,
};

export default Selection;
