import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state, { whoIsFirts } from './state/state'

export let renderTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} whoIsFirts={whoIsFirts}/>
    </React.StrictMode>,
    document.getElementById('root')
  );

  serviceWorker.unregister();
}

renderTree();

