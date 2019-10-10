import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import WelCome from './components/WelCome'
import Message from './components/Message'

function App() {
  return (
    <div className="App">
      <Message/>
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
