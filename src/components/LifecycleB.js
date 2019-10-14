import React, { Component } from 'react'
export default class LifecycleB extends Component {
    state = {
        name:"yooo"
    }
    static  getDerivedStateFromProps(nextProps, prevState) {
        console.log('LifecycleB','getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('LifecycleB','componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('LifecycleB','shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifecycleB','getSnapshotBeforeUpdate')
    }
    componentDidUpdate(){
        console.log('LifecycleB','componentDidUpdate')  
    }
    render() {
        console.log('LifecycleB','render')
        return (
            <div>
                <button onClick={()=>{this.setState({name:'whats up'})}}>lifecycleB</button>
                
            </div>
        )
    }
}