import React, { Component, useEffect } from 'react'
import Title from "./Title"

function Chat(props) {
    useEffect(() => {
        console.log(props.match.params.id)
    }, [])

    return (
        <div className="chat">
            <Title title="Chat">
                
            </Title>
        </div>
    )
}

export default Chat
