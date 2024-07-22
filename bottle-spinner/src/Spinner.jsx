import React, { useState } from 'react';
import './Spinner.css';
import bottleImage from './assets/spinner.svg'; 

const Spinner = () => {
  const [angle, setAngle] = useState(0);
  const [spinning, setSpinning] = useState(false);

  const spinBottle = () => {
    if (spinning) return;
    
    setSpinning(true);
    const randomAngle = Math.floor(Math.random() * 3600) + 360; 
    setAngle(randomAngle);

    setTimeout(() => {
      setSpinning(false);
    }, 3000); 
  };

  return (
    <div className="spinner-container">
      <img 
        src={bottleImage} 
        alt="Bottle"
        className={`bottle ${spinning ? 'spinning' : ''}`} 
        style={{ transform: `rotate(${angle}deg)` }}
        onClick={spinBottle}
      />
      <button onClick={spinBottle} disabled={spinning}>Spin</button>
    </div>
  );
};

export default Spinner;
