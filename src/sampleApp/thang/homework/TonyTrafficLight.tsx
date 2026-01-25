import './TrafficLight.css';
import React, { useState, useEffect } from 'react';

/*
- red -> 7s -> green
- green -> 5s -> yellow
- yellow -> 3s -> red

[]: array
{}: object
Object.keys({}) -> convert object to array - and item is key
Object.value({}) -> convert object to array - and item is value

ffull component render: component -> render UI -> show initial state -> run useEffect -> call api -> set state -> component re-render -> show UI with new state
*/

interface ConfigMap {
  [key: string]: {
    backgroundColor: string,
    duration: number,
    next: string
  }
}

const config: ConfigMap = {
  red: {
    backgroundColor: 'red',
    duration: 7 * 1000,
    next: 'green'
  },
  yellow: {
    backgroundColor: 'yellow',
    duration: 3 * 1000,
    next: 'red'
  },
  green: {
    backgroundColor: 'green',
    duration: 5 * 1000,
    next: 'yellow'
  },
}

export default function TonyTrafficLight() {
  const [currentColor, setCurrentColor] = useState('green');

  React.useEffect(() => {
    const { duration, next } = config[currentColor] || {};
    const timer = setTimeout(() => {
      setCurrentColor(next)
    }, duration)

    return () => {
      clearTimeout(timer);
    }
  }, [currentColor])

  return (
    <div className='traffic-light'>
      {Object.keys(config).map(key => (
        <div key={key} className={`light ${key} ${currentColor === key ? 'active' : ''}`}></div>
      ))}
    </div>
  );
}