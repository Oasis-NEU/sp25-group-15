//import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import "./DropdownItem.css";

const DropdownItem = ({ children, onClick }) => {
  return (
    <div className="dropdown-item" onClick={onClick}>
      {children}
    </div>
  );
};

// Set the displayName for the component
DropdownItem.displayName = 'DropdownItem';

// PropTypes for DropdownItem component
DropdownItem.propTypes = {
  children: PropTypes.node.isRequired,  // children must be a valid React node and is required
  onClick: PropTypes.func.isRequired,   // onClick must be a function and is required
};

export default DropdownItem;
