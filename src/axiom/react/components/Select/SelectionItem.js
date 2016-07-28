import React, { PropTypes } from 'react';

const SelectionItem = ({ label, onUnselectItem }) => (
  <li className="pickadilly__selectionItem">
    { label }
    <i className="pickadilly__icon pickadilly__icon--remove" onClick={ onUnselectItem }></i>
  </li>
);

SelectionItem.propTypes = {
  label: PropTypes.string,
  onUnselectItem: PropTypes.func,
};

export default SelectionItem;
