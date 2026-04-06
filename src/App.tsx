import { Link, Outlet, Route, Routes, useLocation } from 'react-router';

import Component from './fundamental/Component';
import ConditionalRendering from './fundamental/ConditionalRendering';
import Props from './fundamental/Props';
import State from './fundamental/State';
import ThangComposeComponent from './sampleApp/thang/ComposeComponent';
import GuestGreeting from './sampleApp/thang/GuestGreeting';
import ComposeComponent from './sampleApp/tony/ComposeComponent';
import GenerateBox from './sampleApp/thang/homework/GenerateBox';
// import TrafficLight from './sampleApp/thang/homework/TrafficLight';
import TonyTrafficLight from './sampleApp/thang/homework/TonyTrafficLight';
import ListKey from './fundamental/ListKey';
import QuestionBoard from './sampleApp/thang/homework/QuestionBoard';
import UserRegistration from './sampleApp/thang/homework/UserRegistration';
import StateHook from './fundamental/StateHook';
import EffectHook from './fundamental/EffectHook';
import React from 'react';
import PersonalForm from './sampleApp/tony/PersonalForm/PersonalForm';
import Todos from './fundamental/Todos';
import { TodoProvider } from './contexts/TodoContext';
import PerformanceHook from './fundamental/PerformanceHook';
import User from './components/user/User';
import Profile from './components/user/Profile';
import Account from './components/user/Account';
import InvoiceDetail from './components/invoice/InvoiceDetail';

const theme = createTheme();
function App() {
  const [isShowEffect, setIsShowEffect] = React.useState(true);
  const location = useLocation();

  console.log('location: ', location)

  return (
    <>
      <nav className="bg-[#f5f5dc] fixed w-full z-20 top-0 start-0 border-b border-default">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to=""
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-7"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">
              Flowbite
            </span>
          </Link>
        
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
              <li>
                <Link
                  to="component"
                  className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                >
                  Component
                </Link>
              </li>
              <li>
                <Link
                  to="props"
                  className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                >
                  Props
                </Link>
              </li>
              <li>
                <Link
                  to="compose-component"
                  className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                >
                  Compose Component
                </Link>
              </li>
              <li>
                <Link
                  to="user"
                  className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                >
                  User
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    
      <br /><br /><br />

      <main>
        <Routes>
          <Route path="" element={<div>Please click menu</div>}/>
          <Route path="component" element={<Component />}/>
          <Route path="props" element={<Props />}/>
          <Route path="compose-component" element={<ComposeComponent />}/>
          {/* <Route path="user" element={<User />}/>
          <Route path="user/profile" element={<Profile />}/>
          <Route path="user/account" element={<Account />}/> */}

          <Route path="user" element={<User />}>
            <Route path="profile" element={<Profile />}/>
            <Route path="account" element={<Account />}/>
          </Route>

          <Route path="invoice" element={
            <div>
              this is invoice
              <br />
              <Outlet />
            </div>
          }>
            <Route path=":invoiceId" element={<InvoiceDetail />}/>
          </Route>
         
        </Routes>
      </main>

  

      <br /><br /><br />
      <hr />


      <br /> <br />
      <ThangComposeComponent />

      <br />
      <GuestGreeting />

      <br />
      <State />

      <br />
      <ConditionalRendering />

      <br/ >
      <GenerateBox />

      <br /> <br />
      {/* <TrafficLight /> */}
      <TonyTrafficLight />
      
      <br /> <br />
      <ListKey />


      <br /> <br />
      <QuestionBoard/>
      <br /> <br />

      <br /><br/>
      <UserRegistration />

      <br /><br />
      <StateHook />

      <br /><br/>
      <button type="button" onClick={() => setIsShowEffect(prevState => !prevState)}>Show EffectHook</button>
      <br />
      {isShowEffect && <EffectHook />}

      <br /><br/>

      <h1>Personal Hook Form with Tony</h1>
      <PersonalForm />

      <br /><br/>

      <TodoProvider>
        <h1>Demo Todo with useContext</h1>
        <Todos />
      </TodoProvider>

      <br /><br />
      <PerformanceHook />
      
      <br /><br/>
      <br /><br/>
      <br /><br/>
      <br /><br/>
      <br /><br/>
    </>
  )
}

export default App
