import React, { useState } from 'react'
import "./Body.css"
import Dropdown from '../dropdown/Dropdown';
import Accordion from '../sidebar/Accordion';
import ProductCard from '../productcard/ProductCard';
function Body() {
    const [isLeftHidden, setIsLeftHidden] = useState(true);
    const [selectedOption, setSelectedOption] = useState(null);

    const options = [
      { value: 1, label: 'Option 1' },
      { value: 2, label: 'Option 2' },
      { value: 3, label: 'Option 3' },
    ];
  
    const handleSelect = (option) => {
      setSelectedOption(option);
    };

    const toggleLeft = () => {
      setIsLeftHidden(!isLeftHidden);
    };
    
  
  return (
    <>
    <div className='main-body-parent'>
     <div className='body-control-section'>
        <div className='body-control-section-first-child'>
        <span className='total-items'>350 ITEMS</span>
        {
            isLeftHidden ? <span id="btn" className="filter-controler" onClick={toggleLeft}>Show Filter</span> :<span id="btn" className="filter-controler" onClick={toggleLeft}>Hide Filter</span>
        }
        </div>
        <div className='body-control-section-second-child'>
        <div>

      <Dropdown options={options} onSelect={handleSelect} />
      {selectedOption && (
        <p>You selected: {selectedOption.label}</p>
      )}
    </div>
 
    </div>   
    </div>
     <div className='main-body-section'>
  <div id="wrapper">
    <div id="left" className={isLeftHidden ? 'hide' : ''}>
        <Accordion/>
    </div>
    <div id="right">
      <div className={`grid-container ${isLeftHidden ? 'expand' : ''}`}>
      <ProductCard/>
      </div>
    </div>
  </div>
</div>
</div>
    </>
   
  )
}

export default Body