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
              activeUnit={props.state.activeUnit}
              skills={props.state.skills}
              useSkill={props.useSkill}
              changeUnit={props.changeUnit}
              rightSuperPower={props.rightSuperPower}
              leftSuperPow={props.leftSuperPower}
              emptySuperPower={props.emptySuperPower}
      />
    </div>
  );
}

export default App;
