import { useState } from "react";
import GuestLogout from "./components/GuestLogout";
import GuestLogin from "./components/GuestLogin";

export default function GuestGreeting() {
  const[isLoggedIn, setIsLoggedin] =useState(false); 
  
  function clickLogin(){
    setIsLoggedin(true)
  }
  
  function clickLogout(){
    setIsLoggedin(false)
  }

  function handleClick() {
    // click 1 -> false  -> !false => true
    // click 2 -> true -> !true => false
    // setIsLoggedin(isLoggedIn => !isLoggedIn)
    setIsLoggedin((isLoggedIn) => {
      return !isLoggedIn
    })
  }

  // first render: component first render with initial state
  // re-render:  set state -> component re-render with new state

  return (
    <div>
      <h1>Sample App: GuestGreeting</h1>
      {
        isLoggedIn ? (
          <GuestLogout 
            text="Welcome to"
            name="Thang"
            onLogout={handleClick}
          />
        ) : (
          <GuestLogin
            text="Please sign up" 
            onLogin={handleClick}
          />
        )
      }
    </div>
  );
}