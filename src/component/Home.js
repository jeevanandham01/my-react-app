import React from "react";

class Home extends React.Component{
    state = {
        count:0
    };

    increaseCount = () =>{
        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log (`count state update ${this.state.count}`);
        })
    };
 render(){
    return(
        <div>
            <h2>React State Example</h2>
            <h4>Button was clicked  {this.state.count} </h4>
            <button onClick ={this.increaseCount}>Cilck me!</button>
        </div>
    )
 }


}

export default Home;