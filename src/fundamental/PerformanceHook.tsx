
/* 
memo
- Higher order-component.
- Prevent the component re-render unnecessary.
- It takes 2 arguments: one for React Component, one for custom compare (option). 
- Shallow comparison.

useCallback
- Returns a memorized callback.
- Callback function will re-runs if one of the dependencies has changed.
- Every callback function should be memoized to prevent useless re-rendering of child components that use the callback function” is the reasoning of his teammates.

useMemo
- Returns  a memorized value.

*/
import React from "react";
import Box from "../components/ui/Box";

// function Box({ title, description }) {
//   return (
//     <div>
//       Title: {title} <br />
//       Description: {description}
//     </div>
//   )
// }
// const BoxMemo = React.memo(Box);

function PerformanceHook() {
  const [number, setNumber] = React.useState(0);
  const [book, setBook] = React.useState({
    title: '',
    description: '',
    price: 0,
    name: ''
  });
  const [carts, setCarts] = React.useState([
    { id: 1, title: 'iphone', quatity: 10, price: 200 },
    { id: 2, title: 'samsung', quatity: 2, price: 300 },
    { id: 3, title: 'watch', quatity: 1, price: 400 }
  ])

  function updateNumber() {
    setNumber(prevState => prevState + 1)
  }

  function updateBook() {
    setBook(prevState => ({
      ...prevState,
      title: 'Title' + Date.now(), // abc
      description: 'description' + Date.now(),
      name: 'name' + Date.now(),
    }))
  }

  // re-create function every component re-render -> 1. memory A, 2. memory B
  // function updatePrice() {
  //   setBook(prevState => ({
  //     ...prevState,
  //     price: Date.now(),
  //   }))
  // }
  const updatePrice = React.useCallback(() => {
    console.log('title: ', book.title); // abc
    setBook(prevState => ({
      ...prevState,
      price: Date.now(),
    }))
  }, [book.title])

  // const total = carts.reduce((acc, curr) => {
  //   acc += curr.quantity * curr.price;
  //   return acc;
  // }, 0);

  const addNewItem = () => {
    const item = {
      id: Date.now(),
      title: 'Product' + carts.length + 1,
      price: Math.floor(Math.random() * 10),
      quatity: 1
    }
    setCarts(prevState => [...prevState, item])
  }

  // return memorize value: first render: 3000, add new item -> still 3000
  const total = React.useMemo(() => {
    return carts.reduce((acc, curr) => {
      acc += curr.quatity * curr.price;
      return acc;
    }, 0);
  }, [carts])

  /*
  without useMemo: 
    first render: PerformanceHook -> render -> total calculation (3000)
    re-render: update number state -> PerformanceHook -> re-render -> total calculation again (3000) (uneccesary)
  with useMemo:
    first render: PerformanceHook -> render -> total calculation (3000)
    re-render: update number state -> PerformanceHook -> re-render -> get 3000 from memorize value
  */
  
  return (
    <div>
      <h1>PerformanceHook</h1>
      Number: {number} <br />
      {/* <BoxMemo /> */}
      <Box 
        title={book.title}
        description={book.description}
        price={book.price}
        updatePrice={updatePrice}
      />
      <br />
   

      <br />
      <button type="button" onClick={updateNumber}>Update Number</button>
      <button type="button" onClick={updateBook}>Update Title and Description</button>

      <h2><b>Cart</b></h2>
      <div>
        {carts.map(cart => (
          <div>
            Title: {cart.title} <br />
            Price: {cart.price} <br />
            Quanlity: {cart.quatity} 
            <hr />
          </div>
        ))}
      </div>
      Total: {total} $ <br />
      <button type="button" onClick={addNewItem}>Add New Item</button>

    </div>
  )
}

export default PerformanceHook;