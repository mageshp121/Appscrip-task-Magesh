import React from 'react'
import "./Accordion.css"
function Accordion() {
  return (
   <>
  <div class="accordion">
  <div>
    <input
      type="checkbox"
      id="section1"
      class="accordion__input"
    />
    <label for="section1" class="accordion__label">
      IDEAL For
    </label>
    
    <div class="accordion__content">
      <input type="checkbox" id="checkbox1_1" />
      <label for="checkbox1_1">Men</label>
    </div>
    <div class="accordion__content">
      <input type="checkbox" id="checkbox1_2" />
      <label for="checkbox1_2">Women</label>
    </div>
    <div class="accordion__content">
      <input type="checkbox" id="checkbox1_3" />
      <label for="checkbox1_3">Baby & kids</label>
    </div>
  </div>
  <div>
    <input
      type="checkbox"
      id="section2"
      class="accordion__input"
    />
    <label for="section2" class="accordion__label">
     OCCASION
    </label>
    
    <div class="accordion__content">
      <input type="checkbox" id="checkbox2_1" />
      <label for="checkbox2_1">Men</label>
    </div>
    <div class="accordion__content">
      <input type="checkbox" id="checkbox2_2" />
      <label for="checkbox2_2">Women</label>
    </div>
    <div class="accordion__content">
      <input type="checkbox" id="checkbox2_3" />
      <label for="checkbox2_3">Baby & kids</label>
    </div>
  </div>
  <div>
    <input
      type="checkbox"
      id="section3"
      class="accordion__input"
    />
    <label for="section3" class="accordion__label">
      WORK
    </label>
    
    <div class="accordion__content">
      <input type="checkbox" id="checkbox3_1" />
      <label for="checkbox3_1">Checkbox 1</label>
    </div>
    <div class="accordion__content">
      <input type="checkbox" id="checkbox3_2" />
      <label for="checkbox3_2">Checkbox 2</label>
    </div>
    <div class="accordion__content">
      <input type="checkbox" id="checkbox3_3" />
      <label for="checkbox3_3">Checkbox 3</label>
    </div>
  </div>
  <div>
    <input
      type="checkbox"
      id="section4"
      class="accordion__input"
    />
    <label for="section4" class="accordion__label">
     FABRIC
    </label>
    
    <div class="accordion__content">
      <input type="checkbox" id="checkbox4_1" />
      <label for="checkbox4_1">Checkbox 1</label>
    </div>
    <div class="accordion__content">
      <input type="checkbox" id="checkbox4_2" />
      <label for="checkbox4_2">Checkbox 2</label>
    </div>
    <div class="accordion__content">
      <input type="checkbox" id="checkbox4_3" />
      <label for="checkbox4_3">Checkbox 3</label>
    </div>
  </div>
  <div>
    <input
      type="checkbox"
      id="section5"
      class="accordion__input"
    />
    <label for="section5" class="accordion__label">
    SEGMENT
    </label>
    
    <div class="accordion__content">
      <input type="checkbox" id="checkbox5_1" />
      <label for="checkbox5_1">Checkbox 1</label>
    </div>
    <div class="accordion__content">
      <input type="checkbox" id="checkbox5_2" />
      <label for="checkbox5_2">Checkbox 2</label>
    </div>
    <div class="accordion__content">
      <input type="checkbox" id="checkbox5_3" />
      <label for="checkbox5_3">Checkbox 3</label>
    </div>
    <div>
    <input
      type="checkbox"
      id="section6"
      class="accordion__input"
    />
    <label for="section6" class="accordion__label">
     SUITABLE FOR
    </label>
    
    <div class="accordion__content">
      <input type="checkbox" id="checkbox6_1" />
      <label for="checkbox6_1">Checkbox 1</label>
    </div>
    <div class="accordion__content">
      <input type="checkbox" id="checkbox6_2" />
      <label for="checkbox6_2">Checkbox 2</label>
    </div>
    <div class="accordion__content">
      <input type="checkbox" id="checkbox6_3" />
      <label for="checkbox6_3">Checkbox 3</label>
    </div>
    <div>
    <input
      type="checkbox"
      id="section7"
      class="accordion__input"
    />
    <label for="section7" class="accordion__label">
     RAW MATERIALS
    </label>
    <div class="accordion__content">
      <input type="checkbox" id="checkbox7_1" />
      <label for="checkbox7_1">Checkbox 1</label>
    </div>
    <div class="accordion__content">
      <input type="checkbox" id="checkbox7_2" />
      <label for="checkbox7_2">Checkbox 2</label>
    </div>
    <div class="accordion__content">
      <input type="checkbox" id="checkbox7_3" />
      <label for="checkbox7_3">Checkbox 3</label>
    </div>
    <div>
    <input
      type="checkbox"
      id="section8"
      class="accordion__input"
    />
    <label for="section8" class="accordion__label">
      PATTERN
    </label>
    <div class="accordion__content">
      <input type="checkbox" id="checkbox8_1" />
      <label for="checkbox8_1">Checkbox 1</label>
    </div>
    <div class="accordion__content">
      <input type="checkbox" id="checkbox8_2" />
      <label for="checkbox8_2">Checkbox 2</label>
    </div>
    <div class="accordion__content">
      <input type="checkbox" id="checkbox8_3" />
      <label for="checkbox8_3">Checkbox 3</label>
    </div>
  </div>
  </div>
  </div>
  </div>
 
</div>


   </>
  )
}

export default Accordion