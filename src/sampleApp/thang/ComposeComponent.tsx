import { useState } from 'react';

function ThangComposeComponent() { 
  const[count, setCount] = useState(0);

  function onClick(){
    setCount(count +1);
  }  

  return (
    <div className="alert-box">
      <h1>Sample App: ComposeComponent</h1>
       <h2 className="alert-header">
        Item count: {count}
        </h2>
       <button 
       onClick ={onClick}
       >
        Increment
       </button>
    </div>
  );
}

export default ThangComposeComponent;
