import React, { Component } from 'react'
import { userConsumer } from './UserContext'

export default class ComponentF extends Component {
    render() {
        return (
            <userConsumer >
                {(user) => {return <div>hello {user} </div>}}
            </userConsumer>
           
            
        )
    }
}
