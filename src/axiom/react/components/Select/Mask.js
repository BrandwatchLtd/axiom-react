import React, { PropTypes } from 'react';

const Mask = ({ open, onClick }) => {
  if (!open) {
    return null;
  }

  return (
    <div className="pickadilly__mask" onClick={ onClick } ></div>
  );
};

Mask.propTypes = {
  open: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Mask;
