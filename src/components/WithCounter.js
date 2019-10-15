import React, { Component } from 'react'
const WithCounter = (WrrapedComponent) =>{
 class WithCounter extends Component {
    state={
        count:0
    }
    increment =()=>{
      this.setState(priv => ({count:priv.count + 1}))
    }

    render() {
        return (
            <WrrapedComponent count={this.state.count} increment={this.increment}/>
        )
    }
}
return WithCounter
}
export default WithCounter
