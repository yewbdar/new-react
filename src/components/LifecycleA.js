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
    render() {
        return (
            <div>
                <LifecycleB/>
            </div>
        )
    }
}
