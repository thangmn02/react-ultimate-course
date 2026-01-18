import Component from './fundamental/Component';
import Props from './fundamental/Props';
import ThangComposeComponent from './sampleApp/thang/ComposeComponent';
import GuestGreeting from './sampleApp/thang/GuestGreeting';
import ComposeComponent from './sampleApp/tony/ComposeComponent';

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
    </>
  )
}

export default App
