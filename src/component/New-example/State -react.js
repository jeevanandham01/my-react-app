

import React, { Component } from 'react'
 class Statereact extends Component {
    constructor(prpos){
        super (prpos);
        this.state={
            greeting:'hi buddy!'

        }
    }
  render() {
    return (
      <div>
        <h1>{this.state.greeting}</h1>
      </div>
    )
  }
}

export default Statereact;