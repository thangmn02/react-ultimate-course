import Component from './fundamental/Component';
import ConditionalRendering from './fundamental/ConditionalRendering';
import Props from './fundamental/Props';
import State from './fundamental/State';
import ThangComposeComponent from './sampleApp/thang/ComposeComponent';
import GuestGreeting from './sampleApp/thang/GuestGreeting';
import ComposeComponent from './sampleApp/tony/ComposeComponent';
import GenerateBox from './sampleApp/thang/homework/GenerateBox.';
import TrafficLight from './sampleApp/thang/homework/TrafficLight';

function App() {
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
      <TrafficLight />
      <br /> <br />
      <br /> <br />
      <br /> <br />
    </>
  )
}

export default App
