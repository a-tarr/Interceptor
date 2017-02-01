import React, { Component } from 'react';
import blue from './images/bluetoken.png';
import red from './images/redtoken.png';
import './initiativetoken.css';

class InitiativeToken extends Component {

  constructor(props) {
    super(props);
    this.state = {
      'isFlipped': false
    }
  }

  handleClick() {
    if(this.state.isFlipped === false) {
      this.setState({'isFlipped': true});
    } else {
      this.setState({'isFlipped': false});
    }
  }

  render() {
    return (
      <div className={(this.state.isFlipped ? 'flip' : '') + " flip-container"} onClick={() => this.handleClick()}>
        <div className="flipper">
          <div className="front">
            <img src={blue} />
          </div>
          <div className="back">
            <img src={red} />
          </div>
        </div>
      </div>
    );
  }
}

export default InitiativeToken;
