import React, { Component } from 'react'

export default class RefsDemo extends Component {
    inputRef = React.createRef()
    componentDidMount(){
        this.inputRef.current.focus();
        console.log(this.inputRef)
    }
    clickEventHandler =()=> {
       alert(this.inputRef.current.value)
    }
    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef}/>
                <button onClick={this.clickEventHandler}>click</button>
            </div>
        )
    }
}
