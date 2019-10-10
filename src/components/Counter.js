import React, { Component } from 'react'

export default class Counter extends Component {
    state={
        count:0
    }
    increment(){
        this.setState((privi =>({count:privi.count + 1})), ()=>{
            console.log("this is the updated state ", this.state.count)
        })
    }
    render() {
        return (
            <div>
                count: {this.state.count}
                <button onClick={()=>this.increment()}> count up</button>
            </div>
        )
    }
}

