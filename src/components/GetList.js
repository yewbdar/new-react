import React, { Component } from 'react'
import axios from 'axios'
export default class GetList extends Component {

    state={
        data:[],
        errorMsg:''
    }
    componentDidMount=()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
             .then(Response => {
                   console.log(Response.data)
                 this.setState({data:Response.data},console.log('hllo',this.state.data))
             })
             .catch(error => {
                this.setState({errorMsg:"error retriving data"})
             }
             )
    }
    render() {
        return (
            <div>
                {this.state.data .length ? 
                this.state.data.map(i => <span key={i.id}>{i.title}</span>):
                 <div> {this.state.errorMsg}</div>}
            </div>
        )
    }
}

