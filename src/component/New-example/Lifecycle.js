import React, { Component } from 'react'

 class Lifecycle extends Component {
    constructor(props){
        super(props);
        this.state={
            count: 0,
        };
    }

    componentDidMount(){
        console.log('component did mount');
    }

    componentDidUpdate(prevProps,prevstate){
        console.log('component did update');
    }

    componentWillMount (){
        console.log('component will mount');
    }
     
    IncrementCount(){
        this.setState((prevstate)=>({count:prevstate.count+1}) )
    }

  render() {
    return (
      <div>
        <button onClick={() => this.IncrementCount ()}>INCREMENT</button>
      </div>
    );
  }
}
export default Lifecycle;