import React, { Component } from 'react'

export default class CounterTwo extends Component {
    state={
        count:0
    }
    increment = () =>{
      this.setState(priv => ({count:priv.count + 1}))
    }
    render() {
        return (
            <div>
                {this.props.render(this.state.count, this.increment)}
            </div>
        )
    }
}
