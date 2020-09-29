import React from 'react';
import logo from './logo.svg';
import './App.css';
import Info from './components/Info/Info';
import Action from './components/Action/Action';

const App = (props) => {
  return (
    <div className="App">
      <Info round={props.state.round}
            activeUnit={props.state.activeUnit}
            whoIsFirts={props.whoIsFirts}
            winner={props.state.winner}
      />
      <Action units={props.state.units}
              skills={props.state.skills}
              leftPoint={props.state.leftPoint}
              rightPoint={props.state.rightPoint}
              useSkill={props.useSkill}
      />
    </div>
  );
}

export default App;
