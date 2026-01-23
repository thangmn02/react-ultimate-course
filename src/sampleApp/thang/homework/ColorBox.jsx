import { useState } from 'react';

export default function ColorBox() {
  const [activeColor, setActiveColor] = useState(null);
  const colors = ['red', 'yellow', 'aqua', 'purple'];

  const handleClick = (color) => {
    setActiveColor(prev => prev === color ? null : color);
  };

  return (
    <div
      style={{
        maxWidth: '400px',
        margin: '0 auto',
        padding: '20px'
      }}>
      <p
        style={{
          fontWeight: 'bold',
          marginBottom: '15px'
        }}>
        Current color: {activeColor || 'Default'}
      </p>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        justifyContent: 'center'
      }}>

        {colors.map(color => (
          <button
            key={color}
            style={{
              width: '100px',
              height: '100px',
              backgroundColor: activeColor || color,
              border: 'none',
              color: 'black',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
            onClick={() => handleClick(color)}
          >
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}