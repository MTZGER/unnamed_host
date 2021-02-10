import React, { Component } from 'react'
import Title from "./Title"

class Chat extends Component {
    componentDidMount() {
        console.log(this.props.match.params.id)
    }
    render() {
        return (
            <div className="chat">
                <Title title="Chat">
                    
                </Title>
            </div>
        )
    }
}

export default Chat
