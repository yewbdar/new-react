import React, { Component } from 'react'
import { format } from 'upath'

export default class Form extends Component {
    state={
        userName:"",
        comment:'',
        topics:''
    }
    handleUsesrNameChange =(event)=>{
         this.setState({[event.target.name]:event.target.value} , console.log(this.state))
    }
    submitHandler=(e)=>{
       e.preventDefault();
      
       console.log(this.state)
    }
    render() {
        return (
            <form onSubmit={this.submitHandler}>
            <div>
                <label>User name</label>
                <input  type='text'  name='userName' value={this.state.userName} onChange={this.handleUsesrNameChange}/>
            </div>
            <div>
                <label>comment</label>
                <textarea name='comment' value={this.state.comment} onChange={this.handleUsesrNameChange}></textarea>
            </div>
            <div>
                <label>Topic</label>
                <select name='topics' onChange={this.handleUsesrNameChange}>
                    <option value='react'>react</option>
                    <option value='angular'>angular</option>
                    <option value='html'>html</option>
                </select>
            </div>
            <div>
                <button type='submit'>submit</button>
            </div>
            </form>
        )
    }
}
