import React from 'react';
import { Component } from 'react';

import Timer from './Components/Timer/TimerOne';

class App extends Component {
  constructor(){
    super();
    this.state={
      TimerOn:false
    }
  }
  handleTimer=()=>{
    this.setState((prevState)=>({TimerOn:!prevState.TimerOn}))
  }

  render(){
    return(
      <>
      <button onClick={this.handleTimer}>{this.state.TimerOn?"STOP":"START"}</button>
      <Timer handleTimer={this.state.TimerOn}/>
      </>
    
    )
  }
}
export default App;
