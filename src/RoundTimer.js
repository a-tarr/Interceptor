import React, { Component } from 'react';
import './roundtimer.css';

class RoundTimer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      'currentRound': 1
    }
  }

  increment() {
    if (this.state.currentRound < 6) {
      this.setState({
        currentRound: this.state.currentRound + 1
      })
    }
  }

  decrement() {
    if (this.state.currentRound > 1) {
      this.setState({
        currentRound: this.state.currentRound - 1
      })
    }
  }

  render() {
    return (
      <div className="roundTimer">
        <div className="buttonContainer">
          <div className="arrow" onClick={() => this.decrement()}>&lt;</div>
        </div>
        <span className="number">{this.state.currentRound}</span>
        <div className="buttonContainer">
          <div className="arrow" onClick={() => this.increment()}>&gt;</div>
        </div>
      </div>
    );
  }
}

export default RoundTimer;
