import React, { Component } from 'react';
import Header from './Header';
import InitiativeToken from './InitiativeToken';
import RoundTimer from './RoundTimer';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="headerContainer">
          <Header />
        </div>
        <div className="App">
          <InitiativeToken />
          <RoundTimer />
        </div>
      </div>
    );
  }
}

export default App;
