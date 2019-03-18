import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <h1>Laxmikant Phadke</h1>
          <Button variant="contained" color="secondary">
            Learn React
    </Button>

        </header>
      </div>
    );
  }
}

export default App;
