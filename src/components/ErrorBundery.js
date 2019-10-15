import React, { Component } from 'react'

export default class ErrorBundery extends Component {

    state={
        hasError:false
    }
    static getDerivedStateFromError(error){
       return this.hasError = true;
       
          
    }
    render() {
       if(!this.state.hasError){
        return (
            <h1>
                something went wrong 
            </h1>
        )
       }else{
           return(
               this.props.children
           )
       }
    }
}
