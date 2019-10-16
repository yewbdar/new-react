import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import WelCome from './components/WelCome'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import ParentComponet from './components/ParentComponet'
import ChildComponent from './components/ChildComponent'
import StyledCompoent from './components/StyledCompoent'
import Form from './components/Form'
import LifecycleA from './components/LifecycleA'
import RefDemo from './components/RefsDemo'
import FRParentInput from './components/FRParentInput'
import PortalDemo from './components/PortalDemo'
import Hero from './components/Hero'
import ErrorBundery from './components/ErrorBundery'
import HoverCounter from './components/HoverCounter'
import ClickCounter from './components/ClickCounter'
import HoverCounterTwo from './components/HoverCounterTwo'
import ClickCounterTwo from './components/ClickCounterTwo'
import User from './components/User';
import CounterTwo from './components/CounterTwo';
function App() {
  return (
    <div className="App">
      {/* <CounterTwo />
      {(count,increment)=> <ClickCounterTwo count={count} increment={increment}/>}
      <CounterTwo /> */}

      <CounterTwo render={(count,increment) => (
      <HoverCounterTwo count={count} increment={increment}/>
      )}/>


       {/* <ClickCounterTwo/>
       <HoverCounterTwo/>
       <User render={()=>'good and bad'}/> */}

       {/* <ErrorBundery>
      <Hero heroName='yo'/>
      <Hero heroName='yobdi'/>
     
      <Hero heroName='Joker'/>
      </ErrorBundery> */}
      
      {/* <FRParentInput/> */}
      {/* <PortalDemo/> */}
      {/* <RefDemo/> */}
      {/* <LifecycleA/> */}
      {/* <Form/> */}
      {/* <StyledCompoent/> */}
      {/* <ChildComponent/> */}
      {/* <ParentComponet/> */}
      {/* <FunctionClick/> */}
      {/* <ClassClick/> */}
      {/* <Counter/> */}
      {/* <Message/> */}
      {/* <Greet name='yoyyo'><p>this is a childe</p></Greet>
      <Greet name='mimimi'><button>hello there</button></Greet>
      <Greet name='you'/>
      <WelCome name='yoyyo'/>
      <WelCome name='mimimi'/>
      <WelCome name='you'/> */}
    </div>
  );
}

export default App;
