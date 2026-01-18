

/*
Initial value is boolean, or array, or object, or string ...
State is like a component’s memory. It lets a component keep track of some information and change it in response to interactions
The state object is where you store property values that belongs to the component.
When the state object changes, the component re-renders.


how to component re-render?
- state changes
*/


import React from "react"
import Button from "../components/ui/Button";

function State() {
  const [person, setPerson] = React.useState(''); // primity:  tham trị
  const [book, setBook] = React.useState({
    title: 'React',
    price: 500
  }); // tham chiếu -> memory A

  function updateName() {
    setPerson('tony' + Date.now())
  }

  function updateBook() {
    // setPerson('tony' + Date.now())
    // book.title = 'React' + Date.now(); // mutate object -> memory A
    // setBook(book); // previous state memory A <=> pending state memory A

    const newBook = {
      ...book, // copy all properties book
      title: 'React'
    }
    setBook(newBook); // previous state memory A  <=> pending state memory X
  }

  console.log('State render', book);
  return (
    <div>
      <h1>State</h1>

      Name: {person} <br />
      Name Book: {book.title} <br />
      Price Book: {book.price} <br />

      <Button 
        buttonText="Update Name"
        onClick={updateName}
      />

      <Button 
        buttonText="Update Book"
        onClick={updateBook}
      />
    </div>
  )
}

export default State