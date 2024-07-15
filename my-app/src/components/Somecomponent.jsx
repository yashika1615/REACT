import React, { Component } from 'react';

class SomeComponent extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    }
    this.increment = this.increement.bind(this)
  }
  
  increment() {
    this.setState(() => ({
      count: this.state.count + 1,
   }))
  }


  render() {
    return (
      <div style={{textAlign: 'center', padding:'30px'}}>
        <button onClick={()=> this.increment()}> Click Me</button>
        <p>{this.state.count} </p>
      </div>
    )
  }
}

export default SomeComponent;
