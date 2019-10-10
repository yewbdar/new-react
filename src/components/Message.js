import  React, { Component } from 'react';

class Message extends Component {
    state={
        message:'welcome visitor'
    }
    render() {
        return (
            <div>
                  <h1>{this.state.message}</h1>
                  <button onClick={()=>{this.setState({message:'thank You for subscribing '})}}> subscrib </button>
            </div>
        );
    }
}

export default Message;