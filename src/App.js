import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import WelCome from './components/WelCome'

function App() {
  return (
    <div className="App">
      <Greet name='yoyyo'><p>this is a childe</p></Greet>
      <Greet name='mimimi'><button>hello there</button></Greet>
      <Greet name='you'/>
      <WelCome/>
    </div>
  );
}

export default App;
