import React, { Component } from 'react'
import WithCounter from './WithCounter'
 class ClickCounter extends Component {
    render() {
       const {increment,count} = this.props
        return (
            <div>
                <button onClick={increment}>count {count} time</button>
            
            </div>
        )
    }
}

export default WithCounter(ClickCounter,10)
