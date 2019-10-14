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
    render() {
        return (
            <div>
                lifecycleB
            </div>
        )
    }
}