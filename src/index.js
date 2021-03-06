import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state, { changeUnit, emptySuperPower, useSkill, whoIsFirts } from './state/state'

export let renderTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} whoIsFirts={whoIsFirts} useSkill={useSkill}
       changeUnit={changeUnit} emptySuperPower={emptySuperPower}/>
    </React.StrictMode>,
    document.getElementById('root')
  );

  serviceWorker.unregister();
}

renderTree();

