import React from 'react'

function initializeCount() {
  console.log('initializeCount')
  return 0
}; // tham chieu 

// closure function
function StateHook() {

  // syntax array destructuring
  const [count, setCount] = React.useState(initializeCount); // tham chieu A

  function updateCount() {
    // batching state update
    // setCount(count + 1); // 0 + 1
    // setCount(count + 1); // 0 + 1
    // setCount(count + 1); // 0 + 1
    // setCount(count + 1); // 0 + 1

    // updater function
    setCount(prevState => prevState + 1); // 0 + 1
    setCount(prevState => prevState + 1); // 0 + 1
    setCount(prevState => prevState + 1); // 0 + 1
    setCount(prevState => prevState + 1); // 0 + 1
  }

  return (
    <div>
      <h1>StateHook</h1> <br />
      Count: {count}<br />
      <button type="button" onClick={updateCount}>Update count</button>
    </div>
  )
}

export default StateHook