import React, { Component } from 'react'

export default class ClassClick extends Component {
    eventHandling(){
        console.log('this is class event handling')
    }
    render() {
        return (
            <div>
                <button onClick={this.eventHandling}>Class handling</button>
            </div>
        )
    }
}
