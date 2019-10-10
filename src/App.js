import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import WelCome from './components/WelCome'

function App() {
  return (
    <div className="App">
      <Greet/>
      <WelCome/>
    </div>
  );
}

export default App;
