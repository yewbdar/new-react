import React, { Component } from 'react'

export default class HoverCounterTwo extends Component {
    
    render() {
        const {increment,count} = this.props
        return (
                <div>
                    <h1 onMouseOver={increment}>count{count} time</h1>
                </div>
            )
    }
}
