import React, { Component } from 'react'
 class LifecycleB extends Component {
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
        return null
    }
    componentDidUpdate(){
        console.log('LifecycleB','componentDidUpdate')  
    }
    render() {
        console.log('LifecycleB','render')
        return (
            <div>
                LifecycleB
            </div>
        )
    }
}
export default React.memo(LifecycleB)