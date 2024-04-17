import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [isLeftHidden, setIsLeftHidden] = useState(false);

  const toggleLeft = () => {
    setIsLeftHidden(!isLeftHidden);
  };

  return (
    <div>
  <button id="btn" onClick={toggleLeft}>toggle</button>
  <div id="wrapper">
    <div id="left" className={isLeftHidden ? 'hide' : ''}>Foo</div>
    <div id="right">
      <div className={`grid-container ${isLeftHidden ? 'expand' : ''}`}>
        <div className="grid-item">1</div>
        <div className="grid-item">2</div>
        <div className="grid-item">3</div>
        <div className="grid-item">4</div>
        <div className="grid-item">5</div>
        <div className="grid-item">6</div>
      </div>
    </div>
  </div>
</div>
  );
}



export default App
