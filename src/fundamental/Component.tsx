/*
- name function must is PascalCase

data type of javascript?
- primitive (nguyên thủy): number, string, boolean, null, undefiend, Symbol
- non-primitive (ko phai nguyen thuy): object, array, function ...

pure/presentation/stateless component
- just only present the props.
- don’t need a state.
- reuse code. 

Stateful/Container component
- Contains logic code in component.
- Dependent on state for rendering, such as fetching data.

how many way to component re-render?
- state changes
- props changes
- parent component re-render to children component re-render
- key change (force update)
*/

import React from "react";
import Button from "../components/ui/Button";

function Component() {
  const [forceUpdate, setForcUpdate] = React.useState(Date.now())
  const isLoading = true;
  const buttonStyle = {
    backgroundColor: '#f00'
  }

  const element1 = (
    <h1>
      <span>123</span>
    </h1>
  );

  // user click -> () => {} => onAddProduct() => run
  const onAddProduct = (name: string) => {
    console.log('onAddProduct', name)
  }

  // user click => onAddProduct() => () => run
  // curry function
  // const onAddProduct = () => () => {
  //   console.log('onAddProduct', name)
  // }

  return (
    <React.Fragment key="3312">
      <h1>Component</h1>
      <button 
        className="w-full" 
        aria-label="abc" 
        onClick={() => {
          // perform actions

          setForcUpdate(Date.now());

        }}
        style={buttonStyle}
      >
        Update Button {isLoading ? 'true' : 'false'}
      </button>

      {element1}

      {/* <img src="abc" alt="abc"></img> */}
      <img src="abc" alt="abc" />
      <br></br>
      <br />

      Please click to add product: 
      <Button 
        buttonText="Add Product" 
        onClick={() => {
          onAddProduct('tony')
        }} 
        // onClick={onAddProduct('tony')}
      /> <br />

      <div key={forceUpdate}>this is library 3</div>
    </React.Fragment>
  )
}

export default Component
