/*
- name function must is PascalCase

data type of javascript?
- primitive (nguyên thủy): number, string, boolean, null, undefiend, Symbol
- non-primitive (ko phai nguyen thuy): object, array, function ...
*/

import React from "react";

function Component() {
  const isLoading = true;
  const buttonStyle = {
    backgroundColor: '#f00'
  }

  const element1 = (
    <h1>
      <span>123</span>
    </h1>
  );

  return (
    <React.Fragment key="abc">
      <h1>Component</h1>
      <button 
        className="w-full" 
        aria-label="abc" 
        onClick={() => {}}
        style={buttonStyle}
      >
        Update Button {isLoading ? 'true' : 'false'}
      </button>

      {element1}

      {/* <img src="abc" alt="abc"></img> */}
      <img src="abc" alt="abc" />
      <br></br>
      <br />
    </React.Fragment>
  )
}

export default Component
