import React, { Component } from 'react'


import ChildComponent from './ChildComponent'

export default class ParentComponet extends Component {
    state={
        massage:'yoyea'
    }
    eventHaldlet=(str)=>{
        console.log(this.state.massage ,"hello", str)
        
    }
    render() {
        return (
            <div>
                <ChildComponent eventHandler={this.eventHaldlet}/>
            </div>
        )
    }
}
