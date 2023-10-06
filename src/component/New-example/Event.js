import React, { Component } from 'react'

export class Event2 extends Component {
    handleclick(){
        alert('button clicked!');
    }
  render() {
    return (
      <div>
        <button className="bg" onClick={this.handleclick} >Click Me! </button>
      </div>
    )
  }
}

export default Event2