import React, { Component } from 'react'
import LifecycleB from './LifecycleB'
export default class LifecycleA extends Component {
    state = {
        name:"yooo"
    }
    static  getDerivedStateFromProps(nextProps, prevState) {
        console.log('LifecycleA','getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('LifecycleA','componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('LifecycleA','shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifecycleA','getSnapshotBeforeUpdate')
    }
    componentDidUpdate(){
        console.log('LifecycleA','componentDidUpdate')  
    }
    render() {
        console.log('LifecycleA','render')
        return (
            <div>
                <button onClick={()=>{this.setState({name:'whats up'})}}>lifecycleB</button>
                
                <LifecycleB/>
            </div>
        )
    }
}
