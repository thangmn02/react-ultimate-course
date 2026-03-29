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
import { TodoContext, TodoProvider } from './contexts/TodoContext';
import PerformanceHook from './fundamental/PerformanceHook';

function App() {
  const [isShowEffect, setIsShowEffect] = React.useState(true);
  return (
    <>
      <Component />

      <br /> <br /> <br />
      <Props />

      <br /> <br />
      <ComposeComponent />

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
