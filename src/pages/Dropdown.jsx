// src/Dropdown.js
import  { useState } from 'react';

const Dropdown = () => {
  // Define state variables for the dropdown open/closed status and the selected option
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  // Function to toggle the dropdown open/closed status
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle the selection of an option
  const handleOptionClick = (option) => {
    setSelectedOption(option); // Set the selected option
    setIsOpen(false); // Close the dropdown
  };
  // Array of options to be displayed in the dropdown
  const options = ["Option 1", "Option 2", "Option 3"];

  return (
    <div className="dropdowns">
      {/* Button to toggle the dropdown, displaying the selected option or a default message */}
      <button onClick={toggleDropdown} className="dropdown-toggle">
        {selectedOption || "Select an option"}
      </button>
      {/* Conditionally render the dropdown menu if isOpen is true */}
      {isOpen && (
        <div className="dropdown-menus">
          {/* Map over the options array to create a list of dropdown items */}
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleOptionClick(option)}
              className="dropdown-items"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
