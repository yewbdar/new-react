import React, { Component } from 'react'

 class ClickCounterTwo extends Component {
    
    render() {
        const {increment,count} = this.props
        return (
            <div>
                <button onClick={increment}>count {count} time</button>
            </div>
        )
    }
}
export default  ClickCounterTwo