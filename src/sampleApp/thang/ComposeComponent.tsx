import { useState } from 'react';
import Button from '../../components/ui/Button';

function ThangComposeComponent() { 
  const[count, setCount] = useState(0);

  function handleIncrement(){
    setCount(count +1);
  }  

  return (
    <div>
      <h1>Sample App: ComposeComponent</h1>
      <div className="alert-box">
        <h2 className="alert-header">
          Item count: {count}
        </h2>
        <Button 
          buttonText="Increment"
          onClick={handleIncrement}
        />
      </div>
    </div>
  );
}

export default ThangComposeComponent;
