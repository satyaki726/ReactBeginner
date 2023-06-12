import React, { Component } from 'react'

export class Counter extends Component {
 
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
   
//For doing operation without knowing the previous state    
/*
    increment(){
        this.setState({
            count : this.state.count + 1
        },()=>{console.log(this.state.count)})
        
    }
*/

//For doing operation knowing the previous state

    increment(){
        this.setState((prevState,props) =>({
            count:prevState.count+1
        }),
        ()=>{console.log(this.state.count)})
    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
    return (
      <div>
          <div>Count - {this.state.count}</div>
          <button onClick={()=>this.incrementFive()}>Incr</button>
      </div>
    )
  }
}

export default Counter