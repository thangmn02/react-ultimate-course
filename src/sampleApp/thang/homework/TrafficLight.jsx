import './TrafficLight.css';
import { useState, useEffect } from 'react';

export default function App() {
  const [currentColor, setCurrentColor] = useState('green');
useEffect(() => {
    let timer;
    if (currentColor === 'green') {
      timer = setTimeout(() => setCurrentColor('yellow'), 5000);
    } else if (currentColor === 'yellow') {
      timer = setTimeout(() => setCurrentColor('red'), 4000);
    } else {
      timer = setTimeout(() => setCurrentColor('green'), 3000);
    }
    return () => clearTimeout(timer); 
  }, [currentColor]); 

  return (
    <div className="traffic-light">
      <div className={`light red ${currentColor === 'red' ? 'active' : ''}`}></div>
      <div className={`light yellow ${currentColor === 'yellow' ? 'active' : ''}`}></div>
      <div className={`light green ${currentColor === 'green' ? 'active' : ''}`}></div>
    </div>
  );
}