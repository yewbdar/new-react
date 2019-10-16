import React, { Component } from 'react'
import axios from 'axios'
export default class PostList extends Component {
    state={
        title:'',
        body:'',

    }
    onChangeHandler =(e)=>{
        this.setState({[e.target.name] : e.target.value})
    }
    submitData =(e)=>{
          e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
             .then(response => console.log(response))
             .catch(error => console.log(error));
             
    }
    render() {
        return (
            <div>
                <label>Title</label>
                <input type='text' name="title" onChange={this.onChangeHandler}/><br/>
                <label>body</label>
                <input type='text' name='body' onChange={this.onChangeHandler}/><br/>
                <input type="submit" value="submit" onClick={this.submitData}/>
            </div>
        )
    }
}
