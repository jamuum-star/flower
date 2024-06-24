// src/Dropdown.js
import  { useState } from 'react';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const options = ['Option 1', 'Option 2', 'Option 3'];

    return (
        <div className="dropdowns">
            <button onClick={toggleDropdown} className="dropdown-toggle">
                {selectedOption || 'Select an option'}
            </button>
            {isOpen && (
                <div className="dropdown-menus">
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
