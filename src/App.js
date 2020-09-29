import React from 'react';
import logo from './logo.svg';
import './App.css';
import Info from './components/Info/Info';
import Action from './components/Action/Action';

const App = (props) => {
  return (
    <div className="App">
      <Info round={props.state.round} />
      <Action units={props.state.units} />
    </div>
  );
}

export default App;
