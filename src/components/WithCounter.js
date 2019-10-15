import React, { Component } from 'react'
const WithCounter = (WrrapedComponent,x) =>{
 class WithCounter extends Component {
    state={
        count:0
    }
    increment =()=>{
      this.setState(priv => ({count:priv.count + x}))
    }

    render() {
        return (
            <WrrapedComponent 
            count={this.state.count} 
            increment={this.increment}
            {...this.props} // to get all props which pass from original component 
            />

        )
    }
}
return WithCounter
}
export default WithCounter
