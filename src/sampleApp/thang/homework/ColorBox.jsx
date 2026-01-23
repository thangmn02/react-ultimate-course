import { useState } from 'react';
import './ColorBox.css';

export default function ColorBox() {
  const [activeColor, setActiveColor] = useState(null);
  const colors = [
    { name: 'red', class: 'red' },
    { name: 'yellow', class: 'yellow' },
    { name: 'aqua', class: 'aqua' },
    { name: 'purple', class: 'purple' }
  ];

  const handleClick = (color) => {
    setActiveColor(prev => prev === color ? null : color);
  };

  return (
    <div className="color-box-container">
      <p className="current-color">
        Current color: {activeColor || 'Default'}
      </p>

      <div className="color-grid">
        {colors.map((item) => (
          <button
            key={item.name}
            className={`color-box ${activeColor || item.class}`}
            onClick={() => handleClick(item.name)}
            type="button"
          >
            {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}