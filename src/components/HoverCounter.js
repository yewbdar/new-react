import React, { Component } from 'react'
import WithCounter from './WithCounter'

 class HoverCounter extends Component {
    
    render() {
        const {increment,count} = this.props
        return (
            <div>
                <h1 onMouseOver={increment}>count {count} time</h1>
            
            </div>
        )
    }
}
export default WithCounter(HoverCounter)
