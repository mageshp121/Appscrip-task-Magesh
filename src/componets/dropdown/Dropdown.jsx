import React, { useState } from 'react';
import './Dropdown.css'; // Import your CSS file

const Dropdown = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-toggle" onClick={toggleDropdown}>
        <span>RECOMMENDED </span>
       <img className='dropdown-logo' src="./icons8-down-arrow-64.png" alt="" />
      </div>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li key={option.value} onClick={() => handleSelectOption(option)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
